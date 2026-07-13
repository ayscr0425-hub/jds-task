import React from 'react';

function CommonTopNav() {
  return (
    <div className="w-full h-[44px] relative pl-[12px] flex items-end pb-[4px] z-40" data-ai-alt="公共顶部频道导航">
      <div className="flex items-end gap-[20px] h-full">
        {/* 特价 */}
        <div className="flex items-center justify-center shrink-0 h-full relative">
          <span className="text-[16px] font-medium text-[#1A1A1A] transition-all">特价</span>
        </div>

        {/* 首页 */}
        <div className="flex items-center justify-center shrink-0 h-full relative">
          <span className="text-[16px] font-medium text-[#1A1A1A] transition-all">首页</span>
        </div>

        {/* 秒送（当前激活） */}
        <div className="flex items-center justify-center shrink-0 h-full relative">
          <span className="text-[20px] font-semibold text-[#FF0F23] transition-all">秒送</span>
          <div className="absolute -right-[22px] top-[4px] bg-[#FFCC00] rounded-[6px] px-[3px] py-[1px] flex items-center justify-center shrink-0 z-10">
            <span className="text-[9px] text-[#000000] font-medium leading-none transform scale-90 whitespace-nowrap">外卖</span>
          </div>
          <div className="absolute bottom-0 w-[20px] h-[2.5px] bg-[#FF0F23] rounded-full"></div>
        </div>

        {/* 新品 */}
        <div className="flex items-center justify-center shrink-0 h-full relative">
          <span className="text-[16px] font-medium text-[#1A1A1A] transition-all">新品</span>
        </div>
      </div>
    </div>
  );
}

export default CommonTopNav;