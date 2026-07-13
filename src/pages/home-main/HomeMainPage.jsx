import React, { useState } from 'react';
import { navigateTo } from '@/utils/navigation';
import CommonTopNav from '@/components/CommonTopNav';

function HomeMainPage() {
  return (
    <div className="w-full flex justify-center bg-[#F2F3F5] min-h-screen">
      <div className="relative w-[375px] bg-[#F2F3F5] overflow-hidden min-h-[1129px] font-sans pb-[114px]">
        <HomePage />
      </div>
    </div>
  );
}

const HomePage = () => {
  return (
    <div className="relative w-full h-full pb-[114px]">
      <div className="w-full flex flex-col bg-[#FFFFFF] sticky top-0 z-50">
        <img
          src="https://img20.360buyimg.com/img/jfs/t1/415073/10/53/30620/69cfb429Fea9fe11a/02761200a02658e9.png"
          className="absolute right-0 top-0 w-[144px] h-[80px] object-cover pointer-events-none z-0"
          alt="营销图"
          data-ai-alt="右上营销图"
        />
        <StatusBar />
        <CommonTopNav activeTab="homeMain" />
        <SearchBar />
      </div>
      <SecondaryTabs />
      <ServiceIcons />
      <MarketingCards />
      <ProductFeed />
      <BottomTabBar />
      <OverlayItems />
    </div>
  );
};

const StatusBar = () => (
  <div className="w-full h-[44px] flex items-center justify-between px-[21px] relative bg-transparent z-10" data-ai-alt="顶部系统状态栏">
    <span className="text-[15px] font-semibold text-[#1A1A1A] tracking-wide mt-[2px]" data-ai-alt="时间文本">6:18</span>
    <div className="flex items-center gap-1.5" data-ai-alt="状态图标">
      <img src="https://img13.360buyimg.com/ling/jfs/t1/406256/22/10385/530/69bea5cdF162be29c/027604803078fb92.png" className="w-[18px] h-[12px]" alt="信号" />
      <img src="https://img13.360buyimg.com/ling/jfs/t1/404905/7/15702/762/69bea5ccF60e79eec/027605403cdae28a.png" className="w-[21px] h-[15px]" alt="WIFI" />
      <div className="w-[24px] h-[11px] border border-[#1A1A1A] rounded-[3px] p-[1px] flex items-center relative">
        <div className="h-full w-[80%] bg-[#1A1A1A] rounded-[1.5px]"></div>
        <div className="absolute -right-[2px] top-1/2 -translate-y-1/2 w-[1.5px] h-[4px] bg-[#1A1A1A] rounded-r-[1px]"></div>
      </div>
    </div>
  </div>
);

const SearchBar = () => (
  <div className="w-full h-[46px] bg-transparent px-[8px] py-[4px] relative z-10" data-ai-alt="搜索层">
    <div className="w-full h-[38px] bg-white rounded-[8px] border border-[#FF0F23] flex items-center px-[12px] justify-between shadow-sm cursor-text" data-ai-alt="搜索框">
      <div className="flex items-center gap-[8px] flex-1 min-w-0">
        <img src="https://img13.360buyimg.com/ling/jfs/t1/407234/17/7885/1024/69c0b64fF85f49c4d/0276050050dc2b66.png" className="w-[20px] h-[20px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity" alt="扫码" data-ai-alt="左扫码icon" />
        <span className="text-[14px] text-[#333333] truncate" data-ai-alt="占位词">华为Mate 70</span>
      </div>
      <div className="flex items-center shrink-0 border-l border-gray-200 pl-[10px] ml-[8px]">
        <img src="https://img13.360buyimg.com/img/jfs/t1/410084/26/8944/1296/69c7791dFb9ce83b9/0276028027b85d51.png" className="w-[18px] h-[18px] mr-[4px] cursor-pointer hover:opacity-80 transition-opacity" alt="相机" data-ai-alt="相机icon" />
        <span className="text-[15px] font-semibold text-[#FF0F23] cursor-pointer active:opacity-70 transition-opacity" data-ai-alt="搜索文字">搜索</span>
      </div>
    </div>
  </div>
);

