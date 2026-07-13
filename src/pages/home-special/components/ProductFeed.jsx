import React from 'react';

function ProductFeed() {
  return (
    <div className="w-[359px] mx-auto flex gap-[7px] mt-[4px]">
      {/* 左列 */}
      <div className="w-[176px] flex flex-col gap-[7px]" data-ai-list="true">
         {/* 商品卡1 */}
         <div className="w-full bg-white rounded-[8px] overflow-hidden pb-[8px]">
           <div className="relative w-[176px] h-[176px]">
             <img src="https://img13.360buyimg.com/ling/jfs/t1/405696/14/5115/528642/69ba8ed3F0df7a605/02762c02c01f6568.png" className="w-full h-full object-cover" alt="保暖帽" />
             <div className="absolute top-0 left-0 bg-gradient-to-r from-[#FF5A71] to-[#FF0F23] text-white text-[10px] px-1 py-[2px] rounded-br-[6px]">送货上门</div>
           </div>
           <div className="px-[8px] mt-[8px]">
             <div className="text-[14px] text-[#1A1A1A] leading-[20px] h-[40px] overflow-hidden line-clamp-2 mb-[4px]">
                帽子冬季女士加厚保暖帽
             </div>
             <div className="flex flex-wrap gap-1 mb-[6px]">
               {/* 补贴标签补充箭头 */}
               <span className="text-[#FF0F23] text-[10px] font-medium flex items-center bg-[#FFF2F4] px-[3px] py-[1px] rounded-[2px]">
                 <i className="fa-solid fa-arrow-down mr-[2px] text-[8px]"></i>补贴10元
               </span>
               <span className="text-[#0EAB28] text-[10px] flex items-center mt-[1px]">先享后付</span>
               <span className="text-[#B56919] text-[10px] flex items-center mt-[1px]">运费险</span>
             </div>
             <div className="flex items-end justify-between relative mt-[4px]">
                <div className="flex items-end">
                  <div className="bg-[#FF0F23] rounded-[4px] h-[24px] flex items-center px-[4px]">
                    <span className="text-white text-[10px] scale-90 origin-left">特价</span>
                    <span className="text-white font-bold text-[16px] ml-[-2px]">¥12.8</span>
                  </div>
                  <span className="text-[10px] text-[#898B93] ml-[4px] mb-[2px]">销量2000+</span>
                </div>
                <div className="h-[21px] px-[8px] rounded-[4px] bg-[#FF0F23] flex items-center justify-center absolute right-0 bottom-0 shadow-[0_2px_4px_rgba(255,15,35,0.3)]">
                  <span className="text-[11px] text-white font-bold">抢</span>
                </div>
             </div>
           </div>
         </div>
         
         {/* 商品卡2 (补充完整结构 bibizan) */}
         <div className="w-full bg-white rounded-[8px] overflow-hidden pb-[8px]">
             <div className="relative w-[176px] h-[176px]">
               <img src="https://img13.360buyimg.com/ling/jfs/t1/405331/35/20428/473418/69bfcc0aF9899495a/02762c023a6e2ee2.png" className="w-full h-full object-cover" alt="零食" />
               <div className="absolute top-0 left-0 bg-[#FF0F23] text-white text-[10px] px-1 py-[2px] rounded-br-[6px]">300g装</div>
             </div>
             <div className="px-[8px] mt-[8px]">
               <div className="text-[14px] text-[#1A1A1A] leading-[20px] h-[40px] overflow-hidden line-clamp-2 mb-[4px]">
                  bibizan比比赞 芝麻薄脆饼干休闲零食
               </div>
               <div className="flex flex-wrap gap-1 mb-[6px]">
                 <span className="text-[#FF0F23] border border-[#FF0F23] bg-[#FFF2F4] text-[9px] px-[3px] py-[0.5px] rounded-[2px]">满31减30</span>
               </div>
               <div className="flex items-end justify-between relative mt-[4px]">
                  <div className="flex items-end">
                    <div className="bg-[#FF0F23] rounded-[4px] h-[24px] flex items-center px-[4px]">
                      <span className="text-white text-[10px] scale-90 origin-left">特价</span>
                      <span className="text-white font-bold text-[16px] ml-[-2px]">¥5.9</span>
                    </div>
                  </div>
                  <div className="w-[21px] h-[21px] flex items-center justify-center absolute right-0 bottom-0">
                    <span className="text-[18px] text-[#FF0F23] font-light">+</span>
                  </div>
               </div>
             </div>
         </div>
      </div>

      {/* 右列 */}
      <div className="w-[176px] flex flex-col gap-[7px]" data-ai-list="true">
         {/* 天天抽奖营销卡 */}
         <div className="w-full h-[64px] rounded-[8px] bg-[#FDF0E5] p-[8px] flex flex-col justify-between relative overflow-hidden">
            <img src="https://img13.360buyimg.com/ling/jfs/t1/407444/28/12264/11519/69c2ddc1Fdf189bed/027607607c2046af.png" className="absolute right-[-10px] top-[0px] w-[55px] h-[64px] object-cover" alt="装饰" />
            <span className="text-[15px] font-bold text-[#5C2B1B] z-10 relative">天天抽奖</span>
            <div className="flex justify-between items-end z-10 relative">
               <div className="flex gap-[2px]">
                 <div className="flex flex-col items-center">
                    <div className="border border-[#FFAA80] bg-white rounded-full px-[5px] py-[1px] text-[9px] text-[#FF4D1C] font-bold leading-none">+1🪙</div>
                    <span className="text-[8px] text-[#80381C] mt-[2px]">第1天</span>
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="border border-[#FFAA80] bg-white rounded-full px-[5px] py-[1px] text-[9px] text-[#FF4D1C] font-bold leading-none">+2🪙</div>
                    <span className="text-[8px] text-[#80381C] mt-[2px]">第2天</span>
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="bg-[#FF4D1C] rounded-full px-[5px] py-[1px] text-[9px] text-white font-bold whitespace-nowrap leading-none">最高888京豆</div>
                    <span className="text-[8px] text-[#80381C] mt-[2px]">第3天</span>
                 </div>
               </div>
               <div className="w-[58px] h-[20px] bg-gradient-to-r from-[#FF3319] to-[#FF0F23] rounded-[10px] flex items-center justify-center text-white text-[11px] font-bold ml-1 mb-[2px] shadow-sm whitespace-nowrap px-[4px]">
                 签到领豆
               </div>
            </div>
         </div>

         {/* 商品卡3带领鸡蛋角贴 */}
         <div className="w-full bg-white rounded-[8px] overflow-hidden pb-[8px]">
           <div className="relative w-[176px] h-[176px]">
             <img src="https://img13.360buyimg.com/ling/jfs/t1/405884/29/3302/681833/69ba8ed8F3049934f/02762c02c01a1688.png" className="w-full h-full object-cover" alt="洗洁精" />
             
             {/* 官方旗舰店顶标 */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#5B4CFF] to-[#3B2BFF] text-white text-[9px] px-[8px] py-[2px] rounded-b-[4px] font-bold shadow-sm">
               立白 | 官方旗舰店
             </div>

             {/* 左侧促销大标 */}
             <div className="absolute left-[6px] top-[40px] bg-gradient-to-b from-[#FF2A3A] to-[#FF0F23] rounded-[4px] text-white p-[4px] flex flex-col items-center w-[48px] shadow-sm">
               <span className="text-[8px] opacity-90 scale-90 whitespace-nowrap">柠檬洗洁精</span>
               <span className="text-[9px] font-bold mt-[2px]">到手</span>
               <div className="flex items-baseline leading-none mt-[2px]">
                 <span className="text-[18px] font-bold">2.24</span>
                 <span className="text-[9px] ml-[1px]">斤</span>
               </div>
             </div>

             {/* 左下角卖点小标 */}
             <div className="absolute left-[6px] bottom-[30px] flex flex-col gap-[3px] items-start">
               <div className="bg-[#4D33FF] bg-opacity-90 text-white text-[8px] px-[5px] py-[2px] rounded-full flex items-center shadow-sm">
                 <span className="mr-[2px] font-bold">✓</span>柠檬精华
               </div>
               <div className="bg-[#4D33FF] bg-opacity-90 text-white text-[8px] px-[5px] py-[2px] rounded-full flex items-center shadow-sm">
                 <span className="mr-[2px] font-bold">✓</span>清新去油腻
               </div>
               <div className="bg-[#4D33FF] bg-opacity-90 text-white text-[8px] px-[5px] py-[2px] rounded-full flex items-center shadow-sm">
                 <span className="mr-[2px] font-bold">✓</span>可洗蔬果
               </div>
             </div>

             <div className="absolute right-[6px] bottom-[6px] z-20">
               <div className="bg-gradient-to-b from-[#FF7A00] to-[#FF3B00] text-white text-[13px] font-bold px-[10px] py-[3px] rounded-full border-[1.5px] border-white shadow-md flex items-center justify-center">
                 领鸡蛋
               </div>
             </div>
           </div>
           <div className="px-[8px] mt-[8px]">
             <div className="text-[14px] text-[#1A1A1A] leading-[20px] mb-[4px]">
                <span className="bg-[#FF0F23] text-white text-[10px] rounded-[2px] px-[3px] py-[1px] mr-1">自营</span>
                1kg立白柠檬洗洁精
             </div>
             <div className="flex flex-wrap gap-1 mb-[6px]">
               <span className="text-[#0EAB28] text-[10px]">先享后付</span>
               <span className="text-[#898B93] text-[10px]">包邮 7天价保</span>
             </div>
             <div className="flex items-end justify-between relative mt-[4px]">
                <div className="flex items-end">
                  <div className="bg-[#FF0F23] rounded-[4px] h-[24px] flex items-center px-[4px]">
                    <span className="text-white text-[10px] scale-90 origin-left">特价</span>
                    <span className="text-white font-bold text-[16px] ml-[-2px]">¥8.9</span>
                  </div>
                  <span className="text-[10px] text-[#898B93] ml-[4px] mb-[2px]">销量3万+</span>
                </div>
                <div className="w-[21px] h-[21px] flex items-center justify-center absolute right-0 bottom-0">
                  <span className="text-[18px] text-[#FF0F23] font-light">+</span>
                </div>
             </div>
           </div>
         </div>
      </div>
    </div>
  );
}

export default ProductFeed;