import React, { useState, useRef, useEffect } from 'react';
import topImage from '@/assets/images/top.png';
import listImage from '@/assets/images/list.png';
import AiGuessFoodCard from '@/components/AiGuessFoodCard';
import ScrollFloatingCard from '@/components/ScrollFloatingCard';
import AiEatWhatPage from '@/pages/ai-eat/AiEatWhatPage';

function ContentArea() {
  const [topHeight, setTopHeight] = useState(0);
  const [showFloatingCard, setShowFloatingCard] = useState(false);
  const [showAiChat, setShowAiChat] = useState(false);
  const [aiChatKey, setAiChatKey] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollTop = scrollRef.current.scrollTop;
        setShowFloatingCard(scrollTop > 100);
      }
    };

    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (el) {
        el.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto scrollbar-hide pb-[20px] bg-[#F5F5F5]"
        data-ai-alt="滚动内容区"
      >
        {/* Fixed top image */}
        <img
          src={topImage}
          alt="顶部"
          className="w-[375px] fixed top-0 z-10"
          style={{ left: '50%', transform: 'translateX(-50%)' }}
          onLoad={(e) => setTopHeight(e.target.offsetHeight)}
        />

        {/* Spacer for fixed image */}
        <div style={{ height: topHeight }} />

        {/* AI猜你喜欢吃 module */}
        <AiGuessFoodCard onCard3Click={() => { setAiChatKey(prev => prev + 1); setShowAiChat(true); }} />

        {/* Filter + Merchant list static image */}
        <div className="px-[8px]">
          <img src={listImage} alt="店铺列表" className="w-full" />
        </div>
      </div>

      {/* 下滑浮层卡片 */}
      <ScrollFloatingCard
        visible={showFloatingCard}
        onAiClick={() => { setAiChatKey(prev => prev + 1); setShowAiChat(true); }}
      />

      {/* AI吃啥弹出页 */}
      <AiEatWhatPage
        key={aiChatKey}
        visible={showAiChat}
        onClose={() => setShowAiChat(false)}
      />
    </>
  );
}

export default ContentArea;