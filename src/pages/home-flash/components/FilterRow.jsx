import React from 'react';

function FilterRow() {
  return (
    <div className="w-full h-[44px] bg-transparent flex items-center gap-[8px] overflow-hidden relative px-[12px] border-b border-[#F0F0F0]" data-ai-alt="筛选行">
      <div className="h-[32px] px-[12px] bg-white border border-[#E5E5E5] rounded-[6px] flex items-center gap-[4px] flex-shrink-0" data-ai-alt="综合排序">
        <span className="text-[13px] font-medium text-[#1A1A1A]">综合排序</span>
        <i className="fa fa-angle-down text-[#1A1A1A] text-[10px]"></i>
      </div>
      <div className="h-[32px] px-[12px] bg-white border border-[#E5E5E5] rounded-[6px] flex items-center flex-shrink-0" data-ai-alt="百亿补贴">
        <span className="text-[13px] font-medium text-[#1A1A1A]">百亿补贴</span>
      </div>
      <div className="h-[32px] px-[12px] bg-white border border-[#E5E5E5] rounded-[6px] flex items-center flex-shrink-0" data-ai-alt="热菜现炒">
        <span className="text-[13px] font-medium text-[#1A1A1A]">热菜现炒</span>
      </div>
      <div className="h-[32px] px-[12px] bg-white border border-[#E5E5E5] rounded-[6px] flex items-center flex-shrink-0" data-ai-alt="品牌商家">
        <span className="text-[13px] font-medium text-[#1A1A1A]">品牌商家</span>
      </div>
      {/* Right Fixed Filter Entry */}
      <div className="absolute right-[12px] h-[44px] w-[40px] bg-gradient-to-r from-transparent via-white to-white flex items-center justify-center z-10" data-ai-alt="末尾筛选">
        <i className="fa fa-bars text-[#1A1A1A] text-[16px]"></i>
      </div>
    </div>
  );
}

export default FilterRow;