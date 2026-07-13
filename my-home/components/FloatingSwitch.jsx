import React from 'react';

function FloatingSwitch() {
  return (
    <div
      className="absolute bottom-[100px] left-1/2 -translate-x-1/2 w-[160px] h-[26px] rounded-[4px] flex items-center px-[8px] justify-between border-[0.5px] border-[#FFFFFF33] z-20 shadow-sm"
      style={{ background: 'rgba(0,0,0,0.65)' }}
      data-ai-alt="悬浮切换胶囊"
    >
      <div className="flex items-center gap-[4px]" data-ai-alt="左侧文本与tag">
        <span className="text-[12px] text-[#FFFFFF] font-medium">潮流好货</span>
        <img src="https://img13.360buyimg.com/ling/jfs/t1/407412/20/8543/4869/69c12699F969ac3e8/02760880380d8ef1.png" className="w-[34px] h-[14px]" alt="领红包" data-ai-alt="领红包红tag" />
      </div>
      <div className="w-[1px] h-[10px] bg-[#FFFFFF4D] mx-[2px]" data-ai-alt="分割线" />
      <div className="flex items-center gap-[2px]" data-ai-alt="右侧圈子与跳转">
        <span className="text-[12px] text-[#FFFFFF] font-medium">圈子</span>
        <img src="https://img13.360buyimg.com/ling/jfs/t1/405980/32/10125/388/69c26d12Fc3515a98/027603803835c08d.png" className="w-[14px] h-[14px]" alt="跳转" data-ai-alt="跳转icon" />
      </div>
    </div>
  );
}

export default FloatingSwitch;
