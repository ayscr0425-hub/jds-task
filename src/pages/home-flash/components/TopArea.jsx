import React from 'react';
import { navigateTo } from '@/utils/navigation';
import CommonTopNav from '@/components/CommonTopNav';

function TopArea() {
  return (
    <div className="w-[375px] flex flex-col z-50 sticky top-0 bg-[#FFFFFF]" data-ai-alt="顶部区域">
      {/* Status Bar Placeholder */}
      <div className="w-full h-[44px] flex items-center justify-between px-[21px] relative z-10" data-ai-alt="状态栏">
        <span className="text-[15px] font-semibold text-[#1A1A1A] tracking-wide mt-[2px]" data-ai-alt="时间">6:18</span>
        <div className="flex items-center gap-1.5" data-ai-alt="状态图标">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/406256/22/10385/530/69bea5cdF162be29c/027604803078fb92.png" className="w-[18px] h-[12px]" alt="信号" />
          <img src="https://img13.360buyimg.com/ling/jfs/t1/404905/7/15702/762/69bea5ccF60e79eec/027605403cdae28a.png" className="w-[21px] h-[15px]" alt="WIFI" />
          <div className="w-[24px] h-[11px] border border-[#1A1A1A] rounded-[3px] p-[1px] flex items-center relative">
            <div className="h-full w-[80%] bg-[#1A1A1A] rounded-[1.5px]"></div>
            <div className="absolute -right-[2px] top-1/2 -translate-y-1/2 w-[1.5px] h-[4px] bg-[#1A1A1A] rounded-r-[1px]"></div>
          </div>
        </div>
      </div>

      {/* Top Primary Tabs */}
      <div className="w-full relative z-10">
        <CommonTopNav activeTab="homeFlash" />
        {/* Right Corner Floating Ad */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 overflow-hidden rounded-l-full shadow-sm" data-ai-alt="右上角广告图">
          <img src="https://l-api.jd.com/relay-aigc/design/image/prompt/a banner of a refrigerator and a washing machine, colorful, white background?width=128&height=64" className="h-[40px] w-auto object-cover" alt="家电广告" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full h-[46px] px-[8px] py-[4px] relative z-10 bg-transparent" data-ai-alt="搜索栏容器">
        <div className="w-[359px] h-[38px] bg-white border border-[#FF0400] rounded-[14px] flex items-center px-[12px] gap-[8px] relative shadow-[0_2px_8px_rgba(255,4,0,0.1)]" data-ai-alt="搜索框主体">
          <i className="fa fa-search text-[#FF0400] text-[14px] w-[22px] h-[22px] flex items-center justify-center" data-ai-alt="搜索图标"></i>
          <span className="text-[14px] text-[#595959] ml-1" data-ai-alt="占位词">米线</span>
          <div className="bg-[#FCD222] text-[#665005] text-[10px] px-[4px] py-[1px] rounded-[4px] ml-1" data-ai-alt="框内标签">外卖</div>
          <span className="absolute right-[12px] text-[14px] text-[#FF0400] font-medium" data-ai-alt="搜索按钮">搜索</span>
        </div>
      </div>
    </div>
  );
}

export default TopArea;
