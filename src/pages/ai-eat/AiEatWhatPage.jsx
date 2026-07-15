import React, { useState, useEffect, useRef, useCallback } from 'react';
import topDialog from '@/assets/images/顶部对话.png';
import dialog1 from '@/assets/images/对话1.png';
import dialog2 from '@/assets/images/对话2.png';
import dialog3 from '@/assets/images/对话3.png';
import bottomDialog from '@/assets/images/底部对话.png';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';

const VIEW_W = 375;
const AI_RATIO = 1010 / 1076;

const dialogs = [
  { src: dialog1, h: (813 / 1125) * VIEW_W },
  { src: dialog2, h: (648 / 1125) * VIEW_W, instant: true },
  { src: dialog3, h: (429 / 1125) * VIEW_W },
];

function TypewriterImage({ src, height, active, onDone, instant = false }) {
  const [revealH, setRevealH] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const doneRef = useRef(false);
  const rafRef = useRef(null);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    // active 变为 false 时重置状态，允许重新播放
    if (!active) {
      setRevealH(0);
      setFadeIn(false);
      doneRef.current = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }
    // 已完成则不重播
    if (doneRef.current) return;

    if (instant) {
      doneRef.current = true;
      setRevealH(height);
      requestAnimationFrame(() => setFadeIn(true));
      const t = setTimeout(() => { if (onDoneRef.current) onDoneRef.current(); }, 500);
      return () => clearTimeout(t);
    }

    const start = performance.now();
    const duration = Math.max(1200, height * 10);
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setRevealH(height * p);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        doneRef.current = true;
        setRevealH(height);
        if (onDoneRef.current) onDoneRef.current();
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, height, instant]);

  const h = active ? (doneRef.current ? height : revealH) : 0;

  return (
    <div style={{ height: h, overflow: 'hidden', transition: 'none' }}>
      <img
        src={src}
        alt="AI对话"
        style={{
          width: VIEW_W,
          display: 'block',
          ...(instant ? {
            opacity: fadeIn ? 1 : 0,
            transform: fadeIn ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity .45s ease, transform .45s ease',
          } : {}),
        }}
      />
    </div>
  );
}

function AiEatWhatPage({ visible, onClose }) {
  const [stage, setStage] = useState(0);
  const [route, setRoute] = useState(null);

  // 多轮对话：每轮独立 step（0/1/2 表示当前激活到第几张）
  const [rounds, setRounds] = useState([]);
  const scrollRef = useRef(null);
  const nextIdRef = useRef(0);
  const isNearBottomRef = useRef(true); // 用户是否在底部附近

  // 监听滚动：用户上滑查看历史时停止自动滚底，滑回底部时恢复
  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      isNearBottomRef.current = scrollHeight - scrollTop - clientHeight < 80;
    }
  }, []);

  // 持续自动滚底：动画期间内容持续增长，需要持续滚动跟随
  useEffect(() => {
    if (!visible || rounds.length === 0) return;
    const interval = setInterval(() => {
      if (scrollRef.current && isNearBottomRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, 10);
    return () => clearInterval(interval);
  }, [visible, rounds.length]);

  // 初始化第一轮
  useEffect(() => {
    if (!visible) return;
    setStage(0);
    setRoute(null);
    nextIdRef.current = 0;
    setRounds([{ id: nextIdRef.current++, step: 0 }]);
    isNearBottomRef.current = true;
    const t1 = setTimeout(() => setStage(1), 600);
    return () => clearTimeout(t1);
  }, [visible]);

  // 某段对话完成 → 激活同轮下一段
  const handleDialogDone = (roundId, dialogIndex) => {
    if (dialogIndex < dialogs.length - 1) {
      setRounds(prev => prev.map(r =>
        r.id === roundId ? { ...r, step: Math.max(r.step, dialogIndex + 1) } : r
      ));
    }
  };

  // 点击底部 → 追加新一轮
  const handleBottomClick = () => {
    isNearBottomRef.current = true;
    setRounds(prev => [...prev, { id: nextIdRef.current++, step: 0 }]);
  };

  if (!visible) return null;

  if (route === 'cart') return <CartPage onBack={() => setRoute(null)} />;
  if (route === 'checkout') return <CheckoutPage onBack={() => setRoute(null)} />;

  const pageWidth = VIEW_W;
  const pageMinHeight = pageWidth * AI_RATIO;

  return (
    <div className="fixed inset-0 z-[150] flex justify-center bg-black/40" data-ai-alt="AI吃啥弹出页">
      <div className="absolute inset-0" onClick={onClose} data-ai-alt="背景遮罩" />

      <div
        className="relative z-10 bg-[#F4F5F7] flex flex-col"
        style={{ width: pageWidth, minHeight: pageMinHeight, maxHeight: '100vh' }}
        data-ai-alt="弹窗主体"
      >
        {/* 顶部对话图 - 固定 */}
        <div onClick={onClose} className="cursor-pointer active:opacity-90 shrink-0" data-ai-alt="顶部对话返回按钮">
          <img src={topDialog} alt="顶部对话" style={{ width: VIEW_W, display: 'block' }} />
        </div>

        {/* 中间可滚动对话区 - 支持上滑查看历史 */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto scrollbar-hide" onScroll={handleScroll}>
          {rounds.map((round) => (
            <div key={round.id} className="flex flex-col">
              {dialogs.map((d, i) => (
                <div key={`${round.id}-${i}`} className={i === 0 ? 'mt-[12px] mb-[6px]' : i === 1 ? 'mb-[12px]' : ''}>
                  <TypewriterImage
                    src={d.src}
                    height={d.h}
                    instant={d.instant}
                    active={stage >= 1 && round.step >= i}
                    onDone={() => handleDialogDone(round.id, i)}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* 底部图片 - 固定，点击追加新一轮 */}
        <div
          className="shrink-0 cursor-pointer active:opacity-90"
          data-ai-alt="底部固定区"
          onClick={handleBottomClick}
        >
          <img
            src={bottomDialog}
            alt="底部对话"
            style={{ width: VIEW_W, display: 'block', opacity: stage >= 0 ? 1 : 0, transition: 'opacity .5s ease' }}
          />
        </div>
      </div>
    </div>
  );
}

export default AiEatWhatPage;