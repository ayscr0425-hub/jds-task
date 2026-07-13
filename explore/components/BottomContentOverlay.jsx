import React, { useState } from 'react';

function BottomContentOverlay() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="absolute left-0 bottom-[80px] w-full z-10 pointer-events-none" data-ai-alt="底部内容信息区">
      <div className="px-[11px] pb-[10px] w-[295px] flex flex-col pointer-events-auto" data-ai-alt="信息区容器">
        
        {/* 排行榜标签 */}
        <div className="flex items-center bg-[#0000004D] rounded-[4px] px-[6px] py-[4px] w-fit mb-[10px] backdrop-blur-sm cursor-pointer active:opacity-70 transition-opacity" data-ai-alt="排行榜标签">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/403834/3/16199/1102/69ba97beF5eac94c6/0276040040a476ae.png" className="w-[16px] h-[16px] object-contain mr-[4px]" alt="Rank" data-ai-alt="榜单图标" />
          <span className="text-white text-[12px] font-medium" data-ai-alt="榜单名称">A型连衣裙热卖榜</span>
          <div className="w-[1px] h-[10px] bg-white/30 mx-[6px]" data-ai-alt="分隔线"></div>
          <span className="text-white text-[12px] font-medium" data-ai-alt="榜单名次">第1名</span>
          <i className="fas fa-chevron-right text-[10px] text-white/80 ml-[4px]" data-ai-alt="跳转箭头"></i>
        </div>

        {/* 作者名 */}
        <div className="text-white text-[16px] font-semibold mb-[4px] drop-shadow-md cursor-pointer active:opacity-80 transition-opacity" data-ai-alt="作者名">
          @是小仙女呀
        </div>

        {/* 描述文案 */}
        <div className="text-white text-[14px] leading-[20px] mb-[12px] pr-[10px] relative transition-all duration-300" data-ai-alt="视频描述">
          <span className="opacity-90 transition-opacity">
            毛孔大得能插秧？快来试试它吧 保湿{isExpanded ? '补水，让你肌肤焕发光彩，每天都水当当！还有更多超值优惠等你来拿！' : '...'}
          </span>
          <span className="font-medium ml-[4px] drop-shadow-sm cursor-pointer select-none active:opacity-70" onClick={() => setIsExpanded(!isExpanded)} data-ai-alt="展开按钮">
            {isExpanded ? '收起' : '展开'}
          </span>
        </div>

        {/* 商品卡 */}
        <div className="w-[274px] h-[50px] bg-[rgba(53,53,53,0.6)] rounded-[8px] flex items-center p-[6px] mb-[4px] backdrop-blur-md cursor-pointer active:scale-[0.98] transition-transform" data-ai-alt="商品推荐卡">
          {/* 左侧商品图 */}
          <div className="w-[38px] h-[38px] rounded-[4px] overflow-hidden flex-shrink-0 mr-[8px] bg-white" data-ai-alt="商品缩略图容器">
             <img src="https://img13.360buyimg.com/ling/jfs/t1/409476/26/2845/1304683/69c2de1fF6d2431f3/02765dcb7051ef97.png" className="w-full h-full object-cover" alt="商品" data-ai-alt="商品图片" />
          </div>
          {/* 右侧文本列 */}
          <div className="flex flex-col justify-center flex-1 overflow-hidden" data-ai-alt="右侧商品信息">
            <div className="flex items-center mb-[4px]" data-ai-alt="标题行">
              <div className="bg-[#FA2C19] text-white text-[10px] font-medium px-[3px] py-[1px] rounded-[2px] mr-[4px] leading-[12px] whitespace-nowrap flex-shrink-0" data-ai-alt="自营标签">自营</div>
              <div className="text-white text-[13px] font-medium leading-[14px] truncate flex-1" data-ai-alt="商品标题">澳洲进口羊驼绒大衣 气质高级</div>
            </div>
            <div className="flex items-center gap-[4px]" data-ai-alt="标签行">
              <div className="border border-white/40 bg-white/10 text-white text-[10px] px-[4px] py-[1px] rounded-[2px] leading-[12px] whitespace-nowrap" style={{borderWidth: '0.5px'}} data-ai-alt="优惠标签">满299减60</div>
              <div className="border border-white/40 bg-white/10 text-white text-[10px] px-[4px] py-[1px] rounded-[2px] leading-[12px] whitespace-nowrap" style={{borderWidth: '0.5px'}} data-ai-alt="免息标签">白条免息</div>
            </div>
          </div>
        </div>

      </div>

      {/* F5: 进度条 (紧贴内容区下边缘，占据视口宽度) */}
      <div className="w-full px-[11px] h-[10px] flex items-center absolute bottom-0 cursor-pointer group" data-ai-alt="播放进度条区域">
        <div className="relative w-full h-[2px] group-hover:h-[4px] bg-white/20 rounded-[2px] transition-all duration-200" data-ai-alt="进度轨道">
           {/* 前景进度部分 */}
           <div className="absolute left-0 top-0 h-full bg-white/80 rounded-[2px] transition-all duration-200" style={{ width: '64px' }} data-ai-alt="已播进度"></div>
           {/* 进度头Thumb */}
           <div className="absolute top-1/2 -translate-y-1/2 w-[11px] h-[11px] bg-white rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.25)] group-hover:scale-110 transition-transform duration-200" style={{ left: '59px' }} data-ai-alt="进度滑块"></div>
        </div>
      </div>
    </div>
  );
}

export default BottomContentOverlay;
