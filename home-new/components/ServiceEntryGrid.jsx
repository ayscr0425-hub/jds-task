import React from 'react';

function ServiceEntryGrid() {
  return (
    <div className="w-full pt-[16px] pb-[8px] flex justify-between items-end px-[4px]" data-ai-list="true" data-ai-alt="服务入口区">
      {/* 激活项 */}
      <div className="flex flex-col items-center flex-1" data-ai-alt="新品推荐入口">
        <img
          src="https://img13.360buyimg.com/ling/jfs/t1/405381/33/4868/9045/69ba8f11F6edf2753/027609c09c49e15e.png"
          className="w-[39px] h-[39px] object-contain"
          alt="新品推荐"
          data-ai-alt="新品推荐图标"
        />
        <div className="bg-[#CAB285] rounded-full px-[7px] py-[2px] -mt-[6px] relative z-10 shadow-sm">
          <span className="text-[12px] text-white font-medium whitespace-nowrap">新品推荐</span>
        </div>
      </div>
      {/* 普通项 1 */}
      <div className="flex flex-col items-center justify-end h-full flex-1 pb-[4px]" data-ai-alt="今日活动入口">
        <img
          src="https://img13.360buyimg.com/ling/jfs/t1/407889/38/7770/5101/69c26cceF6a2dd7a7/027605f06e0bafa7.png"
          className="w-[28px] h-[28px] object-contain mb-[4px]"
          alt="今日活动"
          data-ai-alt="今日活动图标"
        />
        <span className="text-[12px] text-[#666666]">今日活动</span>
      </div>
      {/* 普通项 2 */}
      <div className="flex flex-col items-center justify-end h-full flex-1 pb-[4px]" data-ai-alt="新奇集市入口">
        <div className="w-[28px] h-[28px] relative mb-[4px] flex items-center justify-center">
          <img
            src="https://img13.360buyimg.com/ling/jfs/t1/409014/1/4531/1225/69c2dddaF1fa678b1/0276017025f49070.png"
            className="w-[18px] h-[18px]"
            alt="新奇集市"
            data-ai-alt="新奇集市图标"
          />
        </div>
        <span className="text-[12px] text-[#666666]">新奇集市</span>
      </div>
      {/* 普通项 3 */}
      <div className="flex flex-col items-center justify-end h-full flex-1 pb-[4px]" data-ai-alt="试用领取入口">
        <div className="w-[28px] h-[28px] relative mb-[4px] flex items-center justify-center">
          <img
            src="https://img13.360buyimg.com/ling/jfs/t1/405399/25/15696/1296/69c2dddaF277baaca/027603c02a2110e8.png"
            className="w-[18px] h-[18px]"
            alt="试用领取"
            data-ai-alt="试用领取图标"
          />
        </div>
        <span className="text-[12px] text-[#666666]">试用领取</span>
      </div>
    </div>
  );
}

export default ServiceEntryGrid;
