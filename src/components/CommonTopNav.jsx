import React from 'react';
import { navigateTo } from '@/utils/navigation';

function CommonTopNav({ activeTab, theme = 'light' }) {
  const baseItemClass = 'flex items-center justify-center shrink-0 cursor-pointer active:scale-95 transition-transform h-full';
  
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-[#1A1A1A]';
  const activeTextColor = isDark ? 'text-white' : 'text-[#FF0F23]';
  const activeIndicatorColor = isDark ? 'bg-white' : 'bg-[#FF0F23]';

  return (
    <div className="w-full h-[44px] relative pl-[12px] flex items-end pb-[4px] z-40" data-ai-alt="公共顶部频道导航">
      <div className="flex items-end gap-[20px] h-full">
        {/* 特价 */}
        <div className={`${baseItemClass} relative`} onClick={() => navigateTo('homeSpecial')} data-ai-alt="特价tab">
          <span className={`text-[${activeTab === 'homeSpecial' ? '20px' : '16px'}] font-${activeTab === 'homeSpecial' ? 'semibold' : 'medium'} ${activeTab === 'homeSpecial' ? activeTextColor : textColor} transition-all`}>特价</span>
          {activeTab === 'homeSpecial' && (
            <div className={`absolute bottom-0 w-[20px] h-[2.5px] ${activeIndicatorColor} rounded-full`}></div>
          )}
        </div>

        {/* 首页 */}
        <div className={`${baseItemClass} relative`} onClick={() => navigateTo('homeMain')} data-ai-alt="首页tab">
          <span className={`text-[${activeTab === 'homeMain' ? '20px' : '16px'}] font-${activeTab === 'homeMain' ? 'semibold' : 'medium'} ${activeTab === 'homeMain' ? activeTextColor : textColor} transition-all`}>首页</span>
          {activeTab === 'homeMain' && (
            <div className={`absolute bottom-0 w-[20px] h-[2.5px] ${activeIndicatorColor} rounded-full`}></div>
          )}
        </div>

        {/* 秒送 */}
        <div className={`${baseItemClass} relative`} onClick={() => navigateTo('homeFlash')} data-ai-alt="秒送tab">
          <span className={`text-[${activeTab === 'homeFlash' ? '20px' : '16px'}] font-${activeTab === 'homeFlash' ? 'semibold' : 'medium'} ${activeTab === 'homeFlash' ? activeTextColor : textColor} transition-all`}>秒送</span>
          <div className="absolute -right-[22px] top-[4px] bg-[#FFCC00] rounded-[6px] px-[3px] py-[1px] flex items-center justify-center shrink-0 z-10">
            <span className="text-[9px] text-[#000000] font-medium leading-none transform scale-90 whitespace-nowrap">外卖</span>
          </div>
          {activeTab === 'homeFlash' && (
            <div className={`absolute bottom-0 w-[20px] h-[2.5px] ${activeIndicatorColor} rounded-full`}></div>
          )}
        </div>

        {/* 新品 */}
        <div className={`${baseItemClass} relative`} onClick={() => navigateTo('homeNew')} data-ai-alt="新品tab">
          <span className={`text-[${activeTab === 'homeNew' ? '20px' : '16px'}] font-${activeTab === 'homeNew' ? 'semibold' : 'medium'} ${activeTab === 'homeNew' ? (theme === 'dark' ? 'text-[#00DFD3]' : activeTextColor) : textColor} transition-all`}>新品</span>
          {activeTab === 'homeNew' && (
            <div className={`absolute bottom-0 w-[20px] h-[2.5px] ${theme === 'dark' ? 'bg-gradient-to-r from-[#7996F3] to-[#11CAB0]' : activeIndicatorColor} rounded-full`}></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CommonTopNav;
