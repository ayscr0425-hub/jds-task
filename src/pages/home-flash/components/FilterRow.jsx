import React from 'react';

function FilterRow() {
  return (
    <div className="w-full h-[36px] bg-[#F2F3F5] mt-[4px] flex items-center gap-[6px] overflow-hidden relative px-[8px]" data-ai-alt="筛选行">
      <div className="h-[30px] px-[12px] bg-[#E8E9ED] rounded-[6px] flex items-center gap-[4px] flex-shrink-0" data-ai-alt="综合排序">
        <span className="text-[11px] font-medium text-black">综合排序</span>
        <i className="fa fa-angle-down text-black text-[10px]"></i>
      </div>
      <div className="h-[30px] px-[12px] bg-[#E8E9ED] rounded-[6px] flex items-center flex-shrink-0" data-ai-alt="自提更省">
        <span className="text-[11px] font-medium text-black">到店自提</span>
      </div>
      <div className="h-[30px] px-[12px] bg-[#E8E9ED] rounded-[6px] flex items-center gap-[4px] flex-shrink-0" data-ai-alt="品牌饭卡">
        <i className="fa fa-fire text-[#FF4D00] text-[10px]"></i>
        <span className="text-[11px] font-medium text-black">1元爆品</span>
      </div>
      <div className="h-[30px] px-[12px] bg-[#E8E9ED] rounded-[6px] flex items-center flex-shrink-0" data-ai-alt="百亿补贴">
        <span className="text-[11px] font-medium text-black whitespace-nowrap">超级月卡折上折</span>
      </div>
      {/* Right Fixed Filter Entry */}
      <div className="absolute right-[8px] h-[36px] w-[30px] bg-[#F2F3F5] flex items-center justify-center z-10" data-ai-alt="末尾筛选">
        <i className="fa fa-filter text-[#d1d6db] text-[10px]"></i>
      </div>
    </div>
  );
}

export default FilterRow;