const SecondaryTabs = () => {
  const tabs = ['推荐', '国家补贴', '手机', '家电', '运动', '生鲜', '美妆'];
  const [activeTab, setActiveTab] = useState('推荐');

  return (
    <div className="w-full h-[36px] bg-[#FFFFFF] relative z-30" data-ai-alt="二级Tab层">
      <div className="w-[329px] h-full overflow-x-auto scrollbar-hide flex items-center pl-[12px] gap-[16px]" data-ai-list="true" data-ai-clip="true">
        {tabs.map((tab, idx) => {
          const isActive = activeTab === tab;
          const isGreen = tab === '国家补贴';
          return (
            <div
              key={idx}
              onClick={() => setActiveTab(tab)}
              className={`shrink-0 text-[15px] font-medium cursor-pointer transition-all duration-200 ${isActive ? (isGreen ? 'text-[#0AAD48] font-bold scale-105' : 'text-[#1A1A1A] font-bold scale-105') : (isGreen ? 'text-[#0AAD48] opacity-80 hover:opacity-100' : 'text-[#1A1A1A] opacity-75 hover:opacity-100')} ${isGreen ? 'h-[22px] flex items-center' : ''} whitespace-nowrap`}
              data-ai-alt={tab}
            >
              {tab}
            </div>
          );
        })}
      </div>
      <div className="absolute right-0 top-0 h-[36px] w-[46px] bg-[#FFFFFF] flex items-center justify-end z-10 cursor-pointer group" data-ai-alt="更多控制">
        <div className="absolute left-0 top-0 w-[12px] h-[36px] bg-gradient-to-r from-transparent to-[#FFFFFF]" data-ai-alt="渐隐遮罩"></div>
        <div className="w-[34px] h-[36px] bg-[#FFFFFF] flex items-center justify-center group-active:bg-gray-100 transition-colors">
          <div className="w-[16px] h-[16px] flex flex-col justify-center gap-[3px]">
            <div className="w-full h-[1.5px] bg-[#1A1A1A] rounded-full"></div>
            <div className="w-full h-[1.5px] bg-[#1A1A1A] rounded-full"></div>
            <div className="w-full h-[1.5px] bg-[#1A1A1A] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceIcons = () => {
  const services = [
    { name: '秒杀', icon: 'https://img13.360buyimg.com/ling/jfs/t1/405133/7/7914/7339/69bea93fF36607a60/027608d0901d00c7.png' },
    { name: '看病买药', icon: 'https://img13.360buyimg.com/img/jfs/t1/408599/22/16152/2339/69c7793dF65adc785/0276048048ff9a5e.png' },
    { name: '京东超市', icon: 'https://img11.360buyimg.com/img/jfs/t1/409613/13/11009/2845/69c77952Fdcf32c7a/027604804847a64d.png' },
    { name: '东东农场', icon: 'https://img30.360buyimg.com/img/jfs/t1/407945/14/19870/3647/69c77963F20d62e76/0276048048f0cd7e.png' },
    { name: '夺宝岛', icon: 'https://img13.360buyimg.com/ling/jfs/t1/407266/16/4544/3479/69bfd4ceF3fb05f87/0276070050b36406.png', extra: 'https://img13.360buyimg.com/ling/jfs/t1/407146/18/6001/1353/69bfd4cdF99ee3170/027606f0434cc6d1.png' },
    { name: '试用领取', icon: 'https://img13.360buyimg.com/ling/jfs/t1/404345/1/13465/4825/69ba7373F717beb6c/027606c090ccd7fc.png' }
  ];

  return (
    <div className="w-full h-[64px] bg-[#FFFFFF] mt-1 relative" data-ai-alt="功能入口层">
      <div className="w-[375px] pl-[12px] flex items-start justify-between pr-[12px] overflow-hidden" data-ai-list="true" data-ai-clip="true">
        {services.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[48px] shrink-0 cursor-pointer active:scale-95 transition-transform" data-ai-alt={`入口-${item.name}`}>
            <div className="w-[36px] h-[36px] relative flex justify-center items-center mb-[6px]">
              <img src={item.icon} className="w-full h-full object-contain" alt={item.name} />
              {item.extra && <img src={item.extra} className="absolute -right-[6px] -bottom-[2px] w-[27px] h-[16px] z-10" alt="装饰" />}
            </div>
            <span className="text-[12px] text-[#505259] whitespace-nowrap">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 w-full flex justify-center" data-ai-alt="翻页指示器">
        <div className="w-[21px] h-[4px] bg-[#C2C4CC] opacity-40 rounded-[2px] relative">
          <div className="absolute left-0 top-[0.5px] w-[6px] h-[3px] bg-[#FF0F23] rounded-[2px] z-10 opacity-100"></div>
        </div>
      </div>
    </div>
  );
};

const MarketingCards = () => (
  <div className="w-full px-[8px] pt-[10px] pb-[7px] flex flex-col gap-[7px]" data-ai-alt="营销卡组">
    <div className="flex w-full gap-[7px]" data-ai-list="true">
      <SubsidyCard />
      <QualityLifeCard />
    </div>
    <div className="flex w-full gap-[7px]" data-ai-list="true">
      <ShippingCard />
      <div className="flex gap-[7px]">
        <NarrowCard type="live" />
        <NarrowCard type="hot" />
      </div>
    </div>
  </div>
);

const SubsidyCard = () => (
  <div className="w-[176px] h-[116px] bg-white rounded-[8px] p-[10px] flex flex-col justify-between cursor-pointer active:scale-[0.98] transition-transform shadow-sm hover:shadow" data-ai-alt="国家补贴卡">
    <div className="text-[14px] font-semibold text-[#1A1A1A] leading-none" data-ai-alt="标题">国家补贴×百亿补贴</div>
    <div className="flex justify-between items-end mt-2">
      <div className="flex flex-col items-center gap-1 w-[72px]">
        <img src="https://img13.360buyimg.com/ling/jfs/t1/408663/34/599/58465/69c0b651Fdab7471d/02761201087b1c3c.png" className="w-[72px] h-[66px] object-cover" alt="香水" data-ai-alt="左商品位" />
        <span className="text-[12px] text-[#FF0F23] font-medium leading-none">¥69</span>
      </div>
      <div className="flex flex-col items-center gap-1 w-[72px]">
        <div className="h-[66px] flex items-center justify-center">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/407233/21/9423/56851/69c0b651F0f618d81/02760a00f4a26261.png" className="w-[40px] h-[61px] object-contain" alt="手表" data-ai-alt="右商品位" />
        </div>
        <span className="text-[12px] text-[#FF0F23] font-medium leading-none">¥680</span>
      </div>
    </div>
  </div>
);

const QualityLifeCard = () => (
  <div className="w-[176px] h-[116px] bg-white rounded-[8px] p-[10px] flex flex-col cursor-pointer active:scale-[0.98] transition-transform shadow-sm hover:shadow" data-ai-alt="品质生活卡">
    <div className="flex justify-between items-start">
      <div className="text-[14px] font-semibold text-[#1A1A1A] leading-none mb-1.5" data-ai-alt="标题">品质生活</div>
      <div className="flex gap-3">
        <div className="flex flex-col items-center gap-[4px]" data-ai-alt="上排图标1">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/406878/21/10614/15990/69c0b650Fd37b8757/027608008047fb2a.png" className="w-[32px] h-[32px]" alt="自营" />
          <span className="text-[11px] text-[#505259] leading-none scale-90 whitespace-nowrap">自营秒送</span>
        </div>
        <div className="flex flex-col items-center gap-[4px]" data-ai-alt="上排图标2">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/406016/28/17696/17850/69c0b650F5a60ed7e/0276080080f9c544.png" className="w-[32px] h-[32px]" alt="买药" />
          <span className="text-[11px] text-[#505259] leading-none scale-90 whitespace-nowrap">买药秒送</span>
        </div>
      </div>
    </div>
    <div className="flex items-center mt-[-24px] mb-2" data-ai-alt="地址行">
      <img src="https://img13.360buyimg.com/ling/jfs/t1/405682/15/5196/1436/69ba7375Fd3af95f8/0276028028d38426.png" className="w-[10px] h-[10px] mr-1" alt="地址" />
      <span className="text-[11px] text-[#B5691A] leading-none hover:underline">北京</span>
    </div>
    <div className="flex justify-between items-end mt-auto">
      <div className="flex flex-col items-center gap-[4px] w-[53px]" data-ai-alt="下排图标1">
        <img src="https://img13.360buyimg.com/ling/jfs/t1/405575/32/21179/16519/69c0b651F5ad4e4ea/0276080080a355b2.png" className="w-[32px] h-[32px]" alt="外卖" />
        <span className="text-[11px] text-[#505259] leading-none scale-90 whitespace-nowrap">品质外卖</span>
      </div>
      <div className="flex flex-col items-center gap-[4px] w-[53px]" data-ai-alt="下排图标2">
        <img src="https://img13.360buyimg.com/ling/jfs/t1/403819/24/21049/17945/69c0b652F703016fd/02760800804782a3.png" className="w-[32px] h-[32px]" alt="团购" />
        <span className="text-[11px] text-[#505259] leading-none scale-90 whitespace-nowrap">特价团购</span>
      </div>
      <div className="flex flex-col items-center gap-[4px] w-[53px]" data-ai-alt="下排图标3">
        <img src="https://img13.360buyimg.com/ling/jfs/t1/405813/36/15708/17100/69c0b652F9f5bedd0/0276080080a6536a.png" className="w-[32px] h-[32px]" alt="机酒" />
        <span className="text-[11px] text-[#505259] leading-none scale-90 whitespace-nowrap">酒店机票</span>
      </div>
    </div>
  </div>
);

const ShippingCard = () => (
  <div className="w-[176px] h-[116px] bg-white rounded-[8px] p-[10px] flex flex-col justify-between relative cursor-pointer active:scale-[0.98] transition-transform shadow-sm hover:shadow" data-ai-alt="9.9包邮卡">
    <div className="text-[14px] font-semibold text-[#1A1A1A] leading-none" data-ai-alt="标题">9.9包邮</div>
    <div className="absolute top-[10px] right-[10px] text-[12px] text-[#FF0F23] font-medium leading-none" data-ai-alt="红色角文案">1元也包邮</div>
    <div className="flex justify-between items-end mt-3">
      <div className="flex flex-col items-center gap-1">
        <img src="https://img13.360buyimg.com/ling/jfs/t1/407089/22/8868/98233/69c0b653Fb81763da/0276120108fc7a5c.png" className="w-[72px] h-[66px] object-cover" alt="薯片" data-ai-alt="左商品" />
        <span className="text-[12px] text-[#FF0F23] font-medium leading-none">¥6</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <img src="https://img13.360buyimg.com/ling/jfs/t1/406530/21/10552/43048/69bfd4e3F7fdbdcdd/02761201080ac7f6.png" className="w-[72px] h-[66px] object-cover" alt="水壶" data-ai-alt="右商品" />
        <span className="text-[12px] text-[#FF0F23] font-medium leading-none">¥1</span>
      </div>
    </div>
  </div>
);

const NarrowCard = ({ type }) => {
  const isLive = type === 'live';
  const width = isLive ? '84px' : '85px';
  const label = isLive ? '直播低价' : '爆品好价';
  const img = isLive ? 'https://img13.360buyimg.com/ling/jfs/t1/407758/38/3960/34301/69bfd4e4F1a93bccd/0276124108b1de9c.png' : 'https://img13.360buyimg.com/ling/jfs/t1/407333/34/8103/75781/69c0b652F37fe1ea7/027614014043730c.png';
  const imgSize = isLive ? 'w-[72px] h-[66px]' : 'w-[80px] h-[80px]';

  return (
    <div className={`w-[${width}] h-[116px] bg-white rounded-[8px] flex flex-col items-center pt-[6px] pb-[8px] cursor-pointer active:scale-[0.98] transition-transform shadow-sm hover:shadow`} data-ai-alt={`${label}卡`}>
      <div className="w-full px-[6px] mb-1 flex justify-start items-center" data-ai-alt="顶部标签">
        <div className="flex items-center gap-[4px] bg-[#FF0F23] rounded-[2px] pr-[4px] pl-[2px] py-[1px]">
          <div className="w-[10px] h-[10px] bg-transparent flex items-end justify-center gap-[1px] p-[2px]">
            <div className="w-[1px] h-[4px] bg-white"></div>
            <div className="w-[1px] h-[6px] bg-white"></div>
            <div className="w-[1px] h-[3px] bg-white"></div>
          </div>
          <span className="text-[10px] text-white font-medium leading-none">{label}</span>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img src={img} className={`${imgSize} object-contain`} alt={label} />
      </div>
      <span className="text-[12px] text-[#FF0F23] font-medium leading-none mt-1">¥69</span>
    </div>
  );
};

const ProductFeed = () => (
  <div className="w-full px-[8px] flex justify-between pb-4" data-ai-alt="双列商品Feed">
    <div className="w-[176px] flex flex-col gap-[7px]" data-ai-list="true">
      <SonosCard />
      <SonosRoamCard />
    </div>
    <div className="w-[176px] flex flex-col gap-[7px]" data-ai-list="true">
      <Mate60Card />
      <IPhoneCard />
    </div>
  </div>
);

const SonosCard = () => (
  <div className="w-[176px] h-[254px] bg-white rounded-[8px] overflow-hidden flex flex-col cursor-pointer active:scale-[0.98] transition-transform shadow-sm hover:shadow-md" data-ai-alt="Sonos商品卡">
    <div className="w-[176px] h-[176px] relative">
      <img src="https://img13.360buyimg.com/ling/jfs/t1/408085/14/4153/553890/69c0b654F7f498567/02762c02c0869c91.png" className="w-full h-full object-cover" alt="Sonos SL" />
      <div className="absolute bottom-0 w-full h-[40px] bg-gradient-to-t from-black/10 to-transparent"></div>
    </div>
    <div className="p-[8px] pb-[10px] flex flex-col flex-1">
      <div className="text-[14px] text-[#1A1A1A] leading-[20px] truncate mb-1 group-hover:text-[#FF0F23] transition-colors" style={{ letterSpacing: '-0.3px' }} data-ai-alt="商品标题">Sonos SL高级感音响织物</div>
      <div className="flex items-baseline gap-1 mt-auto">
        <span className="text-[12px] text-[#FF0F23] font-medium">¥</span>
        <span className="text-[18px] text-[#FF0F23] font-medium leading-none">230</span>
        <span className="text-[12px] text-[#FF0F23] ml-0.5">到手价</span>
        <span className="text-[12px] text-[#888B94] line-through ml-1 font-light">¥550</span>
      </div>
      <div className="mt-1.5 flex">
        <span className="text-[12px] text-[#CC8241]">家庭影院式音响</span>
      </div>
    </div>
  </div>
);

const Mate60Card = () => (
  <div className="w-[176px] h-[252px] bg-white rounded-[8px] overflow-hidden flex flex-col relative cursor-pointer active:scale-[0.98] transition-transform shadow-sm hover:shadow-md" data-ai-alt="Mate60商品卡">
    <div className="w-[176px] h-[176px] relative flex justify-center items-center bg-[#F9F9F9] overflow-hidden">
      <img src="https://l-api.jd.com/relay-aigc/design/image/prompt/cyan_smartphone_back_view_with_large_circular_camera_module?width=512&height=512" className="w-[120px] h-[140px] object-contain z-10 hover:scale-105 transition-transform duration-300" alt="Mate60" />
      <div className="absolute bottom-0 w-full h-[40px] bg-gradient-to-t from-black/5 to-transparent"></div>
    </div>
    <div className="p-[8px] pb-[10px] flex flex-col flex-1">
      <div className="text-[14px] text-[#1A1A1A] leading-[20px] truncate mb-1 group-hover:text-[#FF0F23] transition-colors" data-ai-alt="商品标题">华为Mate60pro 12GB+5</div>
      <div className="flex items-baseline gap-1 mt-auto">
        <span className="text-[12px] text-[#FF0F23] font-medium">¥</span>
        <span className="text-[18px] text-[#FF0F23] font-medium leading-none">6199</span>
        <span className="text-[12px] text-[#FF0F23] ml-0.5">到手价</span>
        <span className="text-[12px] text-[#888B94] line-through ml-1 font-light">¥6399</span>
      </div>
      <div className="mt-1.5 flex gap-[4px] items-center flex-wrap" data-ai-list="true">
        <div className="border border-[#8B8FFB4D] rounded-[2px] px-[3px] h-[14px] flex items-center justify-center">
          <span className="text-[10px] text-[#8B8FFB] leading-none font-medium">新品</span>
        </div>
        <div className="border border-[#B5691A4D] rounded-[2px] px-[3px] h-[14px] flex items-center justify-center">
          <span className="text-[10px] text-[#B5691A] leading-none">买贵双倍赔</span>
        </div>
        <div className="border border-[#B5691A4D] rounded-[2px] px-[3px] h-[14px] flex items-center justify-center">
          <span className="text-[10px] text-[#B5691A] leading-none">包邮</span>
        </div>
      </div>
    </div>
    <div className="absolute right-[8px] bottom-[10px] w-[20px] h-[20px] bg-[#FFEBF1] rounded-full flex items-center justify-center z-20 hover:bg-[#FFD1DD] transition-colors" onClick={(e) => { e.stopPropagation(); /* 阻止冒泡避免触发卡片点击 */ }} data-ai-alt="加车按钮">
      <div className="relative w-[10px] h-[10px]">
        <div className="absolute left-[4px] top-0 w-[2px] h-[10px] bg-[#FF0F23] rounded-sm"></div>
        <div className="absolute left-0 top-[4px] w-[10px] h-[2px] bg-[#FF0F23] rounded-sm"></div>
      </div>
    </div>
  </div>
);

const SonosRoamCard = () => (
  <div className="w-[176px] h-[262px] bg-white rounded-[8px] overflow-hidden flex flex-col relative cursor-pointer active:scale-[0.98] transition-transform shadow-sm hover:shadow-md" data-ai-alt="Roam商品卡">
    <div className="w-[176px] h-[176px] bg-[#F5F5F5] relative overflow-hidden">
      <img src="https://l-api.jd.com/relay-aigc/design/image/prompt/black_cylindrical_speaker_held_by_hand_outdoor_camping_background?width=512&height=512" className="w-full h-full object-cover" alt="SONOS Roam" />
      <div className="absolute bottom-0 w-full h-[40px] bg-gradient-to-t from-black/10 to-transparent"></div>
    </div>
    <div className="p-[8px] pb-[10px] flex flex-col flex-1">
      <div className="text-[14px] text-[#1A1A1A] leading-[20px] truncate mb-1 group-hover:text-[#FF0F23] transition-colors" data-ai-alt="商品标题">SONOS Roam 无线蓝牙</div>
      <div className="flex items-baseline gap-1 mt-auto">
        <span className="text-[12px] text-[#FF0F23] font-medium">¥</span>
        <span className="text-[16px] text-[#FF0F23] font-medium leading-none">1299</span>
        <span className="text-[12px] text-[#FF0F23] ml-0.5">到手价</span>
        <span className="text-[12px] text-[#C2C4CC] line-through ml-1 font-light">¥1600</span>
      </div>
      <div className="mt-1.5 flex gap-[4px] flex-wrap" data-ai-list="true">
        <div className="border-[0.5px] border-[#FF3D4D66] rounded-[2px] px-[3px] h-[14px] flex items-center justify-center">
          <span className="text-[10px] text-[#FF3D4D] leading-none">满200减30</span>
        </div>
        <div className="border-[0.5px] border-[#CC824166] rounded-[2px] px-[3px] h-[14px] flex items-center justify-center">
          <span className="text-[10px] text-[#CC8241] leading-none">80天价保</span>
        </div>
      </div>
    </div>
  </div>
);

const IPhoneCard = () => (
  <div className="w-[176px] h-[254px] bg-white rounded-[6px] overflow-hidden flex flex-col relative cursor-pointer active:scale-[0.98] transition-transform shadow-sm hover:shadow-md" data-ai-alt="iPhone商品卡">
    <div className="w-[176px] h-[176px] bg-[#F9F9F9] flex justify-center items-center relative overflow-hidden">
      <img src="https://l-api.jd.com/relay-aigc/design/image/prompt/desert_gold_titanium_smartphone_back_view_with_triple_camera?width=512&height=512" className="w-[120px] h-[130px] object-contain z-10 hover:scale-105 transition-transform duration-300" alt="iPhone 16 Pro" />
      <div className="absolute bottom-0 w-full h-[40px] bg-gradient-to-t from-black/5 to-transparent"></div>
    </div>
    <div className="p-[8px] pb-[10px] flex flex-col flex-1">
      <div className="text-[14px] text-[#1A1A1A] leading-[20px] truncate mb-1 group-hover:text-[#FF0F23] transition-colors" style={{ letterSpacing: '-0.5px' }} data-ai-alt="商品标题">Apple iPhone 16 Pro 256</div>
      <div className="flex items-baseline gap-1 mt-auto">
        <span className="text-[12px] text-[#FF0F23] font-medium">¥</span>
        <span className="text-[18px] text-[#FF0F23] font-medium leading-none">7299</span>
        <span className="text-[12px] text-[#FF0F23] ml-0.5">到手价</span>
        <span className="text-[12px] text-[#888B94] ml-1">销量2万+</span>
      </div>
      <div className="mt-1.5 flex gap-[4px] flex-wrap" data-ai-list="true">
        <div className="border-[0.5px] border-[#FF0F234D] rounded-[2px] px-[3px] h-[14px] flex items-center justify-center">
          <span className="text-[10px] text-[#FF0F23] leading-none">满300减30</span>
        </div>
        <div className="border-[0.5px] border-[#B5691A4D] rounded-[2px] px-[3px] h-[14px] flex items-center justify-center">
          <span className="text-[10px] text-[#B5691A] leading-none">30天价保</span>
        </div>
      </div>
    </div>
  </div>
);

const BottomTabBar = () => (
  <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] bg-white z-50" data-ai-alt="底部导航层">
    <div className="w-full h-[80px] shadow-[0_-0.5px_0_0_rgba(0,0,0,0.12)] flex items-start pt-[5px]">
      <div className="flex-1 flex flex-col items-center justify-start cursor-pointer active:scale-95 transition-transform" onClick={() => navigateTo('homeSpecial')} data-ai-alt="首页">
        <div className="w-[37px] h-[37px] rounded-full flex items-center justify-center mb-[2px]">
          <img src="https://img12.360buyimg.com/img/jfs/t1/408832/39/12676/3565/69c77e70F60229e7a/027604a04a759272.png" />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-start pt-[4px] cursor-pointer active:scale-95 transition-transform" onClick={() => navigateTo('explore')} data-ai-alt="逛">
        <img src="https://img13.360buyimg.com/ling/jfs/t1/404725/15/11532/2762/69ba7376Fe0ae4b8d/02760590589ca3fa.png" className="w-[22px] h-[22px] mb-[4px]" alt="逛" />
        <span className="text-[11px] text-[#505259] leading-none">逛</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-start pt-[4px] cursor-pointer active:scale-95 transition-transform" onClick={() => navigateTo('messages')} data-ai-alt="消息">
        <img src="https://img13.360buyimg.com/ling/jfs/t1/407222/12/5701/2336/69c0b655Fd2c0694a/0276058058287d4d.png" className="w-[22px] h-[22px] mb-[4px]" alt="消息" />
        <span className="text-[11px] text-[#505259] leading-none">消息</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-start pt-[4px] cursor-pointer active:scale-95 transition-transform" onClick={() => navigateTo('cart')} data-ai-alt="购物车">
        <img src="https://img13.360buyimg.com/ling/jfs/t1/406378/31/12687/1528/69c0b655Faa66a1f2/02760580589b30b3.png" className="w-[22px] h-[22px] mb-[4px]" alt="购物车" />
        <span className="text-[11px] text-[#505259] leading-none">购物车</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-start pt-[4px] cursor-pointer active:scale-95 transition-transform" onClick={() => navigateTo('myHome')} data-ai-alt="我的">
        <img src="https://img13.360buyimg.com/ling/jfs/t1/407110/39/9454/2532/69c0b656F1b2397dd/027605805856bcb1.png" className="w-[22px] h-[22px] mb-[4px]" alt="我的" />
        <span className="text-[11px] text-[#505259] leading-none">我的</span>
      </div>
    </div>
    <div className="w-full h-[34px] bg-white"></div>
  </div>
);

const OverlayItems = () => (
  <>
  </>
);

export default HomeMainPage;
