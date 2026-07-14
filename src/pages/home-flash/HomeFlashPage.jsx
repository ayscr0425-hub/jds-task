import React from 'react';
import ContentArea from './components/ContentArea';

function HomeFlashPage() {
  return (
    <div className="w-full h-screen bg-[#E8E8E8] flex justify-center" data-ai-alt="页面背景">
      <div className="w-[375px] h-[812px] bg-white relative overflow-hidden flex flex-col" data-ai-alt="有效页面">
        <ContentArea />
      </div>
    </div>
  );
}

export default HomeFlashPage;
