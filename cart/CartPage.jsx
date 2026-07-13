import React, { useState, useMemo } from 'react';
import { navigateTo } from '../prototype/navigation';

function CartPage() {
  const [items, setItems] = useState([
    { id: 1, store: '京东超市', name: 'ZEAL新西兰进口狗狗零食', price: 60, quantity: 1, checked: false },
    { id: 2, store: '京东超市', name: '汰渍洗衣液 强力洗衣粉2L装', price: 90, quantity: 1, checked: false },
    { id: 3, store: '卡萨帝', name: '卡萨帝 小蛮腰F11 洗碗机', price: 4500, quantity: 1, checked: false }
  ]);

  const updateItem = (id, field, value) => {
    if (field === 'quantity' && value < 1) return;
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const toggleStore = (storeName, checked) => {
    setItems(items.map(item => item.store === storeName ? { ...item, checked } : item));
  };

  const toggleAll = (checked) => {
    setItems(items.map(item => ({ ...item, checked })));
  };

  const store1Checked = items.filter(i => i.store === '京东超市').every(i => i.checked) && items.filter(i => i.store === '京东超市').length > 0;
  const store2Checked = items.filter(i => i.store === '卡萨帝').every(i => i.checked) && items.filter(i => i.store === '卡萨帝').length > 0;
  const allChecked = items.length > 0 && items.every(i => i.checked);
  const totalPrice = items.filter(i => i.checked).reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalCheckedCount = items.filter(i => i.checked).reduce((acc, item) => acc + item.quantity, 0);

  const [activeTab, setActiveTab] = useState('全部');

  return (
    <div className="mx-auto w-[375px] min-h-[812px] bg-[#F5F6FA] relative font-sans text-left overflow-hidden" data-ai-alt="页面根容器">

      {/* Status Bar */}
      <div className="w-[375px] h-[44px] flex items-center justify-between px-[20px] bg-transparent absolute top-0 left-0 z-50" data-ai-alt="系统状态栏">
        <div className="text-[15px] font-semibold text-black tracking-tight mt-[1px]">6:18</div>
        <div className="flex items-center space-x-[5px]">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/409560/1/2673/723/69c2ddf9Fab05bf6f/027604803008a5ac.png" alt="cell" className="w-[18px] h-[12px] object-contain" data-ai-alt="状态栏蜂窝" />
          <img src="https://img13.360buyimg.com/ling/jfs/t1/409642/19/2316/1331/69c2de39Fa09fd73d/027605403cec00f5.png" alt="wifi" className="w-[16px] h-[11px] object-contain ml-[2px]" data-ai-alt="状态栏wifi" />
          <div className="w-[25px] h-[12px] rounded-[3px] border border-black p-[1px] ml-[2px] relative">
            <div className="bg-black h-full w-[85%] rounded-[1px]"></div>
            <div className="absolute right-[-2px] top-[3px] w-[1px] h-[4px] bg-black"></div>
          </div>
        </div>
      </div>

      {/* Top Bar */}
      <div className="w-[375px] h-[44px] mt-[44px] flex items-center justify-between px-[16px]" data-ai-alt="顶部主导航条">
        <div className="flex items-end space-x-1">
          <span className="text-[22px] font-semibold text-[#1A1A1A] leading-[22px]" data-ai-alt="页面标题文本">购物车</span>
          <span className="text-[12px] text-[#888B94] mb-[2px]" data-ai-alt="标题数量">(88)</span>

          <div className="ml-[8px] h-[20px] bg-[#FFFFFF] rounded-[10px] px-[6px] flex items-center space-x-[4px] mb-[2px] ml-[6px] cursor-pointer active:scale-95 transition-transform" data-ai-alt="地址胶囊">
            <img src="https://img13.360buyimg.com/ling/jfs/t1/405260/12/7302/1673/69ba97f2Fc1a3783c/0276030030faec20.png" alt="loc" className="w-[12px] h-[12px]" data-ai-alt="定位图标" />
            <span className="text-[12px] text-[#505259] leading-[12px] max-w-[130px] truncate" data-ai-alt="地址文本">锋创科技园5-2-801</span>
            <img src="https://img13.360buyimg.com/ling/jfs/t1/409795/37/871/248/69c2de38F8997c5e8/0276010020fdb3de.png" alt="arr" className="w-[4px] h-[8px]" data-ai-alt="地址右箭头" />
          </div>
        </div>
        <div className="flex items-center space-x-[12px]">
          <span className="text-[14px] text-[#1A1A1A] cursor-pointer active:opacity-70" data-ai-alt="管理">管理</span>
          <img src="https://img13.360buyimg.com/ling/jfs/t1/409920/19/211/518/69c2de39F09e00a44/0276050050b64c5d.png" alt="more" className="w-[20px] h-[20px] cursor-pointer active:opacity-70" data-ai-alt="顶部更多" />
        </div>
      </div>

      {/* Primary Tabs */}
      <div className="w-[375px] h-[36px] mt-[4px] px-[16px] flex items-center justify-between" data-ai-alt="一级tab条">
        <div className="flex items-center space-x-[24px]">
          {['全部', '购物', '秒送'].map((tab) => (
            <div key={tab} onClick={() => setActiveTab(tab)} className="relative flex flex-col items-center justify-center h-full pt-[6px] cursor-pointer" data-ai-alt={`一级tab-${tab}`}>
              <div className="flex items-center space-x-[2px]">
                <span className={`text-[16px] font-${activeTab === tab ? 'semibold text-[#FF0F23]' : 'medium text-[#1A1A1A]'} leading-[16px] transition-colors`} data-ai-alt="tab文案">{tab}</span>
                {tab === '秒送' && (
                  <div className="min-w-[31px] h-[16px] bg-[#F4C400] rounded-[4px] flex items-center justify-center px-[4px] ml-[2px]" data-ai-alt="外卖黄标">
                    <span className="text-[11px] font-semibold text-[#21190E] leading-[11px]">外卖</span>
                  </div>
                )}
              </div>
              {activeTab === tab && <div className="w-[20px] h-[3px] bg-[#FF0F23] rounded-[2px] mt-[4px] absolute bottom-[-3px] transition-all" data-ai-alt="激活下划线"></div>}
            </div>
          ))}
        </div>
        <img src="https://img13.360buyimg.com/ling/jfs/t1/406034/11/16613/1690/69c2de39F188dc7e9/027604004027a207.png" alt="search" className="w-[18px] h-[18px] mr-[2px] cursor-pointer active:opacity-70" data-ai-alt="顶部搜索" />
      </div>

      {/* Secondary Filters */}
      <div className="w-[375px] h-[36px] pl-[12px] pr-[12px] flex items-center overflow-x-auto no-scrollbar" data-ai-alt="二级筛选标签行">
        <div className="flex space-x-[8px] flex-nowrap" data-ai-list="true">
          {['国家补贴', '送礼', '凑单', '分组', '跨店满减'].map((text, idx) => (
            <div key={idx} className="h-[28px] bg-[#FFFFFF] rounded-[4px] px-[12px] flex items-center justify-center shrink-0 cursor-pointer hover:bg-[#F2F3F5] transition-colors" data-ai-alt={`筛选胶囊-${text}`}>
              <span className="text-[13px] text-[#191919] leading-[13px]">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Content Area */}
      <div className="w-[375px] h-[648px] overflow-y-auto px-[12px] pt-[8px] pb-[132px] no-scrollbar flex flex-col space-y-[12px]" data-ai-alt="主体滚动内容">

        {/* SC01: Store Card Supermarket */}
        <div className="w-full bg-[#FFFFFF] rounded-[12px] p-[12px] flex flex-col space-y-[16px]" data-ai-alt="店铺共享父卡-京东超市">
          {/* Store Header */}
          <div className="flex items-center space-x-[8px]" data-ai-alt="店铺卡1头部">
            <div onClick={() => toggleStore('京东超市', !store1Checked)} className={`w-[16px] h-[16px] rounded-[8px] border flex items-center justify-center cursor-pointer transition-colors ${store1Checked ? 'bg-[#FF0F23] border-[#FF0F23]' : 'border-[#C2C4CC] bg-[#FFFFFF]'}`} data-ai-alt="复选框">
              {store1Checked && <i className="fa-solid fa-check text-white text-[10px] scale-75"></i>}
            </div>
            <div className="flex space-x-[4px]">
              <div className="h-[14px] px-[4px] bg-[#FF0F23] rounded-[2px] flex items-center justify-center" data-ai-alt="自营红标">
                <span className="text-[10px] text-[#FFFFFF] leading-[10px]">自营</span>
              </div>
              <div className="h-[14px] px-[4px] bg-[#00A66E] rounded-[2px] flex items-center justify-center" data-ai-alt="京东超市绿标">
                <span className="text-[10px] text-[#FFFFFF] leading-[10px]">京东超市</span>
              </div>
            </div>
            <span className="text-[15px] font-medium text-[#1A1A1A] leading-[15px] cursor-pointer" data-ai-alt="店铺名">京东超市官方自营</span>
            <img src="https://img13.360buyimg.com/ling/jfs/t1/408803/37/5727/423/69c2de39Faddbd496/0276030030bdba37.png" alt="arr" className="w-[12px] h-[12px] opacity-60" data-ai-alt="店铺头部右箭头" />
          </div>

          {/* Product Row 1 */}
          <div className="flex flex-row relative" data-ai-alt="商品条目1">
            <div onClick={() => updateItem(1, 'checked', !items[0].checked)} className={`w-[16px] h-[16px] rounded-[8px] border flex items-center justify-center mt-[44px] absolute left-0 cursor-pointer transition-colors ${items[0].checked ? 'bg-[#FF0F23] border-[#FF0F23]' : 'border-[#C2C4CC] bg-[#FFFFFF]'}`} data-ai-alt="商品复选框">
              {items[0].checked && <i className="fa-solid fa-check text-white text-[10px] scale-75"></i>}
            </div>
            <div className="w-[104px] h-[104px] bg-[#FFFFFF] rounded-[12px] ml-[28px] overflow-hidden flex items-center justify-center cursor-pointer" data-ai-alt="商品图底板">
              <img src="https://img30.360buyimg.com/img/jfs/t1/409993/14/8193/41590/69c782a9F87f91b4c/02760d00d07462a5.png" alt="prod1" className="w-[90%] h-[90%] object-contain mix-blend-multiply" data-ai-alt="商品图1" />
            </div>
            <div className="flex-1 ml-[12px] flex flex-col pt-[2px]">
              <div className="text-[14px] font-medium text-[#1A1A1A] leading-[20px] max-w-[185px] cursor-pointer" data-ai-alt="商品标题">ZEAL新西兰进口狗狗零食</div>
              <div className="h-[24px] bg-[#F7F8FC] rounded-[4px] px-[8px] mt-[6px] inline-flex items-center self-start max-w-full cursor-pointer active:bg-[#EBECEF] transition-colors" data-ai-alt="规格胶囊">
                <span className="text-[12px] text-[#505259] truncate">小牛肋骨1000g</span>
                <img src="https://img13.360buyimg.com/ling/jfs/t1/408037/3/9972/274/69c2de38F1d073ae4/0276020020e7c8fb.png" alt="arr" className="w-[8px] h-[8px] ml-[4px]" data-ai-alt="规格箭头" />
              </div>
              <div className="flex items-center space-x-[6px] mt-[8px]" data-ai-alt="营销标签行">
                <div className="flex items-center">
                  <span className="text-[11px] text-[#FF0F23]">满100减10</span>
                  <img src="https://img13.360buyimg.com/ling/jfs/t1/408055/1/9683/225/69c2de38Fdcb77bc4/02760200208b8714.png" alt="arr" className="w-[8px] h-[8px] ml-[2px]" />
                </div>
                <div className="w-[1px] h-[8px] bg-[#E5E5E5]"></div>
                <span className="text-[11px] text-[#FF0F23]">12期免息</span>
                <div className="w-[1px] h-[8px] bg-[#E5E5E5]"></div>
                <span className="text-[11px] text-[#B5691A]">15天价保</span>
              </div>
              <div className="flex items-end mt-[8px] relative" data-ai-alt="价格行">
                <span className="text-[12px] text-[#FF0F23] font-bold mb-[2px]">¥</span>
                <span className="text-[22px] text-[#FF0F23] font-extrabold leading-[22px]">{items[0].price}</span>
                <span className="text-[11px] text-[#FF0F23] ml-[4px] mb-[2px]">到手价</span>
                <span className="text-[12px] text-[#888B93] line-through ml-[4px] mb-[2px]">¥80</span>

                {/* Stepper */}
                <div className="absolute right-0 bottom-0 w-[60px] h-[24px] flex items-center justify-between border border-[#E5E5E5] rounded-[4px] overflow-hidden" data-ai-alt="数量编辑器">
                  <div onClick={() => updateItem(1, 'quantity', items[0].quantity - 1)} className="w-[16px] h-[24px] flex items-center justify-center cursor-pointer active:bg-[#F2F3F5]">
                    <div className={`w-[8px] h-[1.5px] rounded-[1px] ${items[0].quantity > 1 ? 'bg-[#1A1A1A]' : 'bg-[#C2C4CC]'}`}></div>
                  </div>
                  <div className="flex-1 h-[24px] bg-[#F7F8FC] mx-[1px] flex items-center justify-center">
                    <span className="text-[14px] text-[#1A1A1A] font-medium">{items[0].quantity}</span>
                  </div>
                  <div onClick={() => updateItem(1, 'quantity', items[0].quantity + 1)} className="w-[16px] h-[24px] flex items-center justify-center relative cursor-pointer active:bg-[#F2F3F5]">
                    <div className="w-[8px] h-[1.5px] bg-[#1A1A1A] rounded-[1px] absolute"></div>
                    <div className="w-[1.5px] h-[8px] bg-[#1A1A1A] rounded-[1px] absolute"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-[8px]" data-ai-alt="底部优惠说明">
                <span className="text-[12px] text-[#FF0F23]">已享首购礼金</span>
                <img src="https://img13.360buyimg.com/ling/jfs/t1/408055/1/9683/225/69c2de38Fdcb77bc4/02760200208b8714.png" alt="arr" className="w-[8px] h-[8px] ml-[2px]" />
              </div>
            </div>
          </div>

          {/* Product Row 2 */}
          <div className="flex flex-row relative" data-ai-alt="商品条目2">
            <div onClick={() => updateItem(2, 'checked', !items[1].checked)} className={`w-[16px] h-[16px] rounded-[8px] border flex items-center justify-center mt-[44px] absolute left-0 cursor-pointer transition-colors ${items[1].checked ? 'bg-[#FF0F23] border-[#FF0F23]' : 'border-[#C2C4CC] bg-[#FFFFFF]'}`} data-ai-alt="商品复选框">
              {items[1].checked && <i className="fa-solid fa-check text-white text-[10px] scale-75"></i>}
            </div>
            <div className="w-[104px] h-[104px] bg-[#F7F8FC] rounded-[12px] ml-[28px] overflow-hidden flex items-center justify-center cursor-pointer" data-ai-alt="商品图底板">
              <img src="https://img10.360buyimg.com/img/jfs/t1/410777/3/4360/30232/69c782b9F546edd6e/02760d00d040764c.png" alt="prod2" className="w-full h-full object-cover" data-ai-alt="商品图2" />
            </div>
            <div className="flex-1 ml-[12px] flex flex-col pt-[2px]">
              <div className="text-[14px] font-medium text-[#1A1A1A] leading-[20px] max-w-[185px] cursor-pointer" data-ai-alt="商品标题">汰渍洗衣液 强力洗衣粉2L装</div>
              <div className="h-[24px] bg-[#F7F8FC] rounded-[4px] px-[8px] mt-[6px] inline-flex items-center self-start max-w-full cursor-pointer active:bg-[#EBECEF] transition-colors" data-ai-alt="规格胶囊">
                <span className="text-[12px] text-[#505259] truncate">2L</span>
                <img src="https://img13.360buyimg.com/ling/jfs/t1/408037/3/9972/274/69c2de38F1d073ae4/0276020020e7c8fb.png" alt="arr" className="w-[8px] h-[8px] ml-[4px]" data-ai-alt="规格箭头" />
              </div>
              <div className="flex items-center space-x-[6px] mt-[8px]" data-ai-alt="营销标签行">
                <span className="text-[11px] text-[#B5691A]">15天价保</span>
              </div>
              <div className="flex items-end mt-[8px] relative" data-ai-alt="价格行">
                <span className="text-[12px] text-[#FF0F23] font-bold mb-[2px]">¥</span>
                <span className="text-[22px] text-[#FF0F23] font-extrabold leading-[22px]">{items[1].price}</span>
                <span className="text-[11px] text-[#FF0F23] ml-[4px] mb-[2px]">到手价</span>
                <span className="text-[12px] text-[#888B93] line-through ml-[4px] mb-[2px]">¥120</span>

                {/* Stepper */}
                <div className="absolute right-0 bottom-0 w-[60px] h-[24px] flex items-center justify-between border border-[#E5E5E5] rounded-[4px] overflow-hidden" data-ai-alt="数量编辑器">
                  <div onClick={() => updateItem(2, 'quantity', items[1].quantity - 1)} className="w-[16px] h-[24px] flex items-center justify-center cursor-pointer active:bg-[#F2F3F5]">
                    <div className={`w-[8px] h-[1.5px] rounded-[1px] ${items[1].quantity > 1 ? 'bg-[#1A1A1A]' : 'bg-[#C2C4CC]'}`}></div>
                  </div>
                  <div className="flex-1 h-[24px] bg-[#F7F8FC] mx-[1px] flex items-center justify-center">
                    <span className="text-[14px] text-[#1A1A1A] font-medium">{items[1].quantity}</span>
                  </div>
                  <div onClick={() => updateItem(2, 'quantity', items[1].quantity + 1)} className="w-[16px] h-[24px] flex items-center justify-center relative cursor-pointer active:bg-[#F2F3F5]">
                    <div className="w-[8px] h-[1.5px] bg-[#1A1A1A] rounded-[1px] absolute"></div>
                    <div className="w-[1.5px] h-[8px] bg-[#1A1A1A] rounded-[1px] absolute"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-[8px]" data-ai-alt="底部优惠说明">
                <span className="text-[12px] text-[#FF0F23]">已享满100减30等优惠合计30元</span>
                <img src="https://img13.360buyimg.com/ling/jfs/t1/408055/1/9683/225/69c2de38Fdcb77bc4/02760200208b8714.png" alt="arr" className="w-[8px] h-[8px] ml-[2px]" />
              </div>
            </div>
          </div>
        </div>

        {/* SC02: Store Card Casarte */}
        <div className="w-full bg-[#FFFFFF] rounded-[12px] p-[12px] flex flex-col space-y-[16px]" data-ai-alt="店铺共享父卡-卡萨帝">
          {/* Store Header */}
          <div className="flex items-center space-x-[8px]" data-ai-alt="店铺卡2头部">
            <div onClick={() => toggleStore('卡萨帝', !store2Checked)} className={`w-[16px] h-[16px] rounded-[8px] border flex items-center justify-center cursor-pointer transition-colors ${store2Checked ? 'bg-[#FF0F23] border-[#FF0F23]' : 'border-[#C2C4CC] bg-[#FFFFFF]'}`} data-ai-alt="复选框">
              {store2Checked && <i className="fa-solid fa-check text-white text-[10px] scale-75"></i>}
            </div>
            <div className="h-[14px] px-[4px] bg-[#FF0F23] rounded-[2px] flex items-center justify-center" data-ai-alt="自营红标">
              <span className="text-[10px] text-[#FFFFFF] leading-[10px]">自营</span>
            </div>
            <span className="text-[15px] font-medium text-[#1A1A1A] leading-[15px] cursor-pointer" data-ai-alt="店铺名">卡萨帝京东自营旗舰店</span>
            <img src="https://img13.360buyimg.com/ling/jfs/t1/408803/37/5727/423/69c2de39Faddbd496/0276030030bdba37.png" alt="arr" className="w-[12px] h-[12px] opacity-60" data-ai-alt="店铺头部右箭头" />
          </div>

          {/* Product Row 3 */}
          <div className="flex flex-row relative" data-ai-alt="商品条目3">
            <div onClick={() => updateItem(3, 'checked', !items[2].checked)} className={`w-[16px] h-[16px] rounded-[8px] border flex items-center justify-center mt-[44px] absolute left-0 cursor-pointer transition-colors ${items[2].checked ? 'bg-[#FF0F23] border-[#FF0F23]' : 'border-[#C2C4CC] bg-[#FFFFFF]'}`} data-ai-alt="商品复选框">
              {items[2].checked && <i className="fa-solid fa-check text-white text-[10px] scale-75"></i>}
            </div>
            <div className="w-[104px] h-[104px] bg-[#F7F8FC] rounded-[12px] ml-[28px] overflow-hidden flex items-center justify-center cursor-pointer" data-ai-alt="商品图底板">
              <img src="https://img30.360buyimg.com/img/jfs/t1/409970/1/9789/15149/69c782cfF7e5a57e6/02760d00d0810539.png" alt="prod3" className="w-full h-full object-cover mix-blend-multiply" data-ai-alt="商品图3" />
            </div>
            <div className="flex-1 ml-[12px] flex flex-col pt-[2px]">
              <div className="text-[14px] font-medium text-[#1A1A1A] leading-[20px] max-w-[185px] cursor-pointer" data-ai-alt="商品标题">卡萨帝 小蛮腰F11 洗碗机</div>
              <div className="h-[24px] bg-[#F7F8FC] rounded-[4px] px-[8px] mt-[6px] inline-flex items-center self-start max-w-full cursor-pointer active:bg-[#EBECEF] transition-colors" data-ai-alt="规格胶囊">
                <span className="text-[12px] text-[#505259] truncate">F11 14套 超窄45cm</span>
                <img src="https://img13.360buyimg.com/ling/jfs/t1/408037/3/9972/274/69c2de38F1d073ae4/0276020020e7c8fb.png" alt="arr" className="w-[8px] h-[8px] ml-[4px]" data-ai-alt="规格箭头" />
              </div>
              <div className="flex items-center space-x-[6px] mt-[8px] whitespace-nowrap" data-ai-alt="营销标签行">
                <div className="flex items-center shrink-0">
                  <span className="text-[11px] text-[#FF0F23]">满5000减200</span>
                  <img src="https://img13.360buyimg.com/ling/jfs/t1/408055/1/9683/225/69c2de38Fdcb77bc4/02760200208b8714.png" alt="arr" className="w-[8px] h-[8px] ml-[2px]" />
                </div>
                <div className="w-[1px] h-[8px] bg-[#E5E5E5] shrink-0"></div>
                <span className="text-[11px] text-[#00A66E] shrink-0">6期免息</span>
                <div className="w-[1px] h-[8px] bg-[#E5E5E5] shrink-0"></div>
                <span className="text-[11px] text-[#B5691A] shrink-0">15天价保</span>
              </div>
              <div className="mt-[8px] relative flex flex-col justify-end min-h-[44px] pb-[2px]" data-ai-alt="价格区">
                <div className="flex items-end">
                  <span className="text-[12px] text-[#FF0F23] font-bold mb-[2px] leading-none">¥</span>
                  <span className="text-[22px] text-[#FF0F23] font-extrabold leading-[22px]">{items[2].price}</span>
                  <span className="text-[11px] text-[#FF0F23] ml-[4px] mb-[2px] leading-none">到手价</span>
                </div>
                <div className="mt-[4px]">
                  <span className="text-[12px] text-[#888B93] line-through leading-[12px]" data-ai-alt="划线价">¥4990</span>
                </div>
                {/* Stepper */}
                <div className="absolute right-0 bottom-[2px] w-[60px] h-[24px] flex items-center justify-between border border-[#E5E5E5] rounded-[4px] overflow-hidden" data-ai-alt="数量编辑器">
                  <div onClick={() => updateItem(3, 'quantity', items[2].quantity - 1)} className="w-[16px] h-[24px] flex items-center justify-center cursor-pointer active:bg-[#F2F3F5]">
                    <div className={`w-[8px] h-[1.5px] rounded-[1px] ${items[2].quantity > 1 ? 'bg-[#1A1A1A]' : 'bg-[#C2C4CC]'}`}></div>
                  </div>
                  <div className="flex-1 h-[24px] bg-[#F7F8FC] mx-[1px] flex items-center justify-center">
                    <span className="text-[14px] text-[#1A1A1A] font-medium">{items[2].quantity}</span>
                  </div>
                  <div onClick={() => updateItem(3, 'quantity', items[2].quantity + 1)} className="w-[16px] h-[24px] flex items-center justify-center relative cursor-pointer active:bg-[#F2F3F5]">
                    <div className="w-[8px] h-[1.5px] bg-[#1A1A1A] rounded-[1px] absolute"></div>
                    <div className="w-[1.5px] h-[8px] bg-[#1A1A1A] rounded-[1px] absolute"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-[6px]" data-ai-alt="底部优惠说明">
                <span className="text-[12px] text-[#FF0F23]">已享官方直降等优惠合计490元</span>
                <img src="https://img13.360buyimg.com/ling/jfs/t1/408055/1/9683/225/69c2de38Fdcb77bc4/02760200208b8714.png" alt="arr" className="w-[8px] h-[8px] ml-[2px]" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Action Bar */}
      <div className="w-[375px] h-[52px] bg-[#FFFFFF] fixed bottom-[80px] left-1/2 ml-[-187.5px] flex items-center justify-between px-[16px] z-40 border-t border-[#0000000F]" data-ai-alt="吸底结算条">
        <div className="flex items-center space-x-[8px] cursor-pointer group" onClick={() => toggleAll(!allChecked)} data-ai-alt="全选组">
          <div className={`w-[20px] h-[20px] rounded-[10px] border flex items-center justify-center transition-colors ${allChecked ? 'bg-[#FF0F23] border-[#FF0F23]' : 'border-[#C2C4CC] bg-[#FFFFFF]'}`} data-ai-alt="全选复选框">
            {allChecked && <i className="fa-solid fa-check text-white text-[12px] scale-75"></i>}
          </div>
          <span className="text-[14px] text-[#1A1A1A] group-active:opacity-70" data-ai-alt="全选文案">全选</span>
        </div>
        <div className="flex items-center space-x-[12px]">
          <div className="flex items-end" data-ai-alt="总价组">
            <span className="text-[12px] text-[#FF0F23] font-bold mb-[2px]">¥</span>
            <span className="text-[20px] text-[#FF0F23] font-bold leading-[20px] transition-all duration-300">{totalPrice}</span>
          </div>
          <div className={`w-[104px] h-[40px] rounded-[20px] flex items-center justify-center transition-all ${totalCheckedCount > 0 ? 'bg-[#FF0F23] cursor-pointer shadow-[0_4px_8px_rgba(255,15,35,0.3)] active:scale-95' : 'bg-[#E5E5E5] text-[#C2C4CC] cursor-not-allowed'}`} data-ai-alt="去结算主按钮">
            <span className={`text-[15px] font-semibold ${totalCheckedCount > 0 ? 'text-[#FFFFFF]' : 'text-[#C2C4CC]'}`}>去结算{totalCheckedCount > 0 ? `(${totalCheckedCount})` : ''}</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="w-[375px] h-[80px] bg-[#FFFFFF] fixed bottom-0 left-1/2 ml-[-187.5px] flex items-center justify-between px-[12px] pt-[6px] pb-[28px] z-50 shadow-[0_-0.5px_0_0_#0000000A]" data-ai-alt="底部导航栏">
        <div className="flex flex-col items-center justify-center w-[60px] cursor-pointer active:scale-95 transition-transform" onClick={() => navigateTo('homeSpecial')} data-ai-alt="首页">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/404956/22/7027/2017/69ba97f2F8624facb/0276060060d95b3e.png" alt="home" className="w-[24px] h-[24px]" />
          <span className="text-[10px] text-[#171A26] mt-[2px]">首页</span>
        </div>
        <div className="flex flex-col items-center justify-center w-[60px] cursor-pointer active:scale-95 transition-transform" onClick={() => navigateTo('explore')} data-ai-alt="逛">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/404981/15/10903/1372/69ba97f3Fe03445bd/0276060060ef8375.png" alt="guang" className="w-[24px] h-[24px]" />
          <span className="text-[10px] text-[#171A26] mt-[2px]">逛</span>
        </div>
        <div className="flex flex-col items-center justify-center w-[60px] cursor-pointer active:scale-95 transition-transform" onClick={() => navigateTo('messages')} data-ai-alt="消息">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/405874/23/3592/2707/69ba97f3Ff4a8bad6/0276060060e0edf2.png" alt="msg" className="w-[24px] h-[24px]" />
          <span className="text-[10px] text-[#171A26] mt-[2px]">消息</span>
        </div>
        <div className="flex flex-col items-center justify-center w-[60px] cursor-pointer active:scale-95 transition-transform" data-ai-alt="购物车 激活">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/408012/11/8417/1297/69c2de3aF75091c3f/02760600605bb0f1.png" alt="cart" className="w-[24px] h-[24px]" />
          <span className="text-[10px] text-[#FF0F23] mt-[2px] font-medium">购物车</span>
        </div>
        <div className="flex flex-col items-center justify-center w-[60px] cursor-pointer active:scale-95 transition-transform" onClick={() => navigateTo('myHome')} data-ai-alt="我的">
          <img src="https://img13.360buyimg.com/ling/jfs/t1/403552/13/16194/3009/69ba97f3F9d74524c/0276060060c79fd8.png" alt="mine" className="w-[24px] h-[24px]" />
          <span className="text-[10px] text-[#171A26] mt-[2px]">我的</span>
        </div>
      </div>

    </div>
  );
}

export default CartPage;
