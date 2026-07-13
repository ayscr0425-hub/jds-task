import React from 'react';
import { navigateTo } from '../../prototype/navigation';

function BottomTabBar() {
  const tabs = [
    { key: 'homeSpecial', label: '首页', icon: 'https://img13.360buyimg.com/ling/jfs/t1/403896/9/16462/1668/69ba987fFa04b4de8/0276058058d9378f.png', active: false },
    { key: 'explore', label: '逛', icon: 'https://img13.360buyimg.com/ling/jfs/t1/404375/40/13694/2771/69ba987fF25683f56/0276059058de8942.png', active: false },
    { key: 'messages', label: '消息', icon: 'https://img13.360buyimg.com/ling/jfs/t1/403815/25/16823/2504/69ba987fFad39e3e9/027605805847ae09.png', active: false },
    { key: 'cart', label: '购物车', icon: 'https://img13.360buyimg.com/ling/jfs/t1/405320/32/8563/1548/69ba9880F665010a3/02760580588f6e55.png', active: false },
    { key: 'myHome', label: '我的', icon: 'https://img13.360buyimg.com/ling/jfs/t1/404245/13/14133/2221/69ba9880Fbc490a74/02760580581ee265.png', active: true }
  ];

  return (
    <div 
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] h-[80px] bg-[#FFFFFF] z-30 flex flex-col"
      style={{ boxShadow: '0 -0.5px 0 0 rgba(0,0,0,0.12)' }}
      data-ai-alt="底部导航"
    >
      <div className="flex w-full h-[46px] mt-[4px]" data-ai-alt="导航项容器" data-ai-list="true">
        {tabs.map((tab, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center justify-center gap-[2px] cursor-pointer" onClick={() => navigateTo(tab.key)} data-ai-alt={`导航项-${tab.label}`}>
            <img src={tab.icon} className="w-[22px] h-[22px] object-contain" alt={tab.label} data-ai-alt="图标" />
            <span 
              className={`text-[11px] ${tab.active ? 'text-[#FF0F23] font-medium' : 'text-[#505259]'}`}
              data-ai-alt="文案"
            >
              {tab.label}
            </span>
          </div>
        ))}
      </div>
      {/* iOS Home Indicator */}
      <div className="w-full flex justify-center mt-[10px]" data-ai-alt="主页指示器容器">
        <div className="w-[134px] h-[5px] bg-[#1A1A1A] rounded-[3px]" data-ai-alt="home indicator" />
      </div>
    </div>
  );
}

export default BottomTabBar;
