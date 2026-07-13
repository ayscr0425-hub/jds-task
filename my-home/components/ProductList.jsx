import React from 'react';

function ProductList() {
  return (
    <div className="w-full flex justify-between gap-[7px]" data-ai-alt="双列商品卡列表" data-ai-list="true">
      {/* 左商品卡 */}
      <div className="w-[176px] bg-[#FFFFFF] rounded-[8px] flex flex-col overflow-hidden" data-ai-alt="左商品卡" data-ai-clip="true">
        <img src="https://l-api.jd.com/relay-aigc/design/image/prompt/A%20lifestyle%20scene%20of%20a%20modern%20wireless%20speaker%20on%20a%20wooden%20table%20in%20a%20cozy%20living%20room?width=512&height=512" className="w-[176px] h-[176px] object-cover" alt="商品" data-ai-alt="左主图" />
        <div className="p-[8px] pb-[10px] flex flex-col gap-[4px]" data-ai-alt="内容区">
          <span className="text-[14px] text-[#1A1A1A] leading-[20px] line-clamp-1" data-ai-alt="标题">
            Sonos SL高级感音响织物
          </span>
          <div className="flex items-baseline gap-[4px] mt-[2px]" data-ai-alt="价格行">
            <span className="text-[12px] text-[#FF0F23] font-bold">¥</span>
            <span className="text-[18px] text-[#FF0F23] font-[900]">230</span>
            <span className="text-[12px] text-[#FF0F23]">到手价</span>
            <span className="text-[12px] text-[#C2C4CC] line-through ml-[2px]">¥550</span>
          </div>
          <span className="text-[12px] text-[#CC8241] mt-[4px] truncate" data-ai-alt="底部描述">
            家庭影院式音响
          </span>
        </div>
      </div>

      {/* 右商品卡 */}
      <div className="w-[176px] bg-[#FFFFFF] rounded-[8px] flex flex-col overflow-hidden" data-ai-alt="右商品卡" data-ai-clip="true">
        <div className="w-[176px] h-[176px] relative" data-ai-alt="右主图区">
           <img src="https://l-api.jd.com/relay-aigc/design/image/prompt/A%20person%20relaxing%20on%20a%20sofa%20with%20a%20wireless%20bluetooth%20speaker%20nearby%20in%20a%20warm%20living%20room?width=512&height=512" className="w-[176px] h-[176px] object-cover" alt="商品" />
           <img src="https://img13.360buyimg.com/ling/jfs/t1/407059/6/4571/857/69bea5c2Fe30c78d9/02762c00a0aafbc7.png" className="absolute bottom-0 left-0 w-[176px] h-[40px]" alt="气泡装饰" data-ai-alt="气泡下缘装饰" />
        </div>
        <div className="p-[8px] pb-[10px] flex flex-col gap-[4px]" data-ai-alt="内容区">
          <span className="text-[14px] text-[#1A1A1A] leading-[20px] line-clamp-1" data-ai-alt="标题">
            SONOS Roam 无线蓝牙
          </span>
          <div className="flex items-baseline gap-[4px] mt-[2px]" data-ai-alt="价格行">
            <span className="text-[12px] text-[#FF0F23] font-bold">¥</span>
            <span className="text-[18px] text-[#FF0F23] font-[900]">1299</span>
            <span className="text-[12px] text-[#FF0F23]">到手价</span>
            <span className="text-[12px] text-[#C2C4CC] line-through ml-[2px]">¥1600</span>
          </div>
          <div className="flex gap-[4px] mt-[4px]" data-ai-alt="底部标签组" data-ai-list="true">
             <div className="border-[0.5px] border-[#FF3D4D66] rounded-[3px] px-[3px] py-[1px] flex items-center justify-center" data-ai-alt="促销标签">
               <span className="text-[10px] text-[#FF3D4D]">满200减30</span>
             </div>
             <div className="border-[0.5px] border-[#CC824166] rounded-[3px] px-[3px] py-[1px] flex items-center justify-center" data-ai-alt="服务标签">
               <span className="text-[10px] text-[#CC8241]">80天价保</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
