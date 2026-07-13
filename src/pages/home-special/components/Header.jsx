import React from 'react';
import { navigateTo } from '@/utils/navigation';
import CommonTopNav from '@/components/CommonTopNav';

function Header() {
  return (
    <div className="w-[375px] bg-[#FFFFFF] flex flex-col z-50 sticky top-0" data-ai-alt="复合头部">
      {/* 右上角营销附着图 */}
      <img
        src="https://img13.360buyimg.com/ling/jfs/t1/404856/37/5409/52769/69ba8ecfF97633b58/027624014039060b.png"
        alt="营销图"
        className="absolute top-0 right-0 w-[144px] h-[80px] pointer-events-none z-0"
        data-ai-alt="右上营销图"
      />

      {/* 状态栏占位 */}
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

      {/* 一级大tab */}
      <div className="relative z-10 w-full">
         <CommonTopNav activeTab="homeSpecial" />
      </div>

      {/* 搜索框 */}
      <div className="w-full h-[46px] px-[8px] py-[4px] relative z-10 bg-transparent">
        <div className="w-[359px] h-[38px] rounded-[8px] border border-[#FF0F23] bg-white flex items-center px-[12px] justify-between box-border shadow-sm" data-ai-alt="搜索框">
          <div className="flex items-center gap-[8px]">
            {/* 扫一扫红框图标替代原图标 */}
            <div className="w-[18px] h-[18px] rounded-[3px] relative flex items-center justify-center" data-ai-alt="扫码icon">
              <img src="https://img13.360buyimg.com/img/jfs/t1/407842/6/12216/568/69c77b46F69dfdd3a/0276028028b494bf.png" />
            </div>
            <span className="text-[14px] text-[#333333]" data-ai-alt="搜索词">蕉内防滑拖鞋男</span>
            <div className="bg-[#FF0F23] text-white text-[10px] rounded-[3px] px-[4px] py-[1.5px]" data-ai-alt="特价红签">特价</div>
          </div>
          <div className="flex items-center gap-[10px]">
            <img src="https://img13.360buyimg.com/ling/jfs/t1/405048/1/7500/2124/69ba8ed0Fea42936d/02760500506ee279.png" className="w-[20px] h-[20px]" data-ai-alt="相机icon" />
            <div className="w-[1px] h-[12px] bg-black/10" data-ai-alt="分隔线"></div>
            <span className="text-[15px] font-semibold text-[#1A1A1A]" data-ai-alt="搜索按钮">搜索</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
