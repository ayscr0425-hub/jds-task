import React, { useState } from 'react';
import CategoryRow from './CategoryRow';
import FilterRow from './FilterRow';
import MerchantCard from './MerchantCard';
import AiGuessFoodCard from '@/components/AiGuessFoodCard';

function ContentArea() {
  return (
    <div className="flex-1 overflow-y-auto pb-[20px] bg-[#F5F5F5]" data-ai-alt="滚动内容区">
       {/* Category Icons - brown background from CategoryRow */}
       <CategoryRow />

       {/* AI猜你喜欢吃 module */}
       <AiGuessFoodCard />

       {/* Filter Chips */}
       <FilterRow />

       {/* Merchant List */}
       <div className="w-[375px] px-[8px] flex flex-col gap-[8px] mt-[4px] pb-[20px]" data-ai-alt="店铺列表">
          <MerchantCard 
             type="1" 
             shopName="七鲜小厨（长保大厦店）"
             logo="https://img13.360buyimg.com/ling/jfs/t1/405680/35/4277/51353/69ba76a6Fee737971/02761201209f83d6.png"
          />
          <MerchantCard 
             type="2"
             shopName="西少爷旧宫万科店"
             logo="https://img13.360buyimg.com/ling/jfs/t1/404627/17/11482/54896/69ba76a0F538f74d1/02761201209fc524.png"
          />
       </div>
    </div>
  );
}

export default ContentArea;