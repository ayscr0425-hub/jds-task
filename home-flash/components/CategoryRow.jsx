import React from 'react';

function CategoryRow() {
  const categories = [
    { name: '自营秒送', iconUrl: 'https://l-api.jd.com/relay-aigc/design/image/prompt/a 3d icon of a red shopping bag with fresh food, colorful, white background?width=128&height=128', badge: '自营', badgeBg: 'bg-[#FF3333]', badgeColor: 'text-white' },
    { name: '外卖', iconUrl: 'https://l-api.jd.com/relay-aigc/design/image/prompt/a 3d icon of a hot fast food delivery box, colorful, white background?width=128&height=128', badge: '百亿补贴', badgeBg: 'bg-[#FF0400]', badgeColor: 'text-white', topBadge: true },
    { name: '超市秒送', iconUrl: 'https://l-api.jd.com/relay-aigc/design/image/prompt/a 3d icon of a shopping cart full of supermarket groceries, colorful, white background?width=128&height=128', badge: '24h', badgeBg: 'bg-[#2B85FF]', badgeColor: 'text-white', topBadge: true },
    { name: '咖啡奶茶', iconUrl: 'https://l-api.jd.com/relay-aigc/design/image/prompt/a 3d icon of a cup of coffee and milk tea, colorful, white background?width=128&height=128' },
    { name: '买药秒送', iconUrl: 'https://l-api.jd.com/relay-aigc/design/image/prompt/a 3d icon of a green medicine box with a cross, white background?width=128&height=128' }
  ];

  return (
    <div className="w-[375px] h-[74px] bg-[#FFFFFF] flex items-center overflow-hidden mt-[4px]" data-ai-alt="分类图标行">
      <div className="flex w-full pl-[10px]" data-ai-list="true">
        {categories.map((cat, idx) => (
          <div key={idx} className="w-[64px] flex flex-col items-center gap-[4px] relative" data-ai-alt="分类项">
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center relative bg-white">
              {cat.badge && !cat.topBadge && (
                <span className={`absolute -bottom-1 ${cat.badgeBg} ${cat.badgeColor} text-[8px] px-1 rounded-[4px] z-10 border border-white whitespace-nowrap`}>{cat.badge}</span>
              )}
              {cat.badge && cat.topBadge && (
                <span className={`absolute -top-1.5 whitespace-nowrap ${cat.badgeBg} ${cat.badgeColor} text-[8px] px-[4px] rounded-full z-10 border border-white shadow-sm`}>{cat.badge}</span>
              )}
              <img src={cat.iconUrl} className="w-[36px] h-[36px] object-contain" alt={cat.name} />
            </div>
            <span className="text-[11px] text-[#1A1A1A] mt-1">{cat.name}</span>
          </div>
        ))}
        {/* Partial Item */}
        <div className="w-[35px] flex flex-col items-start gap-[4px] overflow-hidden pl-2" data-ai-alt="半露出分类项">
          <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center -ml-1 bg-white">
            <img src="https://l-api.jd.com/relay-aigc/design/image/prompt/a 3d icon of a blue airplane flying over a suitcase, colorful, white background?width=128&height=128" className="w-[36px] h-[36px] object-contain" alt="京东旅行" />
          </div>
          <span className="text-[11px] text-[#1A1A1A] whitespace-nowrap mt-1">京东旅</span>
        </div>
      </div>
    </div>
  );
}

export default CategoryRow;
