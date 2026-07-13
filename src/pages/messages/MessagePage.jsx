import React, { useState } from 'react';
import { navigateTo } from '@/utils/navigation';

function MessagePage() {
  const [activeFilter, setActiveFilter] = useState('全部');
  const [activeFeedTab, setActiveFeedTab] = useState('春日连衣裙');

  return (
    <div className="mx-auto w-[375px] min-h-[762px] bg-[#F2F3F5] relative pb-[80px] font-sans text-[#1A1A1A]" data-ai-alt="消息页面容器">
      {/* 顶部悬浮组 (状态栏+顶栏) */}
      <div className="sticky top-0 left-0 right-0 z-50 bg-white">
        {/* 状态栏 */}
        <div className="h-[44px] w-full flex items-center justify-between px-[16px]" data-ai-alt="状态栏">
          <div className="text-[15px] font-medium" data-ai-alt="时间">6:18</div>
          <div className="flex items-center space-x-[4px]" data-ai-alt="系统状态图标组">
            <img src="https://img13.360buyimg.com/ling/jfs/t1/408245/12/8557/720/69c2de2fF12c8e64f/027604803009d3c9.png" className="w-[18px] h-[12px]" data-ai-alt="蜂窝信号" />
            <img src="https://img13.360buyimg.com/ling/jfs/t1/406115/8/17091/1338/69c2de2fF9d24a45e/027605403c09a64b.png" className="w-[21px] h-[15px]" data-ai-alt="Wifi" />
            <div className="w-[24px] h-[12px] border border-black rounded-[3px] relative" data-ai-alt="电池">
              <div className="absolute left-[1px] top-[1px] bottom-[1px] bg-black w-[16px] rounded-[1.5px]"></div>
              <div className="absolute right-[-3px] top-[4px] w-[2px] h-[4px] bg-black rounded-r-[1px]"></div>
            </div>
          </div>
        </div>

        {/* 顶栏 */}
        <div className="h-[44px] w-full flex items-center justify-between px-[16px]" data-ai-alt="顶栏">
          <div className="text-[18px] font-medium text-[#1A1A1A]" data-ai-alt="标题 消息">消息</div>
          <div className="flex items-center gap-[16px]" data-ai-alt="右上操作组">
            <i className="fa-solid fa-cart-shopping text-[20px] text-[#1A1A1A] w-[20px] h-[20px] flex items-center justify-center cursor-pointer active:scale-90 transition-transform" onClick={() => navigateTo('cart')} data-ai-alt="购物袋图标"></i>
            <i className="fa-solid fa-ellipsis text-[20px] text-[#1A1A1A] w-[20px] h-[20px] flex items-center justify-center cursor-pointer active:scale-90 transition-transform" data-ai-alt="更多按钮"></i>
          </div>
        </div>
      </div>

      {/* 顶部白色承接背景与筛选 */}
      <div className="w-full bg-white" data-ai-alt="顶部白色背景">
        {/* 频道入口区 */}
        <div className="px-[16px] pt-[12px] pb-[20px]" data-ai-alt="频道入口容器">
          <div className="flex justify-between" data-ai-list="true" data-ai-alt="频道入口组">
            {/* 客服 (选中) */}
            <div className="flex flex-col items-center gap-[6px] w-[46px] cursor-pointer active:scale-95 transition-transform" data-ai-alt="客服入口">
              <div className="w-[46px] h-[46px] bg-[#FF5C67] rounded-[14px] flex items-center justify-center">
                <img src="https://img13.360buyimg.com/ling/jfs/t1/407855/38/7889/1934/69c2de2fF406d3ebf/02760600647aee0a.png" className="w-[24px] h-[24px]" data-ai-alt="客服图标" />
              </div>
              <div className="text-[#FF0F23] text-[13px] font-medium">客服</div>
            </div>
            {/* 物流 */}
            <div className="flex flex-col items-center gap-[6px] w-[46px] cursor-pointer active:scale-95 transition-transform group" data-ai-alt="物流入口">
              <div className="w-[46px] h-[46px] bg-[#F7F8FC] rounded-[14px] flex items-center justify-center group-hover:bg-[#EBECEF] transition-colors">
                <img src="https://img13.360buyimg.com/ling/jfs/t1/406001/6/2568/4783/69ba97dcFe9557263/02760b80b8469304.png" className="w-[46px] h-[46px]" data-ai-alt="物流图标" />
              </div>
              <div className="text-[#1A1A1A] text-[13px]">物流</div>
            </div>
            {/* 提醒 */}
            <div className="flex flex-col items-center gap-[6px] w-[46px] cursor-pointer active:scale-95 transition-transform group" data-ai-alt="提醒入口">
              <div className="w-[46px] h-[46px] bg-[#F7F8FC] rounded-[14px] flex items-center justify-center group-hover:bg-[#EBECEF] transition-colors">
                <img src="https://img13.360buyimg.com/ling/jfs/t1/406093/35/1743/4087/69ba97dcF5d92c9d8/02760b80b85d60ff.png" className="w-[46px] h-[46px]" data-ai-alt="提醒图标" />
              </div>
              <div className="text-[#1A1A1A] text-[13px]">提醒</div>
            </div>
            {/* 优惠 */}
            <div className="flex flex-col items-center gap-[6px] w-[46px] cursor-pointer active:scale-95 transition-transform group" data-ai-alt="优惠入口">
              <div className="w-[46px] h-[46px] bg-[#F7F8FC] rounded-[14px] flex items-center justify-center group-hover:bg-[#EBECEF] transition-colors">
                <img src="https://img13.360buyimg.com/ling/jfs/t1/405851/25/3775/5697/69ba97dcFdc22938d/02760b80b89477ef.png" className="w-[46px] h-[46px]" data-ai-alt="优惠图标" />
              </div>
              <div className="text-[#1A1A1A] text-[13px]">优惠</div>
            </div>
            {/* 点评 */}
            <div className="flex flex-col items-center gap-[6px] w-[46px] cursor-pointer active:scale-95 transition-transform group" data-ai-alt="点评入口">
              <div className="w-[46px] h-[46px] bg-[#F7F8FC] rounded-[14px] flex items-center justify-center group-hover:bg-[#EBECEF] transition-colors">
                <img src="https://img13.360buyimg.com/ling/jfs/t1/404198/37/13453/5619/69ba97ddFa6521080/02760b80b8f7342c.png" className="w-[46px] h-[46px]" data-ai-alt="点评图标" />
              </div>
              <div className="text-[#1A1A1A] text-[13px]">点评</div>
            </div>
          </div>
        </div>

        {/* 消息筛选Tab */}
        <div className="h-[32px] px-[16px] flex items-center" data-ai-alt="消息筛选Tab条">
          {['全部', '购物', '秒送'].map((filter, idx) => (
            <React.Fragment key={filter}>
              <div onClick={() => setActiveFilter(filter)} className="flex items-center h-full cursor-pointer group" data-ai-alt={`Tab项: ${filter}`}>
                <span className={`text-[13px] ${activeFilter === filter ? 'text-[#FF0F23] font-medium' : 'text-[#1A1A1A] group-hover:text-[#FF0F23]'} transition-colors`}>{filter}</span>
                {filter === '秒送' && (
                  <div className="ml-[4px] bg-[#FFD026] rounded-[2px] px-[4px] h-[14px] flex items-center justify-center" data-ai-alt="外卖角标">
                    <span className="text-[#21190E] text-[10px] scale-90 origin-left">外卖</span>
                  </div>
                )}
              </div>
              {idx < 2 && <div className="w-[1px] h-[10px] bg-[#E5E5E5] mx-[12px]" data-ai-alt="分隔线"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 消息列表 */}
      <div className="w-full flex flex-col bg-white" data-ai-list="true" data-ai-alt="消息列表">
        {/* 消息行 1: 速写官方旗舰店 */}
        <div className="h-[72px] flex items-center pl-[16px] bg-white cursor-pointer active:bg-[#F9F9F9] transition-colors" data-ai-alt="消息行">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/406145/30/1222/13937/69ba97d7F8008fa8c/02760c00c08fa0ef.png" className="w-[48px] h-[48px] rounded-[8px] border-[0.55px] border-[#0000000F]" data-ai-alt="店铺头像" />
          <div className="ml-[12px] flex-1 min-w-0 pr-[16px] flex items-center h-full border-b border-[#0000000F]">
            <div className="flex-1 min-w-0 flex flex-col justify-center h-full">
              <div className="text-[16px] text-[#1A1A1A] truncate" data-ai-alt="标题">速写官方旗舰店</div>
              <div className="text-[13px] text-[#505259] truncate mt-[2px]" data-ai-alt="摘要">你的订单预计明天发出哦</div>
            </div>
            <div className="text-[13px] text-[#888B94] self-start mt-[16px] ml-[8px] whitespace-nowrap shrink-0" data-ai-alt="时间">昨天</div>
          </div>
        </div>

        {/* 消息行 2: 京东快递小哥 */}
        <div className="h-[72px] flex items-center pl-[16px] bg-white cursor-pointer active:bg-[#F9F9F9] transition-colors" data-ai-alt="消息行">
          <img src="https://l-api.jd.com/relay-aigc/design/image/prompt/A%20highly%20detailed%20and%20realistic%20portrait%20of%20a%20handsome%20male%20courier%20wearing%20a%20bright%20red%20uniform%2C%20smiling%20warmly%2C%20looking%20directly%20at%20the%20camera%2C%20clean%20background%2C%20soft%20lighting%2C%20high%20resolution%2C%208k%2C%20professional%20photography%2C%20perfect%20for%20an%20avatar%2C%20centered%20composition%2C%20highly%20detailed%20face?width=512&height=512" className="w-[48px] h-[48px] rounded-[8px] border-[0.55px] border-[#0000000F] object-cover" data-ai-alt="快递小哥头像" />
          <div className="ml-[12px] flex-1 min-w-0 pr-[16px] flex items-center h-full border-b border-[#0000000F]">
            <div className="flex-1 min-w-0 flex flex-col justify-center h-full">
              <div className="text-[16px] text-[#1A1A1A] truncate" data-ai-alt="标题">京东快递小哥</div>
              <div className="text-[13px] text-[#505259] truncate mt-[2px]" data-ai-alt="摘要">[图片]</div>
            </div>
            <div className="text-[13px] text-[#888B94] self-start mt-[16px] ml-[8px] whitespace-nowrap shrink-0" data-ai-alt="时间">昨天</div>
          </div>
        </div>

        {/* 消息行 3: 骑手 */}
        <div className="h-[72px] flex items-center pl-[16px] bg-white cursor-pointer active:bg-[#F9F9F9] transition-colors" data-ai-alt="消息行">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/403504/14/21429/28543/69ba97d8Fa4e2d9e1/02760c00c041e48a.png" className="w-[48px] h-[48px] rounded-[8px] border-[0.55px] border-[#0000000F]" data-ai-alt="骑手头像" />
          <div className="ml-[12px] flex-1 min-w-0 pr-[16px] flex items-center h-full border-b border-[#0000000F]">
            <div className="flex-1 min-w-0 flex flex-col justify-center h-full">
              <div className="flex items-center overflow-hidden w-full">
                <div className="text-[16px] text-[#1A1A1A] shrink-0 truncate max-w-[120px]" data-ai-alt="主标题">骑手-冯小梅</div>
                <img src="https://img13.360buyimg.com/ling/jfs/t1/402950/24/17359/1080/69ba97d8F75a2cfa2/0276030030d18cee.png" className="w-[12px] h-[12px] ml-[6px] shrink-0" data-ai-alt="店铺图标" />
                <div className="text-[13px] text-[#8C6B45] truncate ml-[4px] flex-1 mr-[12px]" data-ai-alt="副品牌">CHAGEE霸王茶姬</div>
              </div>
              <div className="text-[13px] text-[#505259] truncate mt-[2px]" data-ai-alt="摘要">给您放到家门口了</div>
            </div>
            <div className="text-[13px] text-[#888B94] self-start mt-[16px] ml-[8px] whitespace-nowrap shrink-0" data-ai-alt="时间">昨天</div>
          </div>
        </div>

        {/* 消息行 4: 京东客服 */}
        <div className="h-[72px] flex items-center pl-[16px] bg-white cursor-pointer active:bg-[#F9F9F9] transition-colors" data-ai-alt="消息行">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/409290/28/3184/26635/69c2de30Fcd5cd695/02760b80b82ce627.png" className="w-[48px] h-[48px] rounded-[8px] border-[0.55px] border-[#0000000F]" data-ai-alt="客服头像" />
          <div className="ml-[12px] flex-1 min-w-0 pr-[16px] flex items-center h-full">
            <div className="flex-1 min-w-0 flex flex-col justify-center h-full">
              <div className="text-[16px] text-[#1A1A1A] truncate" data-ai-alt="标题">京东客服</div>
              <div className="text-[13px] text-[#505259] truncate mt-[2px]" data-ai-alt="摘要">你好，请问有什么可以帮助您的～</div>
            </div>
            <div className="self-start mt-[18px] ml-[8px] shrink-0">
              <div className="h-[14px] px-[4px] rounded-[2px] border-[0.33px] border-[#C2C4CC] flex items-center justify-center" data-ai-alt="官方角标">
                <span className="text-[10px] text-[#888B94] leading-none">官方</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 一周前消息分组标题 */}
      <div className="h-[44px] px-[16px] flex items-center bg-white" data-ai-alt="分组标题栏">
        <span className="text-[13px] text-[#888B94]">一周前消息</span>
      </div>

      {/* 一周前消息列表 */}
      <div className="w-full flex flex-col bg-white pb-[16px]" data-ai-list="true" data-ai-alt="旧消息列表">
        <div className="h-[72px] flex items-center pl-[16px] bg-white cursor-pointer active:bg-[#F9F9F9] transition-colors" data-ai-alt="消息行">
          <div className="w-[48px] h-[48px] rounded-[8px] border-[0.55px] border-[#0000000F] bg-white flex items-center justify-center font-bold text-[8px] overflow-hidden" data-ai-alt="CHANEL头像">
            CHANEL
          </div>
          <div className="ml-[12px] flex-1 min-w-0 pr-[16px] flex items-center h-full border-b border-[#0000000F]">
            <div className="flex-1 min-w-0 flex flex-col justify-center h-full">
              <div className="text-[16px] text-[#1A1A1A] truncate" data-ai-alt="标题">CHANEL香奈儿官方旗舰店</div>
              <div className="text-[13px] text-[#505259] truncate mt-[2px]" data-ai-alt="摘要">探索香奈儿 柔和净肤体验套组</div>
            </div>
            <div className="text-[13px] text-[#888B94] self-start mt-[16px] ml-[8px] whitespace-nowrap shrink-0" data-ai-alt="时间">2025/06/25</div>
          </div>
        </div>
      </div>

      {/* 推荐Feeds 浮层 */}
      <div className="relative mt-[-16px] bg-[#F2F3F5] rounded-t-[16px] shadow-[0_-2px_10px_#00000014] flex flex-col z-10" data-ai-alt="推荐Feeds浮层">
        {/* 顶部白色底板区 */}
        <div className="w-full bg-white rounded-t-[16px] pt-[12px] pb-[8px]" data-ai-alt="Feeds顶部容器">
          {/* 抽屉把手指示器 */}
          <div className="w-full flex justify-center mb-[10px] cursor-pointer" data-ai-alt="抽屉把手">
            <div className="w-[24px] h-[4px] bg-[#E5E5E5] rounded-full"></div>
          </div>
          {/* 顶部分类Tab */}
          <div className="w-full overflow-x-auto no-scrollbar px-[8px] h-[38px] flex items-center relative" data-ai-alt="推荐分类Tab">
            <div className="flex space-x-[20px] whitespace-nowrap px-[8px]">
              {['推荐', '春日连衣裙', '时尚休闲', '冲锋衣', '精品家居', '夏日休闲'].map((tab) => (
                <div 
                  key={tab}
                  onClick={() => setActiveFeedTab(tab)}
                  className={`relative flex flex-col items-center justify-center h-full cursor-pointer group ${activeFeedTab === tab ? '' : 'hover:opacity-80'}`}
                  data-ai-alt={`Tab: ${tab}`}
                >
                  <span className={`text-[${activeFeedTab === tab ? '14px' : '13px'}] text-[${activeFeedTab === tab ? '#1A1A1A' : '#505259'}] font-${activeFeedTab === tab ? 'semibold' : 'normal'} leading-[18px] transition-all duration-200`}>{tab}</span>
                  {activeFeedTab === tab && <div className="absolute bottom-[-6px] w-[20px] h-[2px] bg-[#FF0F23] rounded-full transition-all"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 瀑布流内容区 */}
        <div className="px-[8px] pt-[8px]" data-ai-alt="瀑布流容器">
          <div className="flex space-x-[8px] items-start" data-ai-list="true">
            {/* 左列 */}
            <div className="w-[176px] flex flex-col space-y-[8px]" data-ai-alt="左列">
              {/* 商品卡 L1 */}
              <div className="w-[176px] bg-white rounded-[8px] overflow-hidden cursor-pointer active:scale-[0.98] transition-transform hover:shadow-md" data-ai-alt="标准商品卡">
                <img src="https://img13.360buyimg.com/ling/jfs/t1/405708/38/3321/937965/69ba97deFced4352c/02762c03a8c6fef7.png" className="w-[176px] h-[234px] object-cover" data-ai-alt="商品主图" />
                <div className="p-[8px] pb-[10px] flex flex-col gap-[7px] relative" data-ai-alt="信息区">
                  <div className="text-[14px] text-[#1A1A1A] leading-[20px] line-clamp-2 hover:text-[#FF0F23] transition-colors" data-ai-alt="商品标题">naivee纳薇25夏新款</div>
                  <div className="flex items-baseline text-[#FF0F23]" data-ai-alt="价格行">
                    <span className="text-[10px]">¥</span>
                    <span className="text-[16px] font-bold">860</span>
                    <span className="text-[10px]">.00</span>
                    <span className="text-[12px] ml-[4px]">到手价</span>
                  </div>
                  <div className="flex flex-wrap gap-[4px]" data-ai-alt="标签栏">
                    <div className="h-[14px] px-[4px] border-[0.33px] border-[#FF0F234D] rounded-[2px] flex items-center justify-center text-[10px] text-[#FF0F23]">满300减50</div>
                    <div className="h-[14px] px-[4px] border-[0.33px] border-[#B5691A4D] rounded-[2px] flex items-center justify-center text-[10px] text-[#B5691A]">30天价保</div>
                  </div>
                  <div className="absolute right-[8px] bottom-[10px] w-[20px] h-[20px] bg-white border-[0.5px] border-[#FF0F23] rounded-full flex items-center justify-center text-[#FF0F23] hover:bg-[#FF0F23] hover:text-white transition-colors" onClick={(e) => e.stopPropagation()} data-ai-alt="加车按钮">
                    <i className="fa-solid fa-plus text-[12px]"></i>
                  </div>
                </div>
              </div>
              {/* 商品卡 L2 */}
              <div className="w-[176px] bg-white rounded-[8px] overflow-hidden cursor-pointer active:scale-[0.98] transition-transform hover:shadow-md" data-ai-alt="标准商品卡">
                <img src="https://img13.360buyimg.com/ling/jfs/t1/405895/29/2662/1522394/69ba97dfF72e050c7/02762c03a8805e5d.png" className="w-[176px] h-[234px] object-cover" data-ai-alt="商品主图" />
                <div className="p-[8px] pb-[10px] flex flex-col gap-[7px] relative" data-ai-alt="信息区">
                  <div className="text-[14px] text-[#1A1A1A] leading-[20px] line-clamp-2 hover:text-[#FF0F23] transition-colors" data-ai-alt="商品标题">naivee纳薇25夏新款挂脖</div>
                  <div className="flex items-baseline text-[#FF0F23]" data-ai-alt="价格行">
                    <span className="text-[10px]">¥</span>
                    <span className="text-[16px] font-bold">889</span>
                    <span className="text-[10px]">.00</span>
                    <span className="text-[12px] ml-[4px]">到手价</span>
                    <span className="text-[12px] text-[#888B94] ml-[6px]">销量500+</span>
                  </div>
                  <div className="flex flex-wrap gap-[4px]" data-ai-alt="标签栏">
                    <div className="h-[14px] px-[4px] border-[0.33px] border-[#FF0F234D] rounded-[2px] flex items-center justify-center text-[10px] text-[#FF0F23]">满300减50</div>
                    <div className="h-[14px] px-[4px] border-[0.33px] border-[#B5691A4D] rounded-[2px] flex items-center justify-center text-[10px] text-[#B5691A]">30天价保</div>
                  </div>
                  <div className="absolute right-[8px] bottom-[10px] w-[20px] h-[20px] bg-white border-[0.5px] border-[#FF0F23] rounded-full flex items-center justify-center text-[#FF0F23] hover:bg-[#FF0F23] hover:text-white transition-colors" onClick={(e) => e.stopPropagation()} data-ai-alt="加车按钮">
                    <i className="fa-solid fa-plus text-[12px]"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* 右列 */}
            <div className="w-[176px] flex flex-col space-y-[8px]" data-ai-alt="右列">
              {/* 商品卡 R1 */}
              <div className="w-[176px] bg-white rounded-[8px] overflow-hidden cursor-pointer active:scale-[0.98] transition-transform hover:shadow-md" data-ai-alt="标准商品卡">
                <img src="https://img13.360buyimg.com/ling/jfs/t1/404614/3/12699/310164/69ba97e0Ff13766ff/02762c03a8642651.png" className="w-[176px] h-[234px] object-cover" data-ai-alt="商品主图" />
                <div className="p-[8px] pb-[10px] flex flex-col gap-[7px] relative" data-ai-alt="信息区">
                  <div className="text-[14px] text-[#1A1A1A] leading-[20px] line-clamp-2 hover:text-[#FF0F23] transition-colors" data-ai-alt="商品标题">miumiu 刺绣连衣裙 25款</div>
                  <div className="flex items-baseline text-[#FF0F23]" data-ai-alt="价格行">
                    <span className="text-[10px]">¥</span>
                    <span className="text-[16px] font-bold">860</span>
                    <span className="text-[10px]">.00</span>
                    <span className="text-[12px] ml-[4px]">到手价</span>
                  </div>
                  <div className="flex flex-wrap gap-[4px]" data-ai-alt="标签栏">
                    <div className="h-[14px] px-[4px] border-[0.33px] border-[#FF0F234D] rounded-[2px] flex items-center justify-center text-[10px] text-[#FF0F23]">满300减50</div>
                    <div className="h-[14px] px-[4px] border-[0.33px] border-[#B5691A4D] rounded-[2px] flex items-center justify-center text-[10px] text-[#B5691A]">30天价保</div>
                  </div>
                  <div className="absolute right-[8px] bottom-[10px] w-[20px] h-[20px] bg-white border-[0.5px] border-[#FF0F23] rounded-full flex items-center justify-center text-[#FF0F23] hover:bg-[#FF0F23] hover:text-white transition-colors" onClick={(e) => e.stopPropagation()} data-ai-alt="加车按钮">
                    <i className="fa-solid fa-plus text-[12px]"></i>
                  </div>
                </div>
              </div>

              {/* 同款精选特殊卡 R2 */}
              <div className="w-[176px] bg-white rounded-[8px] p-[10px] pb-[12px] shadow-sm" data-ai-alt="同款精选推荐卡">
                <div className="flex items-center gap-[4px] mb-[12px]" data-ai-alt="推荐卡标题">
                  <img src="https://img13.360buyimg.com/ling/jfs/t1/403612/39/16977/1511/69ba97e0Fdeb3efb4/0276038038f2b67d.png" className="w-[14px] h-[14px]" data-ai-alt="星闪图标" />
                  <span className="text-[14px] font-semibold text-[#1A1A1A]">想要看点别的？</span>
                </div>
                <div className="flex flex-col gap-[8px]" data-ai-list="true">
                  {/* 胶囊 1 */}
                  <div className="h-[34px] bg-[#F7F8FC] rounded-full flex items-center justify-between p-[1px] pr-[12px] cursor-pointer hover:bg-[#EBECEF] transition-colors" data-ai-alt="推荐胶囊项">
                    <div className="flex items-center gap-[8px]">
                      <img src="https://img13.360buyimg.com/ling/jfs/t1/404382/19/12540/33251/69ba97e1Fdf2fda3d/0276080080184da3.png" className="w-[32px] h-[32px] rounded-full object-cover" data-ai-alt="左侧缩略图" />
                      <span className="text-[13px] text-[#1A1A1A]">多巴胺连衣裙</span>
                    </div>
                    <img src="https://img13.360buyimg.com/ling/jfs/t1/404705/16/11901/935/69ba97e1Fd0a04d6a/02760300303fe0de.png" className="w-[12px] h-[12px]" data-ai-alt="火爆图标" />
                  </div>
                  {/* 胶囊 2 */}
                  <div className="h-[34px] bg-[#F7F8FC] rounded-full flex items-center justify-between p-[1px] pr-[12px] cursor-pointer hover:bg-[#EBECEF] transition-colors" data-ai-alt="推荐胶囊项">
                    <div className="flex items-center gap-[8px]">
                      <img src="https://img13.360buyimg.com/ling/jfs/t1/405130/16/8973/21635/69ba97e1F0eba2833/027608008021ff04.png" className="w-[32px] h-[32px] rounded-full object-cover" data-ai-alt="左侧缩略图" />
                      <span className="text-[13px] text-[#1A1A1A]">亮色连衣裙</span>
                    </div>
                    <img src="https://img13.360buyimg.com/ling/jfs/t1/404705/16/11901/935/69ba97e1Fd0a04d6a/02760300303fe0de.png" className="w-[12px] h-[12px]" data-ai-alt="火爆图标" />
                  </div>
                  {/* 胶囊 3 */}
                  <div className="h-[34px] bg-[#F7F8FC] rounded-full flex items-center justify-between p-[1px] pr-[12px] cursor-pointer hover:bg-[#EBECEF] transition-colors" data-ai-alt="推荐胶囊项">
                    <div className="flex items-center gap-[8px]">
                      <img src="https://img13.360buyimg.com/ling/jfs/t1/403568/37/12779/21334/69ba97e2F637263a1/0276080080877713.png" className="w-[32px] h-[32px] rounded-full object-cover" data-ai-alt="左侧缩略图" />
                      <span className="text-[13px] text-[#1A1A1A]">辣妹风连衣裙</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 商品卡 R3 */}
              <div className="w-[176px] bg-white rounded-[8px] overflow-hidden cursor-pointer active:scale-[0.98] transition-transform hover:shadow-md" data-ai-alt="标准商品卡">
                <img src="https://img13.360buyimg.com/ling/jfs/t1/404979/2/8767/1597857/69ba97e2F402105a0/02762c03a8205a10.png" className="w-[176px] h-[234px] object-cover" data-ai-alt="商品主图" />
                <div className="p-[8px] pb-[10px] flex flex-col gap-[7px] relative" data-ai-alt="信息区">
                  <div className="text-[14px] text-[#1A1A1A] leading-[20px] line-clamp-2 hover:text-[#FF0F23] transition-colors" data-ai-alt="商品标题">miumiu 刺绣欧根纱</div>
                  <div className="flex items-baseline text-[#FF0F23]" data-ai-alt="价格行">
                    <span className="text-[10px]">¥</span>
                    <span className="text-[12px] font-bold">9689</span>
                    <span className="text-[10px]">.00</span>
                    <span className="text-[12px] ml-[4px]">到手价</span>
                    <span className="text-[12px] text-[#888B94] ml-[6px]">销量500+</span>
                  </div>
                  <div className="flex flex-wrap gap-[4px]" data-ai-alt="标签栏">
                    <div className="h-[14px] px-[4px] border-[0.33px] border-[#FF0F234D] rounded-[2px] flex items-center justify-center text-[10px] text-[#FF0F23]">满300减50</div>
                    <div className="h-[14px] px-[4px] border-[0.33px] border-[#B5691A4D] rounded-[2px] flex items-center justify-center text-[10px] text-[#B5691A]">30天价保</div>
                  </div>
                  <div className="absolute right-[8px] bottom-[10px] w-[20px] h-[20px] bg-white border-[0.5px] border-[#FF0F23] rounded-full flex items-center justify-center text-[#FF0F23] hover:bg-[#FF0F23] hover:text-white transition-colors" onClick={(e) => e.stopPropagation()} data-ai-alt="加车按钮">
                    <i className="fa-solid fa-plus text-[12px]"></i>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* 底部固定导航栏 */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] h-[80px] bg-white flex shadow-[0_-0.5px_0_0_#0000001F] z-50 pb-[34px]" data-ai-alt="底部导航栏">
        <div className="flex-1 flex justify-between px-[6px] h-[46px] items-center" data-ai-list="true">
          {/* 首页 */}
          <div className="flex-1 flex flex-col items-center justify-center gap-[2px] cursor-pointer active:scale-95 transition-transform" onClick={() => navigateTo('homeSpecial')} data-ai-alt="底导项: 首页">
            <img src="https://img13.360buyimg.com/ling/jfs/t1/404940/2/11174/1739/69ba97e3F6f8f8d7c/0276058058c1b6d0.png" className="w-[22px] h-[22px]" data-ai-alt="图标" />
            <span className="text-[11px] text-[#505259]">首页</span>
          </div>
          {/* 逛 */}
          <div className="flex-1 flex flex-col items-center justify-center gap-[2px] cursor-pointer active:scale-95 transition-transform" onClick={() => navigateTo('explore')} data-ai-alt="底导项: 逛">
            <img src="https://img13.360buyimg.com/ling/jfs/t1/404196/24/14505/2785/69ba97e3Fda0bc7ed/0276059058e21b8d.png" className="w-[22px] h-[22px]" data-ai-alt="图标" />
            <span className="text-[11px] text-[#505259]">逛</span>
          </div>
          {/* 消息 (选中) */}
          <div className="flex-1 flex flex-col items-center justify-center gap-[2px] cursor-pointer active:scale-95 transition-transform" data-ai-alt="底导项: 消息">
            <img src="https://img13.360buyimg.com/ling/jfs/t1/404456/1/11965/1969/69ba97e3F8dff1923/027605805889a2fc.png" className="w-[22px] h-[22px]" data-ai-alt="图标" />
            <span className="text-[11px] text-[#FF0F23] font-semibold">消息</span>
          </div>
          {/* 购物车 */}
          <div className="flex-1 flex flex-col items-center justify-center gap-[2px] cursor-pointer active:scale-95 transition-transform" onClick={() => navigateTo('cart')} data-ai-alt="底导项: 购物车">
            <img src="https://img13.360buyimg.com/ling/jfs/t1/405174/26/8224/1549/69ba97e4F69e9445b/02760580586900d4.png" className="w-[22px] h-[22px]" data-ai-alt="图标" />
            <span className="text-[11px] text-[#505259]">购物车</span>
          </div>
          {/* 我的 */}
          <div className="flex-1 flex flex-col items-center justify-center gap-[2px] cursor-pointer active:scale-95 transition-transform" onClick={() => navigateTo('myHome')} data-ai-alt="底导项: 我的">
            <img src="https://img13.360buyimg.com/ling/jfs/t1/405456/39/6591/2582/69ba97e4F18e1bad2/02760580582ea7ab.png" className="w-[22px] h-[22px]" data-ai-alt="图标" />
            <span className="text-[11px] text-[#505259]">我的</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagePage;
