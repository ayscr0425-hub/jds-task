import React, { useState } from 'react';

function CategoryTabs() {
  const tabs = ['推荐', '玩具乐器', '手机', '潮玩IP', '运动户外', '童装童鞋', '家电数码'];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full overflow-x-auto mt-[12px] pb-[4px] scrollbar-hide" data-ai-clip="true">
       <div className="flex px-[12px] gap-[16px] min-w-max items-center" data-ai-list="true" data-ai-alt="品类Tab">
          {tabs.map((tab, idx) => {
             const isActive = activeIndex === idx;
             return (
               <div key={idx} onClick={() => setActiveIndex(idx)} className="relative flex flex-col items-center cursor-pointer group">
                  <div className={`text-[${isActive ? '15px' : '14px'}] ${isActive ? 'text-[#1A1A1A] font-bold scale-105' : 'text-[#1A1A1A]/70 font-normal group-hover:text-[#1A1A1A]'} whitespace-nowrap transition-all duration-200`}>
                     {tab}
                  </div>
                  {isActive && <div className="absolute -bottom-[4px] w-[20px] h-[3px] rounded-full bg-[#1A1A1A] transition-all duration-300"></div>}
               </div>
             );
          })}
       </div>
       <style jsx>{`
         .scrollbar-hide::-webkit-scrollbar {
            display: none;
         }
         .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
         }
       `}</style>
    </div>
  );
}

export default CategoryTabs;
