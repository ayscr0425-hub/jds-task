import React from 'react';

function OrderCard() {
  return (
    <div className="w-full bg-[#FFFFFF] rounded-[12px] flex flex-col pt-[12px] pb-[10px] gap-[18px]" data-ai-alt="订单与足迹卡">

      {/* 顶部统计 Tabs */}
      <div className="flex items-center px-[12px] gap-[32px]" data-ai-alt="顶部统计Tabs" data-ai-list="true">
        {[
          { title: '足迹', count: '115' },
          { title: '收藏', count: '89' },
          { title: '关注', count: '15' },
          { title: '种草', count: '34' }
        ].map((tab, i) => (
          <div key={i} className="flex items-center gap-[4px]" data-ai-alt={`Tab-${tab.title}`}>
            <span className="text-[13px] font-medium text-[#1A1A1A]" data-ai-alt="Tab标题">{tab.title}</span>
            <div className="bg-[#F2F3F5] px-[6px] h-[14px] rounded-[7px] flex items-center justify-center" data-ai-alt="数量胶囊">
              <span className="text-[10px] font-bold text-[#505259]">{tab.count}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 中部：订单状态入口 5个 + 1全部 */}
      <div className="flex items-center px-[8px] justify-between relative" data-ai-alt="订单状态入口" data-ai-list="true">
        <div className="absolute bottom-[-10px] left-[12px] right-[12px] h-[0.5px] bg-[#0000000F]" data-ai-alt="底部分割线" />
        {[
          { icon: 'https://img13.360buyimg.com/ling/jfs/t1/406546/19/14674/976/69c12693Fb5ff7b59/02760500503df12d.png', label: '待支付' },
          { icon: 'https://img13.360buyimg.com/ling/jfs/t1/404461/40/12190/1210/69ba987bFcb7847a3/0276056050714357.png', label: '待收货' },
          { icon: 'https://img13.360buyimg.com/ling/jfs/t1/405617/23/6014/1205/69ba987bF2d3aa6eb/0276052051a4749f.png', label: '待服务' },
          { icon: 'https://img13.360buyimg.com/ling/jfs/t1/403860/14/11714/1296/69ba987bF820c5411/027605005170d1ea.png', label: '待评价' },
          { icon: 'https://img13.360buyimg.com/ling/jfs/t1/403733/25/7970/2396/69ba987bF3263df44/0276050050be9ca6.png', label: '退款/售后' }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-[8px] w-[56px]" data-ai-alt={`入口-${item.label}`}>
            <img src={item.icon} className="w-[24px] h-[24px] object-contain" alt={item.label} data-ai-alt="入口图标" />
            <span className="text-[12px] text-[#505259]" data-ai-alt="入口文案">{item.label}</span>
          </div>
        ))}

        <div className="w-[1px] h-[24px] bg-[#E5E5E5]" data-ai-alt="竖分割线" />

        <div className="flex flex-col items-center gap-[8px] w-[48px]" data-ai-alt="全部订单">
          <div className="w-[24px] h-[24px] flex items-center justify-center" data-ai-alt="全部图标容器">
            <img src="https://img10.360buyimg.com/img/jfs/t1/408944/3/12709/787/69c69a04F7743c131/027601c01c446827.png" className="w-[16px] h-[16px]" />
          </div>
          <span className="text-[12px] text-[#505259]" data-ai-alt="全部文案">全部</span>
        </div>
      </div>

      {/* 底部：外露订单条 */}
      <div className="px-[10px] w-full pt-[4px]" data-ai-alt="外露订单条">
        <div className="w-full h-[36px] bg-[#F5F7FA] rounded-[8px] flex items-center pr-[12px] relative overflow-hidden cursor-pointer active:opacity-80 transition-opacity" data-ai-alt="外露条容器" data-ai-clip="true" onClick={() => goToPage('footprint')}>
          <img src="https://img13.360buyimg.com/ling/jfs/t1/407974/17/6259/34834/69c12693Ffbc06ede/0276078078bd8d6f.png" className="w-[36px] h-[36px] ml-[2px] rounded-[6px] object-cover shrink-0" alt="商品" data-ai-alt="商品图" />
          <div className="ml-[8px] flex items-center gap-[6px] flex-1 overflow-hidden" data-ai-alt="信息区">
            <div className="bg-[#FFC300] h-[16px] px-[4px] rounded-[3px] flex items-center justify-center shrink-0" data-ai-alt="外卖Tag">
              <span className="text-[10px] font-bold text-[#1A1A1A] whitespace-nowrap">外卖</span>
            </div>
            <span className="text-[12px] font-medium text-[#8E4400] shrink-0 whitespace-nowrap" data-ai-alt="主信息">预计18:33送达</span>
            <span className="text-[12px] text-[#A66A32] truncate" data-ai-alt="次信息">您的订单预计4月30日18:33前...</span>
          </div>

          {/* 轮播点 */}
          <div className="absolute bottom-[2px] left-1/2 translate-x-[-50%]" data-ai-alt="轮播指示器">
            <img src="https://img13.360buyimg.com/ling/jfs/t1/406514/21/17465/369/69c26d12F0c70215a/027607400802cef6.png" className="w-[29px] h-[2px]" alt="dots" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default OrderCard;
