import React from 'react';

function PromoFloor() {
  const topItems = [
    { tag: '直降8元', price: '8.6', img: 'https://l-api.jd.com/relay-aigc/design/image/prompt/A%20bottle%20of%20orange%20shampoo%20on%20white%20background?width=256&height=256' },
    { tag: '限时特价', price: '6.9', img: 'https://img13.360buyimg.com/ling/jfs/t1/405222/38/9096/64023/69ba8eccF3fce85b7/02760e80e8da06c6.png' },
    { tag: '直降8元', price: '8.6', img: 'https://img13.360buyimg.com/ling/jfs/t1/403735/31/16470/48797/69ba8eccF9bf268b3/02760950e6b4732a.png' },
    { tag: '限时特价', price: '6.6', img: 'https://l-api.jd.com/relay-aigc/design/image/prompt/A%20pack%20of%20tissue%20paper%20on%20white%20background?width=256&height=256' }
  ];

  return (
    <div className="mx-[8px] w-[359px] h-auto pb-[10px] bg-white rounded-[8px] mt-[8px] flex flex-col overflow-hidden relative shadow-sm" data-ai-alt="天天特价共享卡">
      {/* 楼层标题行 */}
      <div className="flex items-center justify-between px-[10px] pt-[8px] pb-[4px]">
         <div className="flex items-center gap-[4px]">
           <span className="text-[16px] font-bold text-[#FF0F23] italic tracking-tighter">天天有特价!</span>
           <img src="https://img13.360buyimg.com/ling/jfs/t1/404925/29/10603/881/69ba8ecaFf6ccefcb/027603703a0babef.png" className="w-[13px] h-[14px]" alt="装饰" />
         </div>
         <div className="text-[12px] text-gray-500 flex items-center">
           更多好物低至0.01元 
           <img src="https://img13.360buyimg.com/ling/jfs/t1/404557/38/12603/599/69ba8ec6F76bce8cb/0276021020bef1a3.png" className="w-[8px] h-[8px] ml-1" alt="右箭头" />
         </div>
      </div>

      {/* 中部缩略区 */}
      <div className="flex px-[6px] gap-[6px] mt-[4px]">
         {/* 左侧券卡 - 补充 CSS mask 锯齿效果 */}
         <div 
           className="w-[70px] h-[82px] bg-gradient-to-b from-[#FF4D5B] to-[#FF0F23] flex flex-col items-center justify-between py-[8px] box-border relative"
           style={{ 
             maskImage: 'radial-gradient(circle at left, transparent 2px, black 2.5px)', 
             maskSize: '100% 10px', 
             maskPosition: '-2px 0',
             WebkitMaskImage: 'radial-gradient(circle at left, transparent 2px, black 2.5px)',
             WebkitMaskSize: '100% 10px',
             WebkitMaskPosition: '-2px 0'
           }}
         >
           <div className="flex items-baseline text-white leading-none mt-[2px]">
             <span className="text-[12px] font-bold">¥</span>
             <span className="text-[20px] font-bold">3.2</span>
           </div>
           <span className="text-[10px] text-white opacity-90">满4可用</span>
           <div className="w-[46px] h-[18px] bg-white rounded-[10px] text-[#FF0F23] text-[11px] font-medium flex items-center justify-center mt-1 shadow-sm">
             领券
           </div>
         </div>

         {/* 四列商品 */}
         <div className="flex-1 flex overflow-hidden" data-ai-list="true">
            {topItems.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center w-[65px] flex-shrink-0">
                <img src={item.img} className="w-[55px] h-[55px] rounded-[4px] object-cover" alt="特价商品" />
                <div className="bg-[#FFF4E6] rounded-[4px] px-[4px] py-[2px] mt-[-8px] z-10">
                   <span className="text-[9px] text-[#D46B08] whitespace-nowrap">{item.tag}</span>
                </div>
                <div className="flex items-baseline text-[#FF0F23] mt-[2px]">
                  <span className="text-[10px]">¥</span>
                  <span className="text-[14px] font-bold">{item.price}</span>
                </div>
              </div>
            ))}
         </div>
      </div>

      {/* 细分隔线 */}
      <div className="w-[339px] h-[1px] bg-gray-100 mx-auto mt-[8px] mb-[8px]"></div>

      {/* 下部双列信息卡 */}
      <div className="flex w-full px-[4px]">
         <div className="flex-1 flex justify-between pl-[6px] pr-[2px] items-center border-r border-gray-100 relative">
            <div className="flex flex-col z-10">
               <div className="flex items-center gap-1">
                 <span className="text-[14px] font-bold text-[#1A1A1A]">生鲜水饮</span>
                 <div className="bg-[#15C4A9] text-white text-[9px] px-[3px] rounded-tl-[6px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[1px]">夏</div>
               </div>
               <div className="flex flex-wrap items-center gap-1 mt-[4px]">
                 <span className="text-[#FF0F23] font-bold text-[13px]">¥9.9</span>
                 <span className="text-[#FF0F23] border border-[#FF0F23] bg-[#FFF2F4] text-[9px] px-[3px] py-[0.5px] rounded-[2px] whitespace-nowrap">直降10元</span>
               </div>
            </div>
            <img src="https://img13.360buyimg.com/ling/jfs/t1/403574/34/17052/63689/69ba8ec9F878abdc6/02760d00d0947cf4.png" className="w-[48px] h-[48px] object-contain ml-1" alt="生鲜水饮" />
         </div>
         
         <div className="flex-1 flex justify-between pl-[10px] pr-[2px] items-center relative">
            <div className="flex flex-col z-10">
               <span className="text-[14px] font-bold text-[#1A1A1A]">工厂直卖</span>
               <div className="flex flex-wrap items-center gap-1 mt-[4px]">
                 <span className="text-[#FF0F23] font-bold text-[13px]">¥3.9</span>
                 <span className="text-[#FF0F23] border border-[#FF0F23] bg-[#FFF2F4] text-[9px] px-[3px] py-[0.5px] rounded-[2px] whitespace-nowrap">全网热卖1w+</span>
               </div>
            </div>
            <img src="https://img13.360buyimg.com/ling/jfs/t1/404396/19/13037/52677/69ba8ec9Fa8955af6/02760d00d08e0d20.png" className="w-[48px] h-[48px] object-contain ml-1" alt="工厂直卖" />
         </div>
      </div>
    </div>
  );
}

export default PromoFloor;