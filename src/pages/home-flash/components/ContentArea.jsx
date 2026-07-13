import React, { useState } from 'react';
import CategoryRow from './CategoryRow';
import FilterRow from './FilterRow';
import MerchantCard from './MerchantCard';
import AiGuessFoodCard from '@/components/AiGuessFoodCard';
import AiChatModal from '@/components/AiChatModal';

function ContentArea() {
  const [chatVisible, setChatVisible] = useState(false);
  const [initialInput, setInitialInput] = useState('');

  const handleOpenChat = (text) => {
    setInitialInput(typeof text === 'string' ? text : '');
    setChatVisible(true);
  };

  return (
    <div className="flex-1 overflow-y-auto pb-[90px]" data-ai-alt="滚动内容区">
       {/* Category Icons */}
       <CategoryRow />

       <AiGuessFoodCard onOpenChat={handleOpenChat} />

       {/* Filter Chips */}
       <FilterRow />

       {/* Merchant List */}
       <div className="w-[375px] px-[8px] flex flex-col gap-[8px] mt-[8px] pb-[20px]" data-ai-alt="店铺列表">
          <MerchantCard 
             type="1" 
             shopName="七鲜小厨(长保大厦店)"
             logo="https://img13.360buyimg.com/ling/jfs/t1/405680/35/4277/51353/69ba76a6Fee737971/02761201209f83d6.png"
          />
          <MerchantCard 
             type="2"
             shopName="巴比手工鲜肉包 (次渠店)"
             logo="https://img13.360buyimg.com/ling/jfs/t1/403781/2/16588/115556/69ba7697Fcade0d37/02761201203f750c.png"
          />
          
          {/* Partial Next Card */}
          <div className="w-[359px] h-[44px] bg-white rounded-t-[12px] p-[12px] overflow-hidden flex items-start gap-2" data-ai-alt="第三张卡截面">
             <div className="w-[24px] h-[24px] bg-red-100 rounded-full flex items-center justify-center overflow-hidden">
               <img src="https://img13.360buyimg.com/ling/jfs/t1/404627/17/11482/54896/69ba76a0F538f74d1/02761201209fc524.png" className="w-full h-full object-cover" />
             </div>
             <span className="text-[14px] font-semibold text-[#1A1A1A]" data-ai-alt="店铺名">西少爷旧宫万科店</span>
             <div className="ml-auto bg-[#FFF0F4] text-[#FF0400] border border-[#FFC2C3] text-[10px] px-1 rounded-[2px]">京东秒送</div>
          </div>
       </div>
       <AiChatModal visible={chatVisible} onClose={() => setChatVisible(false)} initialInput={initialInput} />
    </div>
  );
}

export default ContentArea;
