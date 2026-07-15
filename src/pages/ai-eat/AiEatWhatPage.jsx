import React, { useState, useEffect } from 'react';
import topDialog from '@/assets/images/顶部对话.png';
import dialog1 from '@/assets/images/对话1.png';
import dialog2 from '@/assets/images/对话2.png';
import dialog3 from '@/assets/images/对话3.png';
import bottomDialog from '@/assets/images/底部对话.png';
import RecommendCard from '@/components/RecommendCard';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';

// 视口宽度（对应设计稿 @3x：1125 → 375）
const VIEW_W = 375;
// AI吃啥.png 比例 1076 : 1010
const AI_RATIO = 1010 / 1076;

// 逐段展示的对话图片（宽度均为 1125按 375 缩放，高度按比例算）
const dialogs = [
  { src: dialog1, h: (813 / 1125) * VIEW_W },
  { src: dialog2, h: (648 / 1125) * VIEW_W },
  { src: dialog3, h: (429 / 1125) * VIEW_W },
];

// 打字机式逐行展示单张对话图片：通过容器高度从 0 增长到目标高度实现「逐渐加载」
function TypewriterImage({ src, height, active, onDone }) {
  const [revealH, setRevealH] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf;
    const start = performance.now();
    const duration = Math.max(600, height * 4); // 速度：约每像素4ms
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setRevealH(height * p);
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else if (onDone) {
        onDone();
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, height, onDone]);

  return (
    <div style={{ height: active ? revealH : 0, overflow: 'hidden', transition: 'none' }}>
      <img src={src} alt="AI对话" style={{ width: VIEW_W, display: 'block' }} />
    </div>
  );
}

// 淡入包裹
function FadeIn({ show, children, delay = 0 }) {
  return (
    <div
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(12px)',
        transition: `opacity .5s ease ${delay}ms, transform .5s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// AI吃啥 弹出页：从上到下三部分逐步动态加载
// ① 顶部图片式文字  ② 对话文字逐字加载  ③ 家常炒菜推荐卡片 + 底部图片式文字
function AiEatWhatPage({ visible, onClose }) {
  // stage: 0 顶部  1 对话逐段  2 推荐卡片+底部
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
        className="relative z-10 bg-[#F4F5F7] overflow-y-auto scrollbar-hide"
        style={{ width: pageWidth, minHeight: pageMinHeight, maxHeight: '100vh' }}
        data-ai-alt="弹窗主体"
      >
        {/* 关闭按钮 */}
        <div
          className="sticky top-0 z-20 flex justify-end px-[12px] py-[8px] bg-[#F4F5F7]/90 backdrop-blur"
          data-ai-alt="弹窗头部"
        >
          <div className="w-[28px] h-[28px] rounded-full bg-black/10 flex items-center justify-center cursor-pointer active:scale-95" onClick={onClose}>
            <span className="text-[16px] text-[#505259] leading-none">✕</span>
          </div>
        </div>

        {/* ① 上半部分：图片式文字（顶部对话） */}
        <FadeIn show={stage >= 0}>
          <img src={topDialog} alt="顶部对话" style={{ width: VIEW_W, display: 'block' }} />
        </FadeIn>

        {/* ② 对话文字：逐段逐字动态加载 */}
        <div className="px-[0px]">
          {dialogs.map((d, i) => (
            <TypewriterImage
              key={i}
              src={d.src}
              height={d.h}
              active={stage >= 1 && dialogStep >= i}
              onDone={() => {
                if (i < dialogs.length - 1) {
                  setDialogStep((s) => Math.max(s, i + 1));
                } else {
                  setStage(2); // 对话加载完，进入推荐部分
                }
              }}
            />
          ))}
        </div>

        {/* ③ 家常炒菜推荐卡片组件（去加购 / 去下单跳转） */}
        <FadeIn show={stage >= 2}>
          <div className="px-[12px] py-[10px] flex flex-col gap-[12px]">
            <RecommendCard index={0} onAddToCart={() => setRoute('cart')} onOrder={() => setRoute('checkout')} />
            <RecommendCard index={1} onAddToCart={() => setRoute('cart')} onOrder={() => setRoute('checkout')} />
          </div>
          {/* 推荐下方整体文字图片 */}
          <img src={bottomDialog} alt="底部对话" style={{ width: VIEW_W, display: 'block' }} />
        </FadeIn>
      </div>
    </div>
  );
}

export default AiEatWhatPage;