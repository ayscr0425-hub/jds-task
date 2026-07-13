import React from 'react';
import { navigateTo } from '../../prototype/navigation';

function BottomNav() {
  return (
    <div className="w-[375px] h-[80px] bg-white fixed bottom-0 left-1/2 -translate-x-1/2 flex justify-between px-[10px] items-start pt-[6px] pb-[34px] shadow-[0_-0.5px_0_0_rgba(0,0,0,0.05)] z-50" data-ai-alt="底部导航">
       <div className="w-[75px] flex flex-col items-center justify-center relative -top-1 cursor-pointer" onClick={() => navigateTo('homeSpecial')} data-ai-alt="首页项">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/409964/13/182/10934/69c2ddceFd76d18fa/0276094094e78520.png" className="w-[37px] h-[37px]" data-ai-alt="狗头Logo" />
       </div>
       <div className="w-[75px] flex flex-col items-center gap-[4px] cursor-pointer" onClick={() => navigateTo('explore')} data-ai-alt="逛项">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/405285/22/8162/2758/69ba76adF0a08ba58/02760590585fb5ed.png" className="w-[22px] h-[22px]" />
          <span className="text-[11px] text-[#505259]">逛</span>
       </div>
       <div className="w-[75px] flex flex-col items-center gap-[4px] cursor-pointer" onClick={() => navigateTo('messages')} data-ai-alt="消息项">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/404938/34/10031/2512/69ba76aeF4b0c19bd/0276058058b4e5bd.png" className="w-[22px] h-[22px]" />
          <span className="text-[11px] text-[#505259]">消息</span>
       </div>
       <div className="w-[75px] flex flex-col items-center gap-[4px] cursor-pointer" onClick={() => navigateTo('cart')} data-ai-alt="购物车项">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/403863/28/8630/1564/69ba76aeF802b743a/0276058058261e04.png" className="w-[22px] h-[22px]" />
          <span className="text-[11px] text-[#505259]">购物车</span>
       </div>
       <div className="w-[75px] flex flex-col items-center gap-[4px] cursor-pointer" onClick={() => navigateTo('myHome')} data-ai-alt="我的项">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/403859/8/15938/2576/69ba76aeFa784c62a/02760580585e409e.png" className="w-[22px] h-[22px]" />
          <span className="text-[11px] text-[#505259]">我的</span>
       </div>
    </div>
  );
}

export default BottomNav;
