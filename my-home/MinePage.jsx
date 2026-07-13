import React from 'react';
import TopNav from './components/TopNav';
import ProfileCard from './components/ProfileCard';
import OrderCard from './components/OrderCard';
import TripleCard from './components/TripleCard';
import ProductList from './components/ProductList';
import FloatingSwitch from './components/FloatingSwitch';
import BottomTabBar from './components/BottomTabBar';

function MinePage() {
  return (
    <div className="relative w-[375px] bg-[#F2F3F5] min-h-[812px] pb-[80px] overflow-hidden" data-ai-alt="我的页面容器">
      {/* 顶部背景渐变 */}
      <div 
        className="absolute top-0 left-0 w-full h-[348px] z-0 pointer-events-none"
        style={{ 
          background: 'linear-gradient(180deg, #FDECE1 0%, #FDF4ED 40%, #F2F3F5 100%)'
        }}
        data-ai-alt="顶部暖米色渐变背景"
      />
      
      <div className="relative z-10" data-ai-alt="滚动内容区">
        {/* 顶部固定或模拟固定的状态栏空间 (假设在TopNav中实现或这里留白) */}
        <div className="h-[44px] w-full flex items-center justify-between px-[20px]" data-ai-alt="状态栏占位">
            <span className="text-[14px] font-medium text-[#1A1A1A]" data-ai-alt="时间">6:18</span>
            <div className="flex items-center gap-[4px]" data-ai-alt="系统图标">
                 <img src="https://img13.360buyimg.com/ling/jfs/t1/409481/6/2546/723/69c2de08Fa289c674/0276048030243529.png" className="w-[18px] h-[12px]" alt="信号" />
                 <img src="https://img13.360buyimg.com/ling/jfs/t1/407050/20/11513/1335/69c2de43F1fa9a203/027605403cd0ea60.png" className="w-[21px] h-[15px]" alt="wifi" />
                 <div className="w-[24px] h-[12px] border border-[#1A1A1A] rounded-[3px] flex items-center p-[1px]"><div className="bg-[#1A1A1A] h-full w-[80%] rounded-[1px]"></div></div>
            </div>
        </div>

        <TopNav />
        
        <div className="px-[8px] flex flex-col gap-[12px] pb-[20px] pt-[12px]" data-ai-alt="主要内容流">
          <ProfileCard />
          <OrderCard />
          <TripleCard />
          <ProductList />
        </div>
      </div>

      <FloatingSwitch />
      <BottomTabBar />
    </div>
  );
}

export default MinePage;
