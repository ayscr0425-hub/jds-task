import React, { useState } from 'react';
import cardImage1 from '@/assets/images/卡片1.png';
import cardImage2 from '@/assets/images/卡片2.png';
import cardImage3 from '@/assets/images/卡片3.png';
import loadingGif from '@/assets/loading.gif';

function AiGuessFoodCard({ onCard3Click }) {
  const [cardIndex, setCardIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const cardImages = [cardImage1, cardImage2, cardImage3];
  const isLastCard = cardIndex === cardImages.length - 1;

  const handleClick = () => {
    if (loading) return;
    if (isLastCard) {
      onCard3Click?.();
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setCardIndex((prev) => prev + 1);
      setLoading(false);
    }, 500);
  };

  const handleOrder = () => {
    // 待后续补充：跳转到购物车页面
    alert('跳转至购物车页面（待实现）');
  };

  return (
    <div
      className={`p-[8px] relative cursor-pointer`}
      onClick={handleClick}
      data-ai-alt="AI猜你喜欢卡片"
    >
      <img src={cardImages[cardIndex]} alt="AI猜你喜欢吃" className={loading ? 'opacity-0' : ''} />
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={loadingGif} alt="加载中" className="opacity-60" />
        </div>
      )}
      {/* 去下单按钮热区 */}
      {!loading && (
        <div
          className="absolute right-[9px] bottom-[11px] w-[64px] h-[28px] cursor-pointer"
          onClick={(e) => { e.stopPropagation(); handleOrder(); }}
        />
      )}
    </div>
  );
}

export default AiGuessFoodCard;