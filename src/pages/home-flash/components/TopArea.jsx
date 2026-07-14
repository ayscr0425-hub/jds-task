import React from 'react';

function TopArea() {
  return (
    <div className="w-[375px] flex flex-col z-50 sticky top-0 bg-[#7B4E32]" data-ai-alt="顶部区域">
      {/* Status Bar */}
      <div className="w-full h-[44px] flex items-center justify-between px-[16px] relative z-10" data-ai-alt="状态栏">
        <span className="text-[15px] font-semibold text-white tracking-wide mt-[2px]" data-ai-alt="时间">6:18</span>
        <div className="flex items-center gap-1.5" data-ai-alt="状态图标">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/406256/22/10385/530/69bea5cdF162be29c/027604803078fb92.png" className="w-[18px] h-[12px] invert brightness-0" alt="信号" />
          <img src="https://img13.360buyimg.com/ling/jfs/t1/404905/7/15702/762/69bea5ccF60e79eec/027605403cdae28a.png" className="w-[21px] h-[15px] invert brightness-0" alt="WIFI" />
          <div className="w-[24px] h-[11px] border border-white rounded-[3px] p-[1px] flex items-center relative">
            <div className="h-full w-[80%] bg-white rounded-[1.5px]"></div>
            <div className="absolute -right-[2px] top-1/2 -translate-y-1/2 w-[1.5px] h-[4px] bg-white rounded-r-[1px]"></div>
          </div>
        </div>
      </div>

      {/* Top Navigation Bar */}
      <div className="w-full h-[44px] flex items-center justify-between px-[16px] relative z-10" data-ai-alt="顶部导航栏">
        <div className="flex items-center gap-[6px]">
          <i className="fa fa-chevron-left text-white text-[16px]"></i>
          <span className="text-[18px] font-semibold text-white">外卖</span>
        </div>
        <div className="flex items-center gap-[4px] text-white text-[13px] max-w-[180px]">
          <i className="fa fa-map-marker-alt text-[12px] flex-shrink-0"></i>
          <span className="truncate">京东总部1号D座</span>
          <i className="fa fa-chevron-right text-white text-[10px] flex-shrink-0"></i>
        </div>
        <div className="flex items-center gap-[14px]">
          <i className="fa fa-heart text-white text-[16px]"></i>
          <i className="fa fa-share text-white text-[16px]"></i>
          <i className="fa fa-ellipsis-h text-white text-[16px]"></i>
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full h-[48px] px-[12px] py-[4px] relative z-10 bg-transparent" data-ai-alt="搜索栏容器">
        <div className="w-full h-[36px] bg-white rounded-[8px] flex items-center px-[16px] gap-[8px] relative shadow-sm">
          <i className="fa fa-search text-[#999999] text-[14px]"></i>
          <span className="text-[13px] text-[#999999] flex-1">搜索热搜词</span>
          <span className="text-[15px] text-[#1A1A1A] font-medium">搜索</span>
        </div>
      </div>
    </div>
  );
}

export default TopArea;