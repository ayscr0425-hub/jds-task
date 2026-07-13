import React from 'react';

function SecondaryStrip() {
  return (
    <div className="w-[375px] h-[65px] flex items-center relative overflow-hidden bg-white" data-ai-clip="true" data-ai-alt="二级入口条">
       {/* 背景底纹平铺层 */}
       <img src="https://img13.360buyimg.com/ling/jfs/t1/405997/20/13659/6099/69bfcc0cF3f3ba184/02765db0ff142a3e.png" className="absolute inset-0 w-[380px] h-[65px] z-0 object-cover" alt="底纹" />
       
       {/* 左侧选中态 */}
       <div className="w-[95px] h-[65px] flex items-center justify-center relative z-10 flex-shrink-0" data-ai-alt="左选中块">
         <div className="absolute inset-0 z-[-1] flex items-center justify-center ml-[4px]">
            <div className="w-[70px] h-[45px] bg-[#FFEAEB] rounded-[16px] opacity-80"></div>
         </div>
         <div className="flex flex-col items-center mt-[2px]">
           <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-b from-[#FF5A71] to-[#FF0F23] flex items-center justify-center shadow-sm mb-[4px]">
             <span className="text-white font-bold text-[18px]">%</span>
           </div>
           <div className="bg-[#FF0F23] rounded-full px-[8px] py-[3px] shadow-sm flex items-center justify-center leading-none mt-[-6px] z-10">
              <span className="text-[11px] text-white font-medium">特价推荐</span>
           </div>
         </div>
       </div>

       {/* 右侧横向列表 */}
       <div className="flex-1 flex items-center overflow-x-auto scrollbar-hide pl-[4px] pr-[12px] z-10 h-full" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} data-ai-list="true">
         <div className="flex gap-[12px] items-center">
           {/* 今日热卖 */}
           <div className="w-[45px] flex-shrink-0 flex flex-col items-center gap-[4px] mt-[4px]" data-ai-alt="今日热卖">
             <div className="w-[28px] h-[28px] bg-gradient-to-b from-[#FF5A71] to-[#FF0F23] rounded-t-[4px] rounded-b-[10px] flex flex-col items-center justify-center shadow-sm relative">
               <div className="w-[8px] h-[2px] bg-white opacity-50 absolute top-[4px] rounded-full"></div>
               <span className="text-white text-[10px] font-bold mt-[2px]">特卖</span>
             </div>
             <span className="text-[11px] text-[#333333] font-medium whitespace-nowrap">今日热卖</span>
           </div>

           {/* 9.9包邮 */}
           <div className="w-[45px] flex-shrink-0 flex flex-col items-center gap-[4px] mt-[4px]" data-ai-alt="9.9包邮">
             <div className="w-[28px] h-[28px] bg-gradient-to-b from-[#FF7A00] to-[#FF3B00] rounded-[6px] flex items-center justify-center shadow-sm">
               <span className="text-white text-[13px] font-bold">9.9</span>
             </div>
             <span className="text-[11px] text-[#333333] font-medium whitespace-nowrap">9.9包邮</span>
           </div>

           {/* 京喜自营 */}
           <div className="w-[45px] flex-shrink-0 flex flex-col items-center gap-[4px] mt-[4px]" data-ai-alt="京喜自营">
             <div className="w-[28px] h-[28px] bg-gradient-to-b from-[#FFCC00] to-[#FF9900] rounded-[4px] flex flex-col items-center justify-center shadow-sm relative overflow-hidden">
               <div className="absolute -left-[3px] top-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-white rounded-full"></div>
               <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-white rounded-full"></div>
               <span className="text-[#CC3300] text-[12px] font-bold z-10">1元</span>
             </div>
             <span className="text-[11px] text-[#333333] font-medium whitespace-nowrap">京喜自营</span>
           </div>

           {/* 试用领取 */}
           <div className="w-[45px] flex-shrink-0 flex flex-col items-center gap-[4px] mt-[4px]" data-ai-alt="试用领取">
             <div className="w-[28px] h-[28px] bg-gradient-to-b from-[#B366FF] to-[#8000FF] rounded-t-[8px] rounded-b-[4px] flex items-center justify-center shadow-sm relative mt-[2px]">
               <div className="w-[12px] h-[5px] border-[2px] border-white rounded-t-[6px] border-b-0 absolute -top-[5px]"></div>
               <span className="text-white text-[12px] font-bold">1分</span>
             </div>
             <span className="text-[11px] text-[#333333] font-medium whitespace-nowrap">试用领取</span>
           </div>

           {/* 领券 (新增补充) */}
           <div className="w-[45px] flex-shrink-0 flex flex-col items-center gap-[4px] mt-[4px]" data-ai-alt="领券">
             <div className="w-[28px] h-[28px] bg-gradient-to-b from-[#FF8800] to-[#FF4400] rounded-[6px] flex items-center justify-center shadow-sm">
               <span className="text-white text-[12px] font-bold">领券</span>
             </div>
             <span className="text-[11px] text-[#333333] font-medium whitespace-nowrap">领券</span>
           </div>
         </div>
       </div>
    </div>
  );
}

export default SecondaryStrip;