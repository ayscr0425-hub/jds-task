import React from 'react';
import TopArea from './components/TopArea';
import ContentArea from './components/ContentArea';
import BottomNav from './components/BottomNav';

function HomeFlashPage() {
  return (
    <div className="mx-auto w-[375px] min-h-[812px] bg-[#F2F3F5] relative overflow-hidden flex flex-col" data-ai-alt="页面容器">
      <TopArea />
      <ContentArea />
      <BottomNav />
    </div>
  );
}

export default HomeFlashPage;
