import React, { useState } from 'react';

function FeedTab() {
  const tabs = ['推荐', '玩具乐器', '运动户外', '童装童鞋', '手机', '潮玩IP'];
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div className="w-[375px] h-[40px] bg-[#F5F6FA] flex items-center px-[12px] overflow-x-auto whitespace-nowrap scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} data-ai-list="true" data-ai-alt="分类Tab条">
      {tabs.map((tab, idx) => {
        const isActive = activeIndex === idx;
        return (
          <div key={idx} onClick={() => setActiveIndex(idx)} className="flex flex-col items-center justify-center flex-shrink-0 relative px-[10px] cursor-pointer group">
            <span className={`text-[15px] transition-all duration-200 ${isActive ? 'text-[#1A1A1A] font-bold scale-105' : 'text-[#505259] font-normal group-hover:text-[#1A1A1A]/80'}`}>
              {tab}
            </span>
            {isActive && (
              <div className="w-[20px] h-[2px] bg-[#1A1A1A] absolute bottom-[-6px] rounded-full transition-all duration-300"></div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FeedTab;