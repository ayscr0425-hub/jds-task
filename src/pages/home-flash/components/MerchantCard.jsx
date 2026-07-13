import React from 'react';

function MerchantCard({ type, shopName, logo }) {
  const isShop1 = type === "1";

  return (
    <div className="w-[359px] bg-[#FFFFFF] rounded-[12px] p-[12px] flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.04)]" data-ai-alt="店铺卡片">
      {/* Header Section */}
      <div className="flex gap-[8px] h-[72px] mb-[8px]" data-ai-alt="头部信息区">
        <img src={logo} className="w-[72px] h-[72px] rounded-[6px] object-cover border border-gray-100 flex-shrink-0" data-ai-alt="店铺Logo" />
        <div className="flex-1 flex flex-col gap-[4px] overflow-hidden">
          <div className="flex items-center gap-[4px] w-full">
            <div className="flex items-center gap-[4px] flex-1 w-0 overflow-hidden">
              <div className="h-[14px] flex items-center rounded-[2px] overflow-hidden flex-shrink-0" data-ai-alt="品牌标签">
                {isShop1 && <div className="bg-[#FF3333] h-full px-[3px] text-white text-[10px] flex items-center font-medium">自营</div>}
                <div className="bg-[#FFD939] h-full px-[3px] text-[#665005] text-[10px] flex items-center font-medium">外卖</div>
              </div>
              <span className="text-[16px] font-semibold text-[#1A1A1A] leading-tight truncate max-w-full" data-ai-alt="店铺名称">{shopName}</span>
            </div>
            <div className="bg-[#FFFFFF] border border-[#A9560132] rounded-[2px] px-1 text-[10px] text-[#A95601] whitespace-nowrap ml-auto flex-shrink-0">
              京东秒送
            </div>
          </div>

          <div className="flex items-center text-[11px] text-[#595959] gap-[6px]">
            <span className="text-[#FF0400] font-semibold text-[13px]">4.8<span className="text-[10px]">分</span></span>
            <span>该品牌已售6万+</span>
            <span className="ml-auto">26分钟达</span>
            <span>602m</span>
          </div>

          <div className="flex items-center text-[11px] text-[#595959] gap-[6px]">
            <span>起送¥10</span>
            <span className="text-[#A95601]">免运费</span>
            {/* Rank Strip */}
            <div className="h-[14px] flex items-center bg-[#FFF6E3] rounded-[2px] ml-1 overflow-hidden pr-1">
              <div className="bg-gradient-to-r from-[#FFF1D0] to-[#FFE6B3] h-full px-1 flex items-center">
                <i className="fa fa-fire text-[#FF0400] text-[8px] mr-[2px]"></i>
                <span className="text-[9px] font-medium text-[#A95601]">真榜</span>
              </div>
              <span className="text-[9px] text-[#A95601] px-1">北京市青椒肉丝入围</span>
              <i className="fa fa-angle-right text-[#A95601] text-[8px]"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Tags Line */}
      <div className="flex flex-wrap gap-[4px] mb-[10px]" data-ai-alt="标签行">
        {isShop1 ? (
          <>
            <div className="bg-[#FFF6E3] text-[#A95601] text-[10px] px-[5px] py-[1px] rounded-[2px]">宝藏小馆</div>
            <div className="bg-[#6F3212] text-white text-[10px] px-[5px] py-[1px] rounded-[2px]">堂食餐厅</div>
            <div className="bg-[#FFF6E3] text-[#A95601] text-[10px] px-[5px] py-[1px] rounded-[2px]">品牌饭卡</div>
            <div className="bg-[#FFF6E3] text-[#A95601] text-[10px] px-[5px] py-[1px] rounded-[2px] flex items-center">
              8折可叠加 <i className="fa fa-angle-right ml-[2px]"></i>
            </div>
            <div className="border border-gray-300 text-[#595959] text-[10px] px-[5px] py-[1px] rounded-[2px]">发票</div>
          </>
        ) : (
          <>
            <div className="bg-[#FFF0F4] text-[#FF0400] text-[10px] px-[5px] py-[1px] rounded-[2px]">自提更省</div>
            <div className="bg-[#6F3212] text-white text-[10px] px-[5px] py-[1px] rounded-[2px]">即提门店</div>
            <div className="bg-[#FFF6E3] text-[#A95601] text-[10px] px-[5px] py-[1px] rounded-[2px]">超级月卡</div>
            <div className="bg-[#FFF6E3] text-[#A95601] text-[10px] px-[5px] py-[1px] rounded-[2px] flex items-center">
              再享8折 <i className="fa fa-angle-right ml-[2px]"></i>
            </div>
            <div className="border border-gray-300 text-[#595959] text-[10px] px-[5px] py-[1px] rounded-[2px]">发票</div>
          </>
        )}
      </div>

      {/* Content Split: Left Coupon + Right Products */}
      <div className="flex flex-1 gap-[8px]" data-ai-alt="左券右商品分栏">
        {/* Coupon Card */}
        <div className="w-[72px] h-[120px] bg-gradient-to-b from-[#FFF2CB] to-[#FFE082] rounded-[8px] flex flex-col items-center py-[6px] relative shadow-[0_2px_4px_rgba(255,200,0,0.15)]" data-ai-alt="优惠券卡">
          <div className="w-[14px] h-[6px] bg-[#FFFFFF] rounded-b-full absolute top-0 left-[29px]"></div>
          <span className="text-[11px] font-semibold text-[#B35900] mt-1">百补好运券</span>
          <div className="flex items-baseline text-[#B35900] mt-1">
            <span className="text-[14px] font-semibold">¥</span>
            <span className="text-[24px] font-bold leading-none">15</span>
          </div>
          <span className="text-[10px] text-[#B35900] opacity-80 mt-[2px]">满16可用</span>
          <div className="w-[54px] h-[24px] rounded-[4px] flex items-center justify-center text-[10px] text-[#854A05] font-semibold absolute bottom-[8px] shadow-sm">
            去使用
          </div>
        </div>

        {/* Right Products */}
        <div className="flex-1 flex gap-[8px] overflow-hidden" data-ai-list="true" data-ai-alt="横滑商品列">
          <ProductCard type={type} id="1" />
          <ProductCard type={type} id="2" />
          <ProductCard type={type} id="3" />
          {/* Partial item */}
          <div className="w-[30px] flex-shrink-0 overflow-hidden" data-ai-clip="true">
            <ProductCard type={type} id="4" isPartial />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ type, id, isPartial }) {
  const images1 = [
    "https://l-api.jd.com/relay-aigc/design/image/prompt/a bowl of stir-fried green peppers and small fish, white background?width=256&height=256",
    "https://l-api.jd.com/relay-aigc/design/image/prompt/a bowl of stir-fried eggs with soy sauce, white background?width=256&height=256",
    "https://l-api.jd.com/relay-aigc/design/image/prompt/a bowl of beef with pickled cabbage over rice, white background?width=256&height=256",
    "https://l-api.jd.com/relay-aigc/design/image/prompt/a small plate of pickled cabbage, white background?width=256&height=256"
  ];
  const names1 = ["卷饼尖椒小鱼", "酱豆炒蛋", "酸菜牛肉盖饭", "酸菜"];
  const currentPrices1 = ["17.8", "8.9", "17.9", "8.9"];
  const oldPrices1 = ["19.3", "32", "32", "32"];

  const images2 = [
    "https://l-api.jd.com/relay-aigc/design/image/prompt/two steamed meat buns and a tea egg, white background?width=256&height=256",
    "https://l-api.jd.com/relay-aigc/design/image/prompt/a bowl of preserved egg and lean meat porridge, white background?width=256&height=256",
    "https://l-api.jd.com/relay-aigc/design/image/prompt/a bowl of rice with minced meat and sour beans, white background?width=256&height=256",
    "https://l-api.jd.com/relay-aigc/design/image/prompt/steamed buns in a bamboo steamer, white background?width=256&height=256"
  ];
  const names2 = ["茶叶蛋+鲜汁肉包", "皮蛋瘦肉粥", "酸豆角肉末饭", "酸菜"];
  const currentPrices2 = ["17.8", "8.9", "17.9", "17.9"];
  const oldPrices2 = ["32", "32", "32", "32"];

  const idx = parseInt(id) - 1;
  const isShop1 = type === "1";
  const img = isShop1 ? images1[idx] : images2[idx];
  const name = isShop1 ? names1[idx] : names2[idx];
  const currentPrice = isShop1 ? currentPrices1[idx] : currentPrices2[idx];
  const oldPrice = isShop1 ? oldPrices1[idx] : oldPrices2[idx];

  return (
    <div className={`w-[72px] flex flex-col shrink-0 ${isPartial ? 'overflow-hidden' : ''}`} data-ai-alt="商品子卡">
      <div className="w-[72px] h-[72px] rounded-[6px] overflow-hidden relative border border-gray-50 flex-shrink-0">
        <img src={img} className="w-full h-full object-cover" />
        {!isPartial && id === "1" && isShop1 && (
          <div className="absolute left-0 bottom-0 bg-[#A00000] text-white text-[8px] px-[2px] rounded-tr-[4px]">下单必点 不纠结</div>
        )}
        {!isPartial && (id === "2" || id === "3") && isShop1 && (
          <div className="absolute top-0 right-0 bg-green-600 text-white text-[8px] px-[2px] rounded-bl-[4px] leading-tight text-center">新鲜<br />现炒</div>
        )}
      </div>
      <span className="text-[11px] text-[#1A1A1A] mt-[6px] truncate flex-shrink-0">{name}</span>
      <div className="flex flex-col w-full relative pt-1">
        <div className="flex items-baseline gap-1">
          <span className="text-[#FF0400] text-[14px] font-semibold leading-none"><span className="text-[10px]">¥</span>{currentPrice}</span>
        </div>
        <div>
          <span className="text-[#C2C4CC] text-[10px] line-through leading-none">¥{oldPrice}</span>
        </div>
        {!isPartial && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-[#FFEBEF] rounded-full flex items-center justify-center">
            <div className="w-[10px] h-[1.4px] bg-[#FF0400] rounded-[1px]"></div>
            <div className="w-[1.4px] h-[10px] bg-[#FF0400] rounded-[1px] absolute"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MerchantCard;
