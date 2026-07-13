import React from 'react';

function SearchBar() {
  return (
    <div className="w-full h-[38px] bg-white border border-[#FF0F23] rounded-[8px] flex items-center px-[12px] justify-between shadow-sm" data-ai-alt="搜索框">
       <div className="flex items-center gap-[8px]">
          <img 
             src="https://img13.360buyimg.com/ling/jfs/t1/401938/9/20636/1027/69ba8f0fF69d56bf7/02760500507decf0.png" 
             className="w-[18px] h-[18px]"
             alt="search"
             data-ai-alt="搜索图标"
          />
          <span className="text-[14px] text-[#333333]" data-ai-alt="搜索词">华为Mate70</span>
          <div className="bg-[#EAF1FF] text-[#4E7BFF] text-[10px] px-[4px] py-[1px] rounded-[2px]" data-ai-alt="新品小标">新品</div>
       </div>
       <div className="flex items-center gap-[12px]">
          <img 
             src="https://img13.360buyimg.com/ling/jfs/t1/404649/8/10160/2122/69ba8f10F8a37fd90/027605005005de39.png" 
             className="w-[18px] h-[18px]"
             alt="camera"
             data-ai-alt="相机图标"
          />
          <div className="w-[1px] h-[14px] bg-[#000000] opacity-10" data-ai-alt="分隔线"></div>
          <span className="text-[15px] text-[#1A1A1A] font-semibold" data-ai-alt="搜索按钮">搜索</span>
       </div>
    </div>
  );
}

export default SearchBar;
