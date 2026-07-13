import React, { useState } from 'react';

const CATEGORY_POOL = [
  { id: 1, name: '火锅', img: 'https://l-api.jd.com/relay-aigc/design/image/prompt/hot_pot_with_spicy_broth_and_vegetables?width=512&height=512' },
  { id: 2, name: '烧烤', img: 'https://l-api.jd.com/relay-aigc/design/image/prompt/delicious_bbq_skewers_on_grill?width=512&height=512' },
  { id: 3, name: '小龙虾', img: 'https://l-api.jd.com/relay-aigc/design/image/prompt/spicy_crayfish_in_a_bowl?width=512&height=512' },
  { id: 4, name: '椰子鸡', img: 'https://l-api.jd.com/relay-aigc/design/image/prompt/coconut_chicken_soup_in_pot?width=512&height=512' },
  { id: 5, name: '小笼包', img: 'https://l-api.jd.com/relay-aigc/design/image/prompt/steamed_xiaolongbao_in_bamboo_basket?width=512&height=512' },
  { id: 6, name: '麻辣烫', img: 'https://l-api.jd.com/relay-aigc/design/image/prompt/spicy_malatang_bowl?width=512&height=512' }
];

function AiGuessFoodCard({ onOpenChat }) {
  const [loading, setLoading] = useState(false);
  const [batch, setBatch] = useState(0);
  const [noMore, setNoMore] = useState(false);

  const getCategories = () => {
    const start = batch * 3;
    if (start >= CATEGORY_POOL.length) return [];
    return CATEGORY_POOL.slice(start, start + 3);
  };

  const categories = getCategories();

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if ((batch + 1) * 3 >= CATEGORY_POOL.length) {
        setNoMore(true);
      } else {
        setBatch(batch + 1);
      }
    }, 800);
  };

  return (
    <div className="w-[359px] bg-gradient-to-r from-[#FFF5F6] to-[#FFFFFF] rounded-[12px] p-[12px] mx-[8px] my-[8px] shadow-sm relative overflow-hidden" data-ai-alt="AI猜你想吃卡片" data-knowledge-citationId="kg://2056317797395558401/100000001/2057465721820352513/1#joyspace_l7zm6aJu4r1fOzF3pGw9_chunk_6_v202605132200" data-ai-changelog-id="ai_guess_food" data-ai-changelog-title="AI猜你想吃模块" data-ai-changelog-desc="首页推荐上方展示外卖品类推荐、换一批、AI对话入口">
      <div className="flex justify-between items-center mb-[10px]" data-ai-alt="卡片头部">
        <div className="flex items-center gap-[6px]">
          <span className="text-[16px] font-bold text-[#1A1A1A]" data-ai-alt="主标题">吃啥·猜你想吃</span>
          <div className="px-[4px] py-[1px] bg-[#FF0F23] rounded-[4px] flex items-center justify-center rounded-bl-none" data-ai-alt="营销角标">
            <span className="text-[10px] text-white font-medium">可领券</span>
          </div>
        </div>
        {!loading && (
          <div className="flex items-center gap-[12px]" data-ai-alt="操作区">
            <div className="flex items-center gap-[4px] cursor-pointer active:scale-95 transition-transform" onClick={handleRefresh} data-ai-changelog-id="ai_guess_refresh" data-ai-changelog-title="换一批" data-ai-changelog-desc="点击重新生成推荐品类">
              <img src="https://img13.360buyimg.com/ling/jfs/t1/406676/3/11833/218/69c0b657F6f671c6c/0276040040f6e0b7.png" className="w-[12px] h-[12px] opacity-60" alt="换一批" />
              <span className="text-[12px] text-[#505259]">换一批</span>
            </div>
            <div className="w-[24px] h-[24px] rounded-full bg-[#FFEFF1] flex items-center justify-center cursor-pointer active:scale-95 transition-transform" onClick={() => onOpenChat()} data-ai-changelog-id="ai_guess_chat" data-ai-changelog-title="AI对话入口" data-ai-changelog-desc="点击唤起AI购对话弹窗">
              <span className="text-[12px] leading-none">💬</span>
            </div>
          </div>
        )}
      </div>

      <div className="w-full h-[96px] relative" data-ai-alt="品类列表区">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center" data-ai-alt="加载中">
            <div className="w-[24px] h-[24px] border-[2px] border-[#FF0F23] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : noMore ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#F9F9F9] rounded-[8px]" data-ai-alt="无更多提示">
            <span className="text-[14px] text-[#505259] mb-[8px]">没有更多品类啦</span>
            <div className="px-[12px] py-[6px] bg-[#FF0F23] text-white text-[12px] rounded-full cursor-pointer active:scale-95 transition-transform" onClick={() => onOpenChat()}>
              想吃什么？请告诉我您的需求
            </div>
          </div>
        ) : (
          <div className="flex gap-[8px] w-full" data-ai-list="true">
            {categories.map(cat => (
              <div key={cat.id} className="flex-1 h-[96px] bg-white rounded-[8px] overflow-hidden flex flex-col shadow-[0_2px_4px_rgba(0,0,0,0.03)] cursor-pointer active:scale-95 transition-transform" onClick={() => onOpenChat(`我想下单${cat.name}外卖`)} data-ai-alt={`品类-${cat.name}`} data-ai-changelog-id="ai_guess_category_click" data-ai-changelog-title="品类快捷点击" data-ai-changelog-desc="点击品类自动带入AI购输入框">
                <div className="w-full h-[66px] bg-[#F5F5F5]">
                  <img src={cat.img} className="w-full h-full object-cover" alt={cat.name} />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-[13px] font-medium text-[#1A1A1A]">{cat.name}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AiGuessFoodCard;