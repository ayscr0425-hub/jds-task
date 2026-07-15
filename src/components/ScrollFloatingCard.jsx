import React, { useState } from 'react';
import floatingCardImage from '@/assets/images/浮层卡片.png';

function ScrollFloatingCard({ visible, onAiClick }) {
  const [dismissed, setDismissed] = useState(false);

  if (!visible || dismissed) return null;

  return (
    <div
      className="fixed bottom-[80px] left-1/2 -translate-x-1/2 w-[359px] z-40 animate-slide-up cursor-pointer"
      onClick={onAiClick}
      data-ai-alt="下滑浮层卡片"
    >
      <img src={floatingCardImage} alt="AI帮你选" className="w-full" />
      <div
        className="absolute top-[6px] right-[8px] w-[20px] h-[20px] flex items-center justify-center"
        onClick={(e) => {
          e.stopPropagation();
          setDismissed(true);
        }}
        data-ai-alt="关闭浮层"
      >
        <span className="text-[14px] text-[#C2C4CC]">✕</span>
      </div>
    </div>
  );
}

export default ScrollFloatingCard;