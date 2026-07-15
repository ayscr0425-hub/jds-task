import React from 'react';
import cartImage from '@/assets/images/跳转1.png';

// 购物车页面：以图片方式还原设计稿（跳转1.png），点击左上返回
function CartPage({ onBack }) {
  return (
    <div className="fixed inset-0 z-[200] bg-white overflow-y-auto scrollbar-hide" data-ai-alt="购物车页面">
      <div className="w-[375px] mx-auto relative">
        <img src={cartImage} alt="购物车" className="w-[375px] block" />
        {/* 左上角返回热区 */}
        <div
          className="absolute top-0 left-0 w-[60px] h-[80px] cursor-pointer"
          onClick={onBack}
          data-ai-alt="返回"
        />
      </div>
    </div>
  );
}

export default CartPage;