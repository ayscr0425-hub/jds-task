import React, { useState } from 'react';
import cardImage1 from '@/assets/images/卡片1.png';
import cardImage2 from '@/assets/images/卡片2.png';
import loadingGif from '@/assets/loading.gif';

function AiGuessFoodCard() {
  const [cardIndex, setCardIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const cardImages = [cardImage1, cardImage2];

  const handleClick = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setCardIndex((prev) => (prev + 1) % cardImages.length);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="p-[8px] cursor-pointer relative" onClick={handleClick} data-ai-alt="AI猜你喜欢卡片">
      <img src={cardImages[cardIndex]} alt="AI猜你喜欢吃" className={loading ? 'opacity-0' : ''} />
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={loadingGif} alt="加载中" className="opacity-60" />
        </div>
      )}
    </div>
  );
}

export default AiGuessFoodCard;