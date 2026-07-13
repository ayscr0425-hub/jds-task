import React from 'react';
import CommonTopNav from '@/components/CommonTopNav';
import SearchBar from './components/SearchBar';
import ServiceEntryGrid from './components/ServiceEntryGrid';
import CategoryTabs from './components/CategoryTabs';
import WaterfallContent from './components/WaterfallContent';

function HomeNewPage() {
  return (
    <div className="mx-auto w-[375px] min-h-[762px] bg-[#F2F3F7] relative">
      <div className="w-full flex flex-col pb-[20px]">
        <div className="w-full flex flex-col z-50 sticky top-0 bg-[#FFFFFF]">
          <img
            src="https://img13.360buyimg.com/ling/jfs/t1/404856/37/5409/52769/69ba8ecfF97633b58/027624014039060b.png"
            className="absolute right-0 top-0 w-[144px] h-[80px] object-cover pointer-events-none z-0"
            alt="营销图"
            data-ai-alt="右上营销图"
          />
          
          <div className="w-full h-[44px] flex items-center justify-between px-[21px] relative z-10" data-ai-alt="状态栏">
            <span className="text-[15px] font-semibold text-[#1A1A1A] tracking-wide mt-[2px]">6:18</span>
            <div className="flex items-center gap-1.5" data-ai-alt="状态图标">
              <img src="https://img13.360buyimg.com/ling/jfs/t1/406256/22/10385/530/69bea5cdF162be29c/027604803078fb92.png" className="w-[18px] h-[12px]" alt="信号" />
              <img src="https://img13.360buyimg.com/ling/jfs/t1/404905/7/15702/762/69bea5ccF60e79eec/027605403cdae28a.png" className="w-[21px] h-[15px]" alt="WIFI" />
              <div className="w-[24px] h-[11px] border border-[#1A1A1A] rounded-[3px] p-[1px] flex items-center relative">
                <div className="h-full w-[80%] bg-[#1A1A1A] rounded-[1.5px]"></div>
                <div className="absolute -right-[2px] top-1/2 -translate-y-1/2 w-[1.5px] h-[4px] bg-[#1A1A1A] rounded-r-[1px]"></div>
              </div>
            </div>
          </div>

          <div className="relative z-10 w-full">
            <CommonTopNav activeTab="homeNew" />
          </div>

          <div className="w-full h-[46px] px-[8px] py-[4px] relative z-10 bg-transparent">
            <SearchBar />
          </div>
        </div>

        <div className="relative z-20 px-[8px] flex flex-col space-y-[0px] bg-white pb-[10px]">
          <ServiceEntryGrid />
          <CategoryTabs />
        </div>

        <div className="px-[8px] mt-[8px]">
          <WaterfallContent />
        </div>
      </div>
    </div>
  );
}

export default HomeNewPage;
