import React, { useState, useEffect, useRef } from 'react';
import topDialog from '@/assets/images/顶部对话.png';
import dialog1 from '@/assets/images/对话1.png';
import dialog2 from '@/assets/images/对话2.png';
import dialog3 from '@/assets/images/对话3.png';
import bottomDialog from '@/assets/images/底部对话.png';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';

// 视口宽度（对应设计稿 @3x：1125 → 375）
const VIEW_W = 375;
// AI吃啥.png 比例 1076 : 1010
const AI_RATIO = 1010 / 1076;

// 逐段展示的对话图片（宽度均为 1125按 375 缩放，高度按比例算）
const dialogs = [
  { src: dialog1, h: (813 / 1125) * VIEW_W },
  { src: dialog2, h: (648 / 1125) * VIEW_W, instant: true }, // 对话2 直接出现，不打字机
  { src: dialog3, h: (429 / 1125) * VIEW_W },
];

// 打字机式逐行展示单张对话图片：通过容器高度从 0 增长到目标高度实现「逐渐加载」
// 动画每段只播放一次：完成后固定为完全展开，父组件重渲染不会重播
function TypewriterImage({ src, height, active, onDone, instant = false }) {
  const [revealH, setRevealH] = useState(0);
  const [fadeIn, setFadeIn] = useState(false); // instant 模式的淡入状态
  const hasRunRef = useRef(false); // 是否已启动过动画（保证只跑一次）
  const doneRef = useRef(false); // 是否已播放完成
  const onDoneRef = useRef(onDone); // 持有最新回调，避免引用变化触发重跑
  onDoneRef.current = onDone;

  useEffect(() => {
    if (!active) return;
    if (hasRunRef.current) return; // 已经跑过则不再重播
    hasRunRef.current = true;

    // 直接出现（不打字机）：整段柔和淡入，视觉自然
    if (instant) {
      doneRef.current = true;
      setRevealH(height);
      // 下一帧触发淡入过渡（从透明+轻微下移 到 不透明+归位）
      requestAnimationFrame(() => setFadeIn(true));
      // 淡入结束后再回调，衔接下一段
      const t = setTimeout(() => {
        if (onDoneRef.current) onDoneRef.current();
      }, 500);
      return () => clearTimeout(t);
    }

    let raf;
    const start = performance.now();
    const duration = Math.max(1200, height * 10); // 速度：放慢，约每像素10ms
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setRevealH(height * p);
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        doneRef.current = true;
        setRevealH(height);
        if (onDoneRef.current) onDoneRef.current();
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, height, instant]);

  // 已完成的段固定为完全展开高度，避免任何重播
  const h = active ? (doneRef.current ? height : revealH) : 0;

  return (
    <div style={{ height: h, overflow: 'hidden', transition: 'none' }}>
      <img
        src={src}
        alt="AI对话"
        style={{
          width: VIEW_W,
          display: 'block',
          ...(instant
            ? {
                opacity: fadeIn ? 1 : 0,
                transform: fadeIn ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity .45s ease, transform .45s ease',
              }
            : {}),
        }}
      />
    </div>
  );
}

// （FadeIn 已移除，顶部/底部改用内联样式控制显隐）

// AI吃啥 弹出页：从上到下三部分逐步动态加载
// ① 顶部图片式文字  ② 对话文字逐字加载  ③ 底部图片式文字
function AiEatWhatPage({ visible, onClose }) {
  // stage: 0 顶部  1 对话逐段  2 底部
  const [stage, setStage] = useState(0);
  const [dialogStep, setDialogStep] = useState(0); // 当前正在加载的对话段
  const [route, setRoute] = useState(null); // null | 'cart' | 'checkout'

  useEffect(() => {
    if (!visible) return;
    setStage(0);
    setDialogStep(0);
    setRoute(null);
    const t1 = setTimeout(() => setStage(1), 600); // 顶部展示后进入对话
    return () => clearTimeout(t1);
  }, [visible]);

  if (!visible) return null;

  // 子页面：购物车 / 结算
  if (route === 'cart') return <CartPage onBack={() => setRoute(null)} />;
  if (route === 'checkout') return <CheckoutPage onBack={() => setRoute(null)} />;

  const pageWidth = VIEW_W;
  const pageMinHeight = pageWidth * AI_RATIO;

  return (
    <div className="fixed inset-0 z-[150] flex justify-center bg-black/40" data-ai-alt="AI吃啥弹出页">
      {/* 背景点击关闭 */}
      <div className="absolute inset-0" onClick={onClose} data-ai-alt="背景遮罩" />

      <div
        className="relative z-10 bg-[#F4F5F7] overflow-y-auto scrollbar-hide flex flex-col"
        style={{ width: pageWidth, minHeight: pageMinHeight, maxHeight: '100vh' }}
        data-ai-alt="弹窗主体"
      >
        {/* ① 顶部对话图（作为返回按钮，点击返回上一页） */}
        <div onClick={onClose} className="cursor-pointer active:opacity-90" data-ai-alt="顶部对话返回按钮">
          <img src={topDialog} alt="顶部对话" style={{ width: VIEW_W, display: 'block' }} />
        </div>

        {/* ② 对话文字：逐段逐字动态加载 */}
        <div className="px-[0px] flex flex-col gap-[0px]">
          {dialogs.map((d, i) => (
            <div key={i} className={i === 0 ? 'mt-[12px] mb-[6px]' : i === 1 ? 'mb-[12px]' : ''}>
            <TypewriterImage
              src={d.src}
              height={d.h}
              instant={d.instant}
              active={stage >= 1 && dialogStep >= i}
              onDone={() => {
                if (i < dialogs.length - 1) {
                  setDialogStep((s) => Math.max(s, i + 1));
                } else {
                  setStage(2); // 对话加载完，进入推荐部分
                }
              }}
            />
            </div>
          ))}
        </div>

        {/* ③ 底部图片式文字（与顶部同时出现，固定在页面最底端） */}
        <div className="mt-auto" data-ai-alt="底部固定区">
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