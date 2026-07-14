import React, { useState, useRef } from 'react';
import topImage from '@/assets/images/top.png';
import listImage from '@/assets/images/list.png';
import AiGuessFoodCard from '@/components/AiGuessFoodCard';

function ContentArea() {
  const [topHeight, setTopHeight] = useState(0);

  return (
    <div className="flex-1 overflow-y-auto scrollbar-hide pb-[20px] bg-[#F5F5F5]" data-ai-alt="滚动内容区">
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
       <AiGuessFoodCard />

       {/* Filter + Merchant list static image */}
       <div className="px-[8px]">
         <img src={listImage} alt="店铺列表" className="w-full" />
       </div>
    </div>
  );
}

export default ContentArea;