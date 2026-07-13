import React from 'react';
import { navigateTo } from '../../prototype/navigation';

function BottomNav() {
  const tabs = [
    { key: 'homeSpecial', label: '特价', isSelected: true, isDog: true },
    { key: 'explore', label: '逛', isSelected: false, icon: 'https://img13.360buyimg.com/ling/jfs/t1/403484/12/17244/2993/69ba8ecdF1a70b1cc/02760600602e6204.png' },
    { key: 'messages', label: '消息', isSelected: false, isFa: true, faClass: 'fa-regular fa-comment-dots' },
    { key: 'cart', label: '购物车', isSelected: false, icon: 'https://img13.360buyimg.com/ling/jfs/t1/405281/12/3967/2192/69ba8eceF72ecc2d3/02760600608a544b.png' },
    { key: 'myHome', label: '我的', isSelected: false, icon: 'https://img13.360buyimg.com/ling/jfs/t1/403259/27/13365/2792/69ba8eceF7faa7969/02760600604d1a7b.png' }
  ];

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] h-[82px] bg-white shadow-[0_-0.5px_0_rgba(0,0,0,0.05)] flex px-[12px] z-50" data-ai-list="true">
      {tabs.map((tab, idx) => (
        <div key={idx} className="flex-1 flex flex-col items-center justify-start pt-[6px] cursor-pointer relative" onClick={() => navigateTo(tab.key)} data-ai-alt={`底导-${tab.label}`}>
          {tab.isDog ? (
            <div className="w-[48px] h-[48px] rounded-full bg-gradient-to-b from-[#FF2A3A] to-[#FF0F23] flex items-center justify-center -mt-[14px] shadow-md border-[2.5px] border-white z-10">
              <img src="https://img13.360buyimg.com/img/jfs/t1/410261/2/4872/4542/69c77bdaF7d48f8cd/027606f06fe02f84.png" />
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="w-[28px] h-[28px] flex items-center justify-center mb-[2px]">
                {tab.isFa ? (
                  <div className="relative mt-[2px]">
                    <i className={`${tab.faClass} text-[22px] text-[#505259]`}></i>
                    <div className="absolute top-0 right-0 w-[6px] h-[6px] bg-red-500 rounded-full border border-white"></div>
                  </div>
                ) : (
                  <img src={tab.icon} className="w-[24px] h-[24px]" alt={tab.label} />
                )}
              </div>
              <span className="text-[10px] font-medium text-[#505259]">{tab.label}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default BottomNav;