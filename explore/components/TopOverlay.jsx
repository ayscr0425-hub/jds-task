import React from 'react';

function TopOverlay() {
  return (
    <div className="absolute top-0 left-0 w-[375px] z-10" data-ai-alt="顶部遮罩区">
      {/* F1: 状态栏 */}
      <div className="w-full h-[44px] flex items-center justify-between px-[21px]" data-ai-alt="顶部状态栏">
        <div className="text-white text-[15px] font-semibold tracking-wide" data-ai-alt="左侧时间">
          6:18
        </div>
        <div className="flex items-center gap-[4px]" data-ai-alt="右侧系统图标组">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/406462/24/18357/574/69c2de1dF983f81af/02760490317d3ed2.png" className="w-[18px] h-[12px] object-contain" alt="Cell" data-ai-alt="信号图标" />
          <img src="https://img13.360buyimg.com/ling/jfs/t1/406324/31/19070/852/69c2de1dF921ea3a1/027605503df0e7f6.png" className="w-[21px] h-[15px] object-contain" alt="Wifi" data-ai-alt="Wifi图标" />
          {/* 电池图标使用结构占位，因资产未直接提供独立图片 */}
          <div className="relative w-[24px] h-[11px] border border-white/80 rounded-[3px] ml-[2px] flex items-center p-[1px]" data-ai-alt="电池图标框">
            <div className="h-full w-[80%] bg-white rounded-[1.5px]" data-ai-alt="电池容量"></div>
            <div className="absolute -right-[2px] top-1/2 -translate-y-1/2 w-[1.5px] h-[4px] bg-white/80 rounded-r-[1px]" data-ai-alt="电池头"></div>
          </div>
        </div>
      </div>

      {/* F2: 频道导航 */}
      <div className="w-full h-[44px] flex items-center justify-between px-[16px]" data-ai-alt="顶部频道导航">
        <div className="w-[24px] h-[24px] flex items-center justify-center" data-ai-alt="左侧菜单入口">
          <i className="fas fa-bars text-white text-[18px]" data-ai-alt="汉堡菜单图标"></i>
        </div>
        <div className="flex flex-1 justify-center items-center gap-[24px]" data-ai-alt="中间频道Tab">
          <div className="text-white/80 text-[14px] font-medium" data-ai-alt="频道-短剧">短剧</div>
          <div className="text-white/80 text-[14px] font-medium" data-ai-alt="频道-关注">关注</div>
          <div className="flex items-center text-white/80 text-[14px] font-medium" data-ai-alt="频道-好礼">
            好礼
            <i className="fas fa-caret-down text-[10px] ml-[2px] mt-[1px] opacity-80" data-ai-alt="下拉箭头"></i>
          </div>
          <div className="text-white/80 text-[14px] font-medium" data-ai-alt="频道-直播">直播</div>
          <div className="relative flex flex-col items-center justify-center h-[44px]" data-ai-alt="频道-视频(激活)">
            <span className="text-white text-[14px] font-semibold">视频</span>
            <div className="absolute bottom-[6px] w-[16px] h-[3px] bg-white rounded-[2px]" data-ai-alt="激活下划线"></div>
          </div>
        </div>
        <div className="w-[24px] h-[24px] flex items-center justify-center" data-ai-alt="右侧搜索入口">
          <i className="fas fa-search text-white text-[18px]" data-ai-alt="搜索图标"></i>
        </div>
      </div>
    </div>
  );
}

export default TopOverlay;
