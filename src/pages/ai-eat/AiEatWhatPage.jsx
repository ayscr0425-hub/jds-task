import React, { useState, useEffect, useRef, useCallback } from 'react';
import topDialog from '@/assets/images/顶部对话.png';
import dialog1 from '@/assets/images/对话1.png';
import dialog2 from '@/assets/images/对话2_2.png';
import dialog3 from '@/assets/images/对话3.png';
import bottomDialog from '@/assets/images/底部对话.png';
import bottomDialog1 from '@/assets/images/底部对话1.png';
import typingDialog from '@/assets/images/打字-对话.png';
import typingCard from '@/assets/images/打字-卡片.png';
import lemonDialog from '@/assets/images/柠檬水-对话.png';
import lemonCard from '@/assets/images/柠檬水-卡片.png';
import addCart1 from '@/assets/images/辣椒炒肉加购1.png';
import addCart2 from '@/assets/images/辣椒炒肉加购2.png';
import jump1Img from '@/assets/images/跳转1.png';
import checkoutCard from '@/assets/images/结算卡片.png';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';

const VIEW_W = 375;
const AI_RATIO = 1010 / 1076;

// 第一轮对话配置
const defaultDialogs = [
  { src: dialog1, h: (813 / 1125) * VIEW_W },
  { src: dialog2, h: (648 / 1125) * VIEW_W, instant: true },
  { src: dialog3, h: (429 / 1125) * VIEW_W },
];

// 后续轮对话配置：打字-对话 → 打字-卡片 → 对话3
const variantDialogs = [
  { src: typingDialog, h: (813 / 1125) * VIEW_W },
  { src: typingCard, h: (648 / 1125) * VIEW_W, instant: true },
  { src: dialog3, h: (429 / 1125) * VIEW_W },
];

