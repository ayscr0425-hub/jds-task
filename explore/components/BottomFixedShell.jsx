import React from 'react';
import { navigateTo } from '../../prototype/navigation';

function BottomFixedShell() {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] h-[80px] bg-[#000000] z-30 flex flex-col justify-start" data-ai-alt="底部固定黑壳">
      
      {/* 评论输入胶囊已根据结构净化指令移除，避免与上方商品卡片和底栏重叠冲突 */}

      {/* F6: 底部导航 */}
      <div className="w-full h-[49px] flex items-center justify-around px-[10px] mt-[8px]" data-ai-list="true" data-ai-alt="底部导航栏">
        <div className="w-[60px] flex flex-col items-center justify-center gap-[2px] cursor-pointer" onClick={() => navigateTo('homeSpecial')} data-ai-alt="导航-首页">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/401551/26/14566/1481/69ba97bdF2b9be113/027605805895bde3.png" className="w-[22px] h-[22px]" alt="Home" data-ai-alt="首页图标" />
          <span className="text-[#999999] text-[11px]">首页</span>
        </div>

        <div className="w-[60px] flex flex-col items-center justify-center gap-[2px] cursor-pointer" onClick={() => navigateTo('explore')} data-ai-alt="导航-逛(激活)">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/404947/13/9005/2401/69ba97bdF1c2e2128/0276058058f4b745.png" className="w-[22px] h-[22px]" alt="Guang" data-ai-alt="逛图标(红)" />
          <span className="text-[#FF0F23] text-[11px] font-semibold">逛</span>
        </div>

        <div className="w-[60px] flex flex-col items-center justify-center gap-[2px] cursor-pointer" onClick={() => navigateTo('messages')} data-ai-alt="导航-消息">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/403727/26/18266/2364/69ba97bdFb4709b83/0276058058b9d0c4.png" className="w-[22px] h-[22px]" alt="Message" data-ai-alt="消息图标" />
          <span className="text-[#999999] text-[11px]">消息</span>
        </div>

        <div className="w-[60px] flex flex-col items-center justify-center gap-[2px] cursor-pointer" onClick={() => navigateTo('cart')} data-ai-alt="导航-购物车">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/404940/39/11247/1501/69ba97bdF8b5018e7/027605805882ec8c.png" className="w-[22px] h-[22px]" alt="Cart" data-ai-alt="购物车图标" />
          <span className="text-[#999999] text-[11px]">购物车</span>
        </div>

        <div className="w-[60px] flex flex-col items-center justify-center gap-[2px] cursor-pointer" onClick={() => navigateTo('myHome')} data-ai-alt="导航-我的">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/406200/15/794/2371/69ba97beF69ecb7c3/027605805806b78e.png" className="w-[22px] h-[22px]" alt="Me" data-ai-alt="我的图标" />
          <span className="text-[#999999] text-[11px]">我的</span>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-[134px] h-[5px]" data-ai-alt="底部操作条">
        <img src="https://img13.360buyimg.com/ling/jfs/t1/408020/20/9693/440/69c2de1fF66eb7278/02762180169d5f01.png" className="w-full h-full object-contain" alt="Indicator" data-ai-alt="横条" />
      </div>
    </div>
  );
}

export default BottomFixedShell;
