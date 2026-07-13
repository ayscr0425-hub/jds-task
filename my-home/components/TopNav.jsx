import React from 'react';

function TopNav() {
  return (
    <div className="w-full h-[44px] flex items-center justify-between pl-[0px] pr-[16px]" data-ai-alt="顶部导航栏">
      {/* 左侧通知胶囊 */}
      <div 
        className="h-[32px] flex items-center pl-[12px] pr-[12px] gap-[6px] rounded-r-[16px]"
        style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.8) 100%)' }}
        data-ai-alt="快讯通知胶囊"
      >
        <img 
          src="https://img13.360buyimg.com/ling/jfs/t1/403727/9/18340/2666/69ba987aFfec70432/02760780405b646b.png"
          className="w-[30px] h-[16px] object-contain"
          data-ai-alt="快讯tag图"
          alt="快讯"
        />
        <span className="text-[12px] text-[#1A1A1A] max-w-[145px] truncate" data-ai-alt="通知文案">
          京东线上买药可以刷医保啦
        </span>
        <img 
          src="https://img13.360buyimg.com/ling/jfs/t1/407176/9/9873/587/69c12692F16f39f70/0276020020412053.png"
          className="w-[8px] h-[8px]"
          data-ai-alt="通知右箭头"
          alt="右箭头"
        />
      </div>

      {/* 右侧快捷功能组 */}
      <div className="flex items-center gap-[20px]" data-ai-alt="快捷功能组" data-ai-list="true">
        <div className="flex flex-col items-center gap-[2px]" data-ai-alt="客户服务">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/405422/19/18557/2185/69c2178bFc3d92ebe/027605005044aed1.png" className="w-[20px] h-[20px]" alt="客服" data-ai-alt="客服icon" />
          <span className="text-[10px] text-[#1A1A1A]" data-ai-alt="客服文案">客户服务</span>
        </div>
        <div className="flex flex-col items-center gap-[2px]" data-ai-alt="地址">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/404409/34/11934/2754/69ba987aF22e04184/027605005084ecea.png" className="w-[20px] h-[20px]" alt="定位" data-ai-alt="定位icon" />
          <span className="text-[10px] text-[#1A1A1A]" data-ai-alt="地址文案">地址</span>
        </div>
        <div className="flex flex-col items-center gap-[2px]" data-ai-alt="设置">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/405948/33/2880/1316/69ba987aF49b8682a/0276050050a0b9ca.png" className="w-[20px] h-[20px]" alt="设置" data-ai-alt="设置icon" />
          <span className="text-[10px] text-[#1A1A1A]" data-ai-alt="设置文案">设置</span>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
