import React, { useState } from 'react';

const RECOMMEND_POOL = [
  {
    shopName: '七鲜小厨',
    dishName: '辣椒炒肉盖饭',
    tag: '提神醒脑利器',
    desc: '根据你的口味推荐你尝鲜试试',
    deliveryTime: '28分钟达',
    distance: '2.9km',
    minPrice: '¥20',
    fee: '免运费',
    price: '¥43.00',
    discount: '6.7折',
    image: 'https://l-api.jd.com/relay-aigc/design/image/prompt/stir-fried pork with chili peppers rice bowl, delicious Chinese food, professional food photography?width=512&height=384'
  },
  {
    shopName: '西少爷',
    dishName: '肉夹馍套餐',
    tag: '口碑爆款',
    desc: '周围人都在吃，你值得一试',
    deliveryTime: '26分钟达',
    distance: '602m',
    minPrice: '¥15',
    fee: '免运费',
    price: '¥29.90',
    discount: '7.5折',
    image: 'https://l-api.jd.com/relay-aigc/design/image/prompt/Chinese roujiamo meat sandwich set meal, professional food photography?width=512&height=384'
  }
];

function AiGuessFoodCard({ onOpenChat }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentItem = RECOMMEND_POOL[currentIndex];

  const handleRefresh = () => {
    setCurrentIndex((prev) => (prev + 1) % RECOMMEND_POOL.length);
  };

  const handleOrder = () => {
    // 待后续补充：跳转到购物车页面
    alert('跳转至购物车页面（待实现）');
  };

  return (
    <div className="w-[359px] bg-white rounded-[12px] p-[12px] mx-[8px] my-[2px] shadow-sm border border-[#EEEEEE]" data-ai-alt="AI猜你喜欢卡片">
      {/* Header */}
      <div className="flex justify-between items-center mb-[10px]" data-ai-alt="卡片头部">
        <div className="flex items-center gap-[6px]">
          <div className="w-[28px] h-[28px] rounded-full bg-gradient-to-br from-[#FFE4E6] to-[#FFD1D4] flex items-center justify-center overflow-hidden">
            <img src="https://l-api.jd.com/relay-aigc/design/image/prompt/cute cartoon robot chef mascot, pink style, holding chopsticks?width=256&height=256" className="w-full h-full object-cover" alt="AI" />
          </div>
          <div className="flex items-center gap-[2px]">
            <span className="text-[16px] font-bold text-[#FF0F23]">AI猜你喜欢吃</span>
            <span className="text-[14px] text-[#FFD700]">✨</span>
          </div>
        </div>
        <div 
          className="flex items-center gap-[4px] cursor-pointer active:scale-95 transition-transform" 
          onClick={handleRefresh}
        >
          <i className="fa fa-sync-alt text-[#999999] text-[12px]"></i>
          <span className="text-[12px] text-[#999999]">换一组</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex gap-[12px]" data-ai-alt="推荐内容">
        {/* Food Image */}
        <div className="w-[100px] h-[84px] rounded-[8px] overflow-hidden relative flex-shrink-0">
          <img src={currentItem.image} className="w-full h-full object-cover" alt={currentItem.dishName} />
          {currentItem.discount && (
            <div className="absolute bottom-[4px] left-[4px] bg-[#FF0F23] text-white text-[10px] px-[4px] py-[1px] rounded-[3px]">
              {currentItem.discount}
            </div>
          )}
        </div>

        {/* Food Info */}
        <div className="flex-1 flex flex-col justify-between py-[2px]">
          <div>
            <div className="flex items-center gap-[8px] mb-[2px]">
              <span className="text-[14px] font-semibold text-[#1A1A1A]">{currentItem.shopName}</span>
              <span className="text-[14px] font-semibold text-[#1A1A1A]">{currentItem.dishName}</span>
            </div>
            <div className="flex items-center gap-[4px] mb-[4px]">
              <span className="text-[11px] text-[#FF6600]">✦</span>
              <span className="text-[11px] text-[#FF6600]">{currentItem.tag}</span>
              <span className="text-[11px] text-[#999999]">，{currentItem.desc}</span>
            </div>
            <div className="flex items-center gap-[8px] text-[11px] text-[#999999]">
              <span>{currentItem.deliveryTime}</span>
              <span>{currentItem.distance}</span>
              <span>起送 {currentItem.minPrice}</span>
              <span>{currentItem.fee}</span>
            </div>
          </div>

          <div className="flex items-end justify-between mt-[4px]">
            <div className="flex items-baseline gap-[2px]">
              <span className="text-[16px] font-bold text-[#FF0F23]">{currentItem.price}</span>
              <span className="text-[11px] text-[#999999]">到手价</span>
            </div>
            <button 
              className="bg-[#FF0F23] text-white text-[12px] font-medium px-[14px] py-[5px] rounded-[16px] active:scale-95 transition-transform"
              onClick={handleOrder}
            >
              去下单
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiGuessFoodCard;