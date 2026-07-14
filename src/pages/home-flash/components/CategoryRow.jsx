import React from 'react';

function CategoryRow() {
  const categories = [
    { name: '美食推荐', iconUrl: 'https://l-api.jd.com/relay-aigc/design/image/prompt/a 3d icon of delicious food like burger and drink, colorful, white background?width=128&height=128', badge: '推荐', badgeBg: 'bg-[#FF6600]', badgeColor: 'text-white' },
    { name: '晚餐', iconUrl: 'https://l-api.jd.com/relay-aigc/design/image/prompt/a 3d icon of a covered dinner dish, colorful, white background?width=128&height=128' },
    { name: '品质正餐', iconUrl: 'https://l-api.jd.com/relay-aigc/design/image/prompt/a 3d icon of a gourmet dish with meat and vegetables, colorful, white background?width=128&height=128' },
    { name: '咖啡', iconUrl: 'https://l-api.jd.com/relay-aigc/design/image/prompt/a 3d icon of a cup of coffee, colorful, white background?width=128&height=128' },
    { name: '奶茶果汁', iconUrl: 'https://l-api.jd.com/relay-aigc/design/image/prompt/a 3d icon of a bubble tea and juice drink, colorful, white background?width=128&height=128' },
    { name: '快餐', iconUrl: 'https://l-api.jd.com/relay-aigc/design/image/prompt/a 3d icon of a fast food meal box, colorful, white background?width=128&height=128' }
  ];

  return (
    <div className="w-full bg-[#7B4E32] pt-[4px] pb-[16px] px-[10px]" data-ai-alt="分类图标行">
      <div className="flex w-full gap-[2px] overflow-x-auto scrollbar-hide" data-ai-list="true">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col items-center gap-[4px] min-w-[60px] flex-shrink-0 relative" data-ai-alt="分类项">
            <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center relative bg-white overflow-hidden">
              {cat.badge && (
                <span className={`absolute top-[2px] left-[2px] ${cat.badgeBg} ${cat.badgeColor} text-[9px] px-[4px] py-[1px] rounded-br-[6px] z-10 font-medium`}>{cat.badge}</span>
              )}
              <img src={cat.iconUrl} className="w-[42px] h-[42px] object-contain" alt={cat.name} />
            </div>
            <span className="text-[11px] text-white mt-[2px] whitespace-nowrap">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryRow;