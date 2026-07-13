import React from 'react';

function FilterRow() {
  return (
    <div className="w-[375px] h-[36px] bg-[#FFFFFF] mx-auto mt-[4px] flex items-center gap-[6px] overflow-hidden relative" data-ai-alt="筛选行">
      <div className="h-[30px] px-[12px] bg-[#F5F6FA] rounded-[6px] flex items-center gap-[4px] flex-shrink-0" data-ai-alt="综合排序">
        <span className="text-[11px] font-medium text-[#1A1A1A]">综合排序</span>
        <i className="fa fa-angle-down text-[#1A1A1A] text-[10px]"></i>
      </div>
      <div className="h-[30px] px-[12px] bg-[#F5F6FA] rounded-[6px] flex items-center flex-shrink-0" data-ai-alt="自提更省">
        <span className="text-[11px] font-medium text-[#1A1A1A]">自提更省</span>
      </div>
      <div className="h-[30px] px-[12px] bg-[#F5F6FA] rounded-[6px] flex items-center flex-shrink-0" data-ai-alt="品牌饭卡">
        <span className="text-[11px] font-medium text-[#1A1A1A]">品牌饭卡最高7折</span>
      </div>
      <div className="h-[30px] px-[12px] bg-[#F5F6FA] rounded-[6px] flex items-center gap-[4px] flex-shrink-0" data-ai-alt="百亿补贴">
        <span className="text-[11px] font-medium text-[#1A1A1A] whitespace-nowrap">百亿补贴</span>
        <i className="fa fa-filter text-[#1A1A1A] text-[10px]"></i>
      </div>
      {/* Right Fixed Filter Entry */}
      <div className="absolute right-0 h-[36px] w-[50px] bg-gradient-to-r from-transparent via-[#F2F3F5] to-[#F2F3F5] flex items-center justify-end pr-[4px] gap-[4px] z-10" data-ai-alt="末尾筛选">
        <i className="fa fa-filter text-[#595959] text-[10px]"></i>
        <span className="text-[11px] text-[#595959]">筛选</span>
      </div>
    </div>
  );
}

export default FilterRow;