// 点击对话3后：柠檬水-对话 → 柠檬水-卡片（仅2张）
const lemonDialogs = [
  { src: lemonDialog, h: (813 / 1125) * VIEW_W },
  { src: lemonCard, h: (648 / 1125) * VIEW_W, instant: true },
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

function AiEatWhatPage({ visible, onClose, initialView = 'dialog' }) {
  const [stage, setStage] = useState(0);
  const [route, setRoute] = useState(null);
  // view: 'dialog' | 'addCart1' | 'addCart2' | 'jump1' | 'checkout'
  const [view, setView] = useState('dialog');

  // 多轮对话：每轮独立 step + type
  const [rounds, setRounds] = useState([]);
  const scrollRef = useRef(null);
  const nextIdRef = useRef(0);
  const isNearBottomRef = useRef(true);
  const [bottomType, setBottomType] = useState('default');

  // 监听滚动
  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      isNearBottomRef.current = scrollHeight - scrollTop - clientHeight < 80;
    }
  }, []);

  // 持续自动滚底
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
    setView(initialView);
    setBottomType('default');
    nextIdRef.current = 0;
    setRounds([{ id: nextIdRef.current++, step: 0, type: 'default' }]);
    isNearBottomRef.current = true;
    const t1 = setTimeout(() => setStage(1), 600);
    return () => clearTimeout(t1);
  }, [visible]);

  // 某段对话完成 → 激活同轮下一段
  const handleDialogDone = (roundId, dialogIndex, dialogCount) => {
    if (dialogIndex < dialogCount - 1) {
      setRounds(prev => prev.map(r =>
        r.id === roundId ? { ...r, step: Math.max(r.step, dialogIndex + 1) } : r
      ));
    }
  };

  // 点击底部 → 分两步：先切换底部图片，再追加新一轮并切回
  const handleBottomClick = () => {
    if (bottomType === 'default') {
      // 点击底部对话.png → 切换为底部对话1.png（表示正在输入）
      setBottomType('variant');
    } else {
      // 点击底部对话1.png → 追加新一轮对话 + 切回底部对话.png（消息已发出）
      isNearBottomRef.current = true;
      setRounds(prev => [...prev, { id: nextIdRef.current++, step: 0, type: 'variant' }]);
      setBottomType('default');
    }
  };

  // 点击对话3（每轮最后一张且含对话3的轮次）→ 追加 lemon 轮
  const handleDialog3Click = () => {
    isNearBottomRef.current = true;
    setRounds(prev => [...prev, { id: nextIdRef.current++, step: 0, type: 'lemon' }]);
  };

  if (!visible) return null;

  const pageWidth = VIEW_W;
  const pageMinHeight = pageWidth * AI_RATIO;

  // 流程图视图：对话2左键/右键触发的加购/跳转流程
  if (view !== 'dialog') {
    return (
      <div className="fixed inset-0 z-[150] flex justify-center bg-black/40" data-ai-alt="AI吃啥弹出页">
        <div className="absolute inset-0" onClick={onClose} data-ai-alt="背景遮罩" />
        <div
          className="relative z-10 bg-[#F4F5F7] overflow-y-auto scrollbar-hide"
          style={{ width: pageWidth, minHeight: pageMinHeight, maxHeight: '100vh' }}
          data-ai-alt="流程图主体"
        >
          <img
            src={
              view === 'addCart1' ? addCart1 :
              view === 'addCart2' ? addCart2 :
              view === 'jump1' ? jump1Img :
              checkoutCard
            }
            alt={view}
            style={{ width: VIEW_W, display: 'block' }}
            className="cursor-pointer"
            onClick={() => {
              if (view === 'addCart1') setView('addCart2');
              else if (view === 'addCart2') setView('checkout');
              else if (view === 'jump1') setView('checkout');
            }}
          />
        </div>
      </div>
    );
  }

  if (route === 'cart') return <CartPage onBack={() => setRoute(null)} />;
  if (route === 'checkout') return <CheckoutPage onBack={() => setRoute(null)} />;

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
          {rounds.map((round, roundIdx) => {
            const roundDialogs = round.type === 'variant' ? variantDialogs : round.type === 'lemon' ? lemonDialogs : defaultDialogs;
            const isLastDialog = (i) => i === roundDialogs.length - 1;
            const isDialog3Round = round.type === 'default' || round.type === 'variant';
            const isLatestRound = roundIdx === rounds.length - 1;
            // 对话2可点击条件：最新轮 + index=1 + 对话3已激活(step>=2) + 含对话3的轮次
            const dialog2Clickable = isLatestRound && isDialog3Round;
            return (
              <div key={round.id} className="flex flex-col">
                {roundDialogs.map((d, i) => {
                  const isD2 = i === 1 && dialog2Clickable && round.step >= 2;
                  const isD3 = isLastDialog(i) && isDialog3Round;
                  return (
                    <div
                      key={`${round.id}-${i}`}
                      className={`${i === 0 ? 'mt-[12px] mb-[6px]' : i === 1 ? 'mb-[12px]' : ''} ${isD2 || isD3 ? 'cursor-pointer' : ''}`}
                      onClick={
                        isD3 ? handleDialog3Click :
                        isD2 ? () => setView('addCart1') : undefined
                      }
                      onContextMenu={
                        isD2 ? (e) => { e.preventDefault(); setView('checkout'); } : undefined
                      }
                    >
                      <TypewriterImage
                        src={d.src}
                        height={d.h}
                        instant={d.instant}
                        active={stage >= 1 && round.step >= i}
                        onDone={() => handleDialogDone(round.id, i, roundDialogs.length)}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* 底部图片 - 固定，点击切换/追加新一轮 */}
        <div
          className="shrink-0 cursor-pointer active:opacity-90"
          data-ai-alt="底部固定区"
          onClick={handleBottomClick}
        >
          <img
            src={bottomType === 'variant' ? bottomDialog1 : bottomDialog}
            alt="底部对话"
            style={{ width: VIEW_W, display: 'block', opacity: stage >= 0 ? 1 : 0, transition: 'opacity .5s ease' }}
          />
        </div>
      </div>
    </div>
  );
}

export default AiEatWhatPage;