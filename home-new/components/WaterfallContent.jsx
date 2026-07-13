import React from 'react';

function WaterfallContent() {
  return (
    <div className="w-full flex items-start gap-[7px] pb-[10px]" data-ai-alt="瀑布流内容区">
       {/* 左列 */}
       <div className="flex flex-col flex-1 gap-[7px] w-[176px]" data-ai-list="true" data-ai-alt="左侧卡片列">
          {/* L01: 营销卡 */}
          <div className="w-full rounded-[8px] overflow-hidden bg-white" data-ai-alt="首张营销卡">
             <img src="https://img13.360buyimg.com/ling/jfs/t1/403493/31/20494/382211/69ba8f12F50b940da/02762c03ef2fbb46.png" className="w-full h-[251.5px] object-cover" alt="marketing" data-ai-alt="营销图"/>
          </div>
          {/* L02: 普通商品卡 */}
          <div className="w-full bg-white rounded-[8px] pb-[8px] overflow-hidden" data-ai-alt="普通商品卡">
             <img src="https://img13.360buyimg.com/ling/jfs/t1/404400/19/6721/240684/69ba8f13Ffa2c27d1/02762c02c04be655.png" className="w-full h-[176px] object-cover" alt="product" data-ai-alt="商品图"/>
             <div className="px-[8px] pt-[8px] flex flex-col gap-[6px]">
                <div className="text-[14px] text-[#1A1A1A] leading-[20px] line-clamp-2">
                   <span className="inline-block align-middle bg-[#FA2C19] text-white text-[10px] px-[4px] py-[2px] leading-none rounded-[2px] mr-[4px] -mt-[2px]">自营</span>
                   缪缪同名女士香水
                </div>
                <div className="text-[12px] text-[#9D710B] truncate">
                   以旧换新 1年延保
                </div>
                <div className="flex items-end justify-between mt-[2px]">
                   <div className="flex items-baseline">
                      <span className="text-[12px] text-[#000000] font-[800]">¥</span>
                      <span className="text-[17px] text-[#000000] font-[800]">1070</span>
                      <span className="text-[12px] text-[#000000] font-[800]">.5</span>
                      <span className="text-[10px] text-[#9D9D9D] ml-[4px]">1246人热追</span>
                   </div>
                   <img src="https://img13.360buyimg.com/ling/jfs/t1/404578/30/11753/1468/69ba8f13F2a90238f/027605005099ca1d.png" className="w-[20px] h-[20px]" alt="add" data-ai-alt="加号图标"/>
                </div>
             </div>
          </div>
          {/* L03: 重磅卡 */}
          <div className="w-full bg-white rounded-[8px] pb-[8px] overflow-hidden relative" data-ai-alt="重磅新品卡">
             <div className="absolute top-0 left-0 px-[6px] h-[19px] flex items-center justify-center bg-gradient-to-r from-[#191919] to-[#3E3830] text-[#FFF1D3] text-[11px] rounded-br-[8px] z-10">
               重磅新品
             </div>
             <img src="https://img13.360buyimg.com/ling/jfs/t1/405940/12/2953/353801/69ba8f14F5bed1d93/02762c02c09e0415.png" className="w-full h-[176px] object-cover" alt="product" data-ai-alt="商品图"/>
             <div className="px-[8px] pt-[8px] flex flex-col gap-[6px]">
                <div className="text-[14px] text-[#1A1A1A] leading-[20px] line-clamp-2">
                   <span className="inline-block align-middle bg-[#FA2C19] text-white text-[10px] px-[4px] py-[2px] leading-none rounded-[2px] mr-[4px] -mt-[2px]">自营</span>
                   海信健康活水洗衣机
                </div>
                <div className="text-[12px] text-[#9D710B] truncate">
                   新技术·智能除渍科技
                </div>
                <div className="flex items-end justify-between mt-[2px]">
                   <div className="flex items-baseline">
                      <span className="text-[12px] text-[#000000] font-[800]">¥</span>
                      <span className="text-[17px] text-[#000000] font-[800]">1070</span>
                      <span className="text-[12px] text-[#000000] font-[800]">.5</span>
                      <span className="text-[10px] text-[#9D9D9D] ml-[4px]">1246人热追</span>
                   </div>
                   <img src="https://img13.360buyimg.com/ling/jfs/t1/404578/30/11753/1468/69ba8f13F2a90238f/027605005099ca1d.png" className="w-[20px] h-[20px]" alt="add" data-ai-alt="加号图标"/>
                </div>
             </div>
          </div>
          {/* L04: 盲盒上新卡 */}
          <div className="w-full bg-white rounded-[8px] pb-[8px] overflow-hidden relative" data-ai-alt="盲盒商品卡">
             <div className="absolute top-[6px] right-[6px] px-[6px] h-[20px] bg-[#F6F6F6]/90 rounded-[4px] flex items-center justify-center z-10">
               <span className="text-[11px] text-[#191919] font-medium">上新3天</span>
             </div>
             <img src="https://img13.360buyimg.com/ling/jfs/t1/406273/5/199/447625/69ba8f15F7d91cdc5/02762c02c0019952.png" className="w-full h-[176px] object-cover" alt="product" data-ai-alt="商品图"/>
             <div className="px-[8px] pt-[8px] flex flex-col gap-[6px]">
                <div className="text-[14px] text-[#1A1A1A] leading-[20px] line-clamp-2">
                   <span className="inline-block align-middle bg-[#FA2C19] text-white text-[10px] px-[4px] py-[2px] leading-none rounded-[2px] mr-[4px] -mt-[2px]">自营</span>
                   Labubu搪胶盲盒2.0
                </div>
                <div className="text-[12px] text-[#9D710B] truncate">
                   新设计·假日海滩系列
                </div>
                <div className="flex items-end justify-between mt-[2px]">
                   <div className="flex items-baseline">
                      <span className="text-[12px] text-[#000000] font-[800]">¥</span>
                      <span className="text-[17px] text-[#000000] font-[800]">99</span>
                      <span className="text-[10px] text-[#9D9D9D] ml-[4px]">1246人热追</span>
                   </div>
                   <img src="https://img13.360buyimg.com/ling/jfs/t1/404578/30/11753/1468/69ba8f13F2a90238f/027605005099ca1d.png" className="w-[20px] h-[20px]" alt="add" data-ai-alt="加号图标"/>
                </div>
             </div>
          </div>
          {/* L05: 女包商品卡 */}
          <div className="w-full bg-white rounded-[8px] pb-[8px] overflow-hidden" data-ai-alt="包包商品卡">
             <img src="https://img13.360buyimg.com/ling/jfs/t1/404531/35/12006/712564/69ba8f16F5443dd69/02762c02c02b7c06.png" className="w-full h-[176px] object-cover" alt="product" data-ai-alt="商品图"/>
             <div className="px-[8px] pt-[8px] flex flex-col gap-[6px]">
                <div className="text-[14px] text-[#1A1A1A] leading-[20px] line-clamp-2">
                   <span className="inline-block align-middle bg-[#FA2C19] text-white text-[10px] px-[4px] py-[2px] leading-none rounded-[2px] mr-[4px] -mt-[2px]">自营</span>
                   缪缪同名女士香水
                </div>
                <div className="text-[12px] text-[#9D710B] truncate">
                   新技术·智能除渍科技
                </div>
                <div className="flex items-end justify-between mt-[2px]">
                   <div className="flex items-baseline">
                      <span className="text-[12px] text-[#000000] font-[800]">¥</span>
                      <span className="text-[17px] text-[#000000] font-[800]">1070</span>
                      <span className="text-[12px] text-[#000000] font-[800]">.5</span>
                      <span className="text-[10px] text-[#9D9D9D] ml-[4px]">1246人热追</span>
                   </div>
                   <img src="https://img13.360buyimg.com/ling/jfs/t1/404578/30/11753/1468/69ba8f13F2a90238f/027605005099ca1d.png" className="w-[20px] h-[20px]" alt="add" data-ai-alt="加号图标"/>
                </div>
             </div>
          </div>
       </div>

       {/* 右列 */}
       <div className="flex flex-col flex-1 gap-[7px] w-[176px]" data-ai-list="true" data-ai-alt="右侧卡片列">
          {/* R01: 预约金卡 */}
          <div className="w-full rounded-[8px] overflow-hidden flex flex-col relative" data-ai-alt="预约品牌卡">
             <div className="w-full bg-[#1A1A1A] text-[#FFF1D3] text-[12px] h-[26px] flex items-center px-[8px]">
                正在预约 8/27 20:00:00开售
             </div>
             <div className="bg-[#FEF8E2] pb-[8px]">
               <img src="https://img13.360buyimg.com/ling/jfs/t1/404559/4/12722/669477/69ba8f17F35a85db4/02762c02c0039f1d.png" className="w-full h-[176px] object-cover" alt="brand" data-ai-alt="商品图"/>
               <div className="px-[8px] pt-[8px] flex flex-col gap-[6px]">
                  <div className="flex items-center gap-[4px]">
                     <span className="bg-gradient-to-r from-[#191919] to-[#3E3830] text-[#FFF1D3] text-[11px] px-[4px] py-[1px] rounded-[4px]">重磅新品</span>
                     <span className="text-[#9D710B] text-[11px] bg-gradient-to-r from-white to-[#F9EBD3] px-[4px] py-[1px] rounded-[4px] border border-[#EED7B0]">SWAROVSKI</span>
                  </div>
                  <div className="text-[14px] text-[#1A1A1A] leading-[20px] line-clamp-1">
                     <span className="inline-block align-middle bg-[#FA2C19] text-white text-[10px] px-[4px] py-[2px] leading-none rounded-[2px] mr-[4px] -mt-[2px]">自营</span>
                     缪缪同名女士香水
                  </div>
                  <div className="text-[12px] text-[#9D710B] truncate">
                     新技术·智能除渍科技
                  </div>
                  <div className="flex items-end justify-between mt-[2px]">
                     <div className="flex items-baseline">
                        <span className="text-[12px] text-[#000000] font-[800]">¥</span>
                        <span className="text-[17px] text-[#000000] font-[800]">1070</span>
                        <span className="text-[12px] text-[#000000] font-[800]">.5</span>
                     </div>
                     <div className="bg-[#C9B285] text-white text-[12px] px-[8px] py-[2px] rounded-[3px]">
                        最多四字
                     </div>
                  </div>
               </div>
             </div>
          </div>
          {/* R02: 上新胶囊卡 */}
          <div className="w-full bg-white rounded-[8px] pb-[8px] overflow-hidden relative" data-ai-alt="上新胶囊商品卡">
             <div className="absolute top-[6px] right-[6px] px-[6px] h-[20px] bg-[#F6F6F6]/90 rounded-[4px] flex items-center justify-center z-10">
               <span className="text-[11px] text-[#191919] font-medium">上新3天</span>
             </div>
             <div className="relative">
                <img src="https://l-api.jd.com/relay-aigc/design/image/prompt/A%20pair%20of%20green%20and%20blue%20running%20shoes%20side%20view?width=352&height=352" className="w-full h-[176px] object-cover" alt="product" data-ai-alt="商品图"/>
                <div className="absolute bottom-[10px] w-full text-center text-[16px] text-white font-extrabold z-10 tracking-wider drop-shadow-md">
                  160X 5.0 PRO
                </div>
             </div>
             <div className="px-[8px] pt-[8px] flex flex-col gap-[6px]">
                <div className="text-[14px] text-[#1A1A1A] leading-[20px] line-clamp-2">
                   <span className="inline-block align-middle bg-[#FA2C19] text-white text-[10px] px-[4px] py-[2px] leading-none rounded-[2px] mr-[4px] -mt-[2px]">自营</span>
                   特步160X5.0PRO
                </div>
                <div className="text-[12px] text-[#9D710B] truncate">
                   新款式·轻刃缓震设计
                </div>
                <div className="flex items-end justify-between mt-[2px]">
                   <div className="flex items-baseline">
                      <span className="text-[12px] text-[#000000] font-[800]">¥</span>
                      <span className="text-[17px] text-[#000000] font-[800]">1070</span>
                      <span className="text-[12px] text-[#000000] font-[800]">.5</span>
                      <span className="text-[10px] text-[#9D9D9D] ml-[4px]">1246人热追</span>
                   </div>
                   <img src="https://img13.360buyimg.com/ling/jfs/t1/404578/30/11753/1468/69ba8f13F2a90238f/027605005099ca1d.png" className="w-[20px] h-[20px]" alt="add" data-ai-alt="加号图标"/>
                </div>
             </div>
          </div>
          {/* R04: 抽签卡 */}
          <div className="w-full bg-white rounded-[8px] pb-[8px] overflow-hidden" data-ai-alt="抽签尖货卡">
             <img src="https://img13.360buyimg.com/ling/jfs/t1/405100/12/9353/291388/69ba8f18Facfbc424/02762c02c0f7edc7.png" className="w-full h-[176px] object-cover" alt="lottery" data-ai-alt="商品图"/>
             <div className="px-[8px] pt-[8px] flex flex-col gap-[6px]">
                <div className="bg-[#9FB9FF]/20 text-[#553DD3] text-[12px] px-[4px] py-[1px] rounded-[4px] inline-block self-start">
                   尖货抽签·新品限量抽
                </div>
                <div className="text-[14px] text-[#1A1A1A] leading-[20px] line-clamp-1">
                   <span className="inline-block align-middle bg-[#FA2C19] text-white text-[10px] px-[4px] py-[2px] leading-none rounded-[2px] mr-[4px] -mt-[2px]">自营</span>
                   Xiaomi Pad 7 Pro
                </div>
                <div className="text-[11px] text-[#9D710B] truncate">
                   4741人正在参与
                </div>
                <div className="flex items-center justify-between mt-[2px]">
                   <div className="flex items-baseline gap-[4px]">
                      <span className="text-[12px] text-[#000000] font-[800]">¥</span>
                      <span className="text-[17px] text-[#000000] font-[800]">1</span>
                      <span className="text-[10px] text-[#9D9D9D] line-through ml-[2px]">原价¥299</span>
                   </div>
                   <img src="https://img13.360buyimg.com/ling/jfs/t1/408116/38/6974/181/69c216e9F3b090cf9/027601902b9df438.png" className="w-[12px] h-[12px] mr-[2px] object-contain" alt="arrow" data-ai-alt="右箭头"/>
                </div>
             </div>
          </div>
          {/* R05: 重磅榜单卡 */}
          <div className="w-full bg-white rounded-[8px] pb-[8px] overflow-hidden relative" data-ai-alt="重磅榜单卡">
             <div className="absolute top-0 left-0 px-[6px] h-[19px] flex items-center justify-center bg-gradient-to-r from-[#191919] to-[#3E3830] text-[#FFF1D3] text-[11px] rounded-br-[8px] z-10">
               重磅新品
             </div>
             <img src="https://img13.360buyimg.com/ling/jfs/t1/406030/38/2242/965967/69ba8f19F8e43f08f/02762c03ae58bea7.png" className="w-full h-[235.5px] object-cover" alt="clothes" data-ai-alt="商品图"/>
             <div className="px-[8px] pt-[8px] flex flex-col gap-[6px]">
                <div className="text-[14px] text-[#1A1A1A] leading-[20px] line-clamp-2">
                   <span className="inline-block align-middle bg-[#FA2C19] text-white text-[10px] px-[4px] py-[2px] leading-none rounded-[2px] mr-[4px] -mt-[2px]">自营</span>
                   盟可睐女士短款羽绒
                </div>
                <div className="text-[12px] text-[#9D710B] truncate">
                   新技术·智能除渍科技
                </div>
                <div className="flex items-end justify-between mt-[2px]">
                   <div className="flex items-baseline">
                      <span className="text-[12px] text-[#000000] font-[800]">¥</span>
                      <span className="text-[17px] text-[#000000] font-[800]">1984</span>
                      <span className="text-[10px] text-[#FF4848] ml-[4px]">首单已减5元</span>
                   </div>
                   <img src="https://img13.360buyimg.com/ling/jfs/t1/404578/30/11753/1468/69ba8f13F2a90238f/027605005099ca1d.png" className="w-[20px] h-[20px]" alt="add" data-ai-alt="加号图标"/>
                </div>
                <div className="flex items-center gap-[4px] mt-[2px] bg-[#FAF8F5] rounded-[2px] px-[4px] py-[2px]">
                   <img src="https://img13.360buyimg.com/ling/jfs/t1/404810/7/11177/242/69ba8f1aF68977249/02760480504b4d75.png" className="w-[14px] h-[15px] object-contain" alt="rank"/>
                   <span className="text-[11px] text-[#9D710B]">头枕电脑椅榜·TOP10</span>
                </div>
             </div>
          </div>
          {/* R06: 品牌提醒卡 (半截) */}
          <div className="w-full rounded-[8px] overflow-hidden flex flex-col bg-[#FFF9ED]" data-ai-alt="品牌提醒卡">
             <div className="w-full h-[34px] flex items-center px-[10px] gap-[6px]">
                <img src="https://img13.360buyimg.com/ling/jfs/t1/405815/16/4462/1005/69ba8f1bF0ccd0ea0/0276030030556165.png" className="w-[14px] h-[14px] object-contain" alt="icon"/>
                <span className="text-[#9D710B] text-[13px] font-medium">你买过的品牌上新了</span>
             </div>
             <div className="w-full bg-white h-[100px] overflow-hidden">
                <img src="https://img13.360buyimg.com/ling/jfs/t1/403939/24/9481/77556/69ba8f1bFdcd0a20c/02762c01966497fc.png" className="w-[80%] mx-auto h-full object-contain" alt="iphone" data-ai-alt="商品图"/>
             </div>
          </div>
       </div>
    </div>
  );
}

export default WaterfallContent;
