import React from 'react';
import cardImg1 from '@/assets/images/卡片11.png';
import cardImg2 from '@/assets/images/卡片22.png';

const cardImages = [cardImg1, cardImg2];

// 家常炒菜推荐卡片组件
// - 卡片主体为设计稿图片（卡片11.png / 卡片22.png，1077×486，宽度按视口自适应）
// - 图片右下角叠加两个透明热区："去加购" 跳购物车，"去下单" 跳结算页
function RecommendCard({ index = 0, onAddToCart, onOrder }) {
  const src = cardImages[index % cardImages.length];

  return (
    <div className="relative w-full" data-ai-alt="家常炒菜推荐卡片">
      <img src={src} alt="推荐菜品" className="w-full block rounded-[10px]" />

      {/* 去加购热区（右下偏左的按钮） */}
      <div
        className="absolute cursor-pointer active:opacity-70"
        style={{ right: '27%', bottom: '6%', width: '22%', height: '20%' }}
        onClick={onAddToCart}
        data-ai-alt="去加购"
      />

      {/* 去下单热区（最右下按钮） */}
      <div
        className="absolute cursor-pointer active:opacity-70"
        style={{ right: '3%', bottom: '6%', width: '22%', height: '20%' }}
        onClick={onOrder}
        data-ai-alt="去下单"
      />
    </div>
  );
}

export default RecommendCard;