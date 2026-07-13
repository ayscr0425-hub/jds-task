import React from 'react';

function TripleCard() {
  return (
    <div
      className="w-full h-[188px] rounded-[12px] p-[10px] flex"
      style={{ background: 'linear-gradient(180deg, #FDFDFD 0%, #FFFFFF 100%)' }}
      data-ai-alt="三合一卡共享父卡"
    >
      {/* 钱包列 */}
      <div className="flex-1 flex flex-col relative pr-[6px] overflow-hidden" data-ai-alt="钱包列">
        <div className="flex items-center gap-[2px] mb-[2px]" data-ai-alt="列标题行">
          <span className="text-[14px] font-bold text-[#1A1A1A] shrink-0" data-ai-alt="主标题">钱包</span>
          <img src="https://img13.360buyimg.com/ling/jfs/t1/407979/25/6073/376/69c12693Ff1070a78/0276020020cb45ed.png" className="w-[8px] h-[8px] shrink-0" alt="arrow" />
        </div>
        <div className="text-[11px] text-[#888B94] mb-[4px] truncate w-full" data-ai-alt="副标题">余额购物抵<span className="text-[#FF0F23]">23.4元</span></div>

        <div className="flex flex-col gap-[4px]" data-ai-alt="钱包明细行" data-ai-list="true">
          {/* row 1 */}
          <div className="flex flex-col relative pr-[12px]" data-ai-alt="白条行">
            <div className="flex items-center gap-[4px] overflow-hidden">
              <span className="text-[13px] font-bold text-[#1A1A1A] truncate" data-ai-alt="标题">距还款8天</span>
              <div className="h-[14px] px-[4px] rounded-[4px] bg-[#FF0F23] flex items-center justify-center shrink-0" data-ai-alt="待还Tag">
                <span className="text-[10px] text-[#FFF] whitespace-nowrap">待还</span>
              </div>
            </div>
            <span className="text-[12px] text-[#888B94] mt-[2px] truncate" data-ai-alt="副标">白条</span>
            <img src="https://img13.360buyimg.com/ling/jfs/t1/409072/1/102/610/69c12694Ff5b0b32a/0276020020653729.png" className="absolute right-0 top-1/2 translate-y-[-50%] w-[8px] h-[8px] shrink-0" alt="arrow" />
          </div>
          {/* row 2 */}
          <div className="flex flex-col relative pr-[12px]" data-ai-alt="金条行">
            <span className="text-[13px] font-bold text-[#1A1A1A] truncate" data-ai-alt="标题">9000</span>
            <span className="text-[12px] text-[#888B94] mt-[2px] truncate" data-ai-alt="副标">金条借款</span>
            <img src="https://img13.360buyimg.com/ling/jfs/t1/409072/1/102/610/69c12694Ff5b0b32a/0276020020653729.png" className="absolute right-0 top-1/2 translate-y-[-50%] w-[8px] h-[8px] shrink-0" alt="arrow" />
          </div>
          {/* row 3 */}
          <div className="flex flex-col relative pr-[12px]" data-ai-alt="财富行">
            <span className="text-[13px] font-bold text-[#1A1A1A] truncate" data-ai-alt="标题">领4笔钱</span>
            <span className="text-[12px] text-[#888B94] mt-[2px] truncate" data-ai-alt="副标">京东财富</span>
            <img src="https://img13.360buyimg.com/ling/jfs/t1/409072/1/102/610/69c12694Ff5b0b32a/0276020020653729.png" className="absolute right-0 top-1/2 translate-y-[-50%] w-[8px] h-[8px] shrink-0" alt="arrow" />
          </div>
        </div>
        <div className="absolute right-0 top-[10px] bottom-[10px] w-[0.5px] bg-[#0000000A]" data-ai-alt="右侧分割线" />
      </div>

      {/* 生活列 */}
      <div className="flex-1 flex flex-col relative px-[8px] overflow-hidden" data-ai-alt="生活列">
        <div className="flex items-center gap-[2px] mb-[4px]" data-ai-alt="列标题行">
          <span className="text-[14px] font-bold text-[#1A1A1A] shrink-0" data-ai-alt="主标题">生活</span>
          <img src="https://img13.360buyimg.com/ling/jfs/t1/407979/25/6073/376/69c12693Ff1070a78/0276020020cb45ed.png" className="w-[8px] h-[8px] shrink-0" alt="arrow" />
        </div>
        <div className="text-[11px] text-[#888B94] mb-[4px] truncate w-full" data-ai-alt="副标题">您有<span className="text-[#FF0F23]">30元</span>保洁优惠</div>
        <img src="https://img13.360buyimg.com/ling/jfs/t1/403423/17/19066/61742/69ba987dF82cc1faf/02761800e08eb49c.png" className="w-[96px] h-[56px] object-cover mb-[8px] mx-auto shrink-0" alt="生活主图" data-ai-alt="生活列主图" />
        <div className="flex flex-col gap-[12px] pl-[4px]" data-ai-alt="功能行组">
          <div className="flex items-center gap-[6px] overflow-hidden" data-ai-alt="快递">
            <img src="https://img13.360buyimg.com/ling/jfs/t1/409070/27/4015/1985/69c2de42F856edaaf/0276040040a217f6.png" className="w-[16px] h-[16px] shrink-0" alt="快递" />
            <span className="text-[12px] font-medium text-[#1A1A1A] truncate">京东快递</span>
          </div>
          <div className="flex items-center gap-[6px] overflow-hidden" data-ai-alt="问医生">
            <img src="https://img13.360buyimg.com/ling/jfs/t1/405637/13/11286/1988/69c2178bF9cfbb560/027603903dc2b133.png" className="w-[14px] h-[15px] shrink-0" alt="问医生" />
            <span className="text-[12px] font-medium text-[#1A1A1A] truncate">问医生</span>
          </div>
        </div>
        <div className="absolute right-0 top-[10px] bottom-[10px] w-[0.5px] bg-[#0000000A]" data-ai-alt="右侧分割线" />
      </div>

      {/* 互动游戏列 */}
      <div className="flex-1 flex flex-col relative pl-[10px] overflow-hidden" data-ai-alt="互动游戏列">
        <div className="flex items-center gap-[2px] mb-[4px]" data-ai-alt="列标题行">
          <span className="text-[14px] font-bold text-[#1A1A1A] shrink-0" data-ai-alt="主标题">互动游戏</span>
          <img src="https://img13.360buyimg.com/ling/jfs/t1/407979/25/6073/376/69c12693Ff1070a78/0276020020cb45ed.png" className="w-[8px] h-[8px] shrink-0" alt="arrow" />
        </div>
        <div className="text-[11px] text-[#888B94] mb-[4px] truncate w-full" data-ai-alt="副标题">最低可领<span className="text-[#FF0F23]">30</span>京豆</div>
        <img src="https://img13.360buyimg.com/ling/jfs/t1/408687/28/1457/46958/69c12694F8119e6d9/02761800e007e0c0.png" className="w-[96px] h-[56px] object-cover mb-[8px] mx-auto shrink-0" alt="互动游戏主图" data-ai-alt="游戏主图" />
        <div className="flex flex-col gap-[12px] pl-[4px]" data-ai-alt="功能行组">
          <div className="flex items-center gap-[6px] overflow-hidden" data-ai-alt="签到">
            <img src="https://img13.360buyimg.com/ling/jfs/t1/405321/30/20572/2592/69c2178bF9cdbad47/027603f040e43b52.png" className="w-[16px] h-[16px] shrink-0" alt="签到" />
            <span className="text-[12px] font-medium text-[#1A1A1A] truncate">签到领金豆</span>
          </div>
          <div className="flex items-center gap-[6px] overflow-hidden" data-ai-alt="玩一玩">
            {/* 玩一玩由两个小图标组合，这里用 css 拼凑近似感或使用任意单占位图，由于要求真实结构，还原左右两小图 */}
            <div className="w-[16px] h-[16px] flex justify-center items-center gap-[1px] bg-[#F2EBFF] rounded-[4px] shrink-0">
              <img src="https://img13.360buyimg.com/ling/jfs/t1/408759/9/6280/168/69c2de41F8600eeeb/027600f00f987b47.png" className="w-[4px] h-[4px] shrink-0" alt="icon1" />
              <img src="https://img13.360buyimg.com/ling/jfs/t1/406353/15/20000/252/69c2de42F7ffe4856/027600f00f8016f3.png" className="w-[4px] h-[4px] shrink-0" alt="icon2" />
            </div>
            <span className="text-[12px] font-medium text-[#1A1A1A] truncate">玩一玩</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripleCard;
