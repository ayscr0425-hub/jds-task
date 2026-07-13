import React from 'react';

function ProfileCard() {
  return (
    <div className="w-full bg-[#FFFFFF] rounded-[12px] pt-[12px] pb-[10px] flex flex-col" data-ai-alt="身份信息主卡">
      {/* 上半部：头像、昵称、权益卡 */}
      <div className="relative flex justify-between pl-[12px] pr-[12px] min-h-[64px]" data-ai-alt="头像与权益区">
        {/* 左侧头像区 */}
        <div className="flex items-start gap-[12px] relative" data-ai-alt="个人信息区">
          <div className="relative w-[64px] h-[64px]" data-ai-alt="头像容器">
            <img
              src="https://l-api.jd.com/relay-aigc/design/image/prompt/A%20beautiful%20young%20caucasian%20woman%20smiling%20brightly%20with%20blonde%20hair%20looking%20at%20camera?width=512&height=512"
              className="w-[64px] h-[64px] rounded-full object-cover border-[2px] border-[#FFF]"
              data-ai-alt="头像图片"
              alt="头像"
            />
            <img
              src="https://img13.360buyimg.com/ling/jfs/t1/405783/19/4828/7036/69ba9883F19ee6860/027608f091882292.png"
              className="absolute top-[-10px] right-[-6px] w-[46px] h-[46px] pointer-events-none"
              data-ai-alt="皇冠装饰"
              alt="皇冠"
            />
            <div className="absolute bottom-[-8px] left-[50%] translate-x-[-50%] flex h-[16px] rounded-[8px] border border-[#E9C394] overflow-hidden whitespace-nowrap" data-ai-alt="PLUS双标签">
              <div className="bg-[#3B2C21] px-[4px] flex items-center justify-center">
                <span className="text-[9px] text-[#E9C394] font-bold">PLUS</span>
              </div>
              <div className="bg-[#FFFFFF] px-[4px] flex items-center justify-center">
                <span className="text-[9px] text-[#3B2C21] font-bold">7年</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col pt-[8px] gap-[4px]" data-ai-alt="名字与身份">
            <span className="text-[18px] font-bold text-[#1A1A1A] leading-[19px]" data-ai-alt="昵称">西贝柳斯的Joy</span>
            <div className="flex items-center gap-[4px]" data-ai-alt="钻石用户标签">
              <img src="https://img13.360buyimg.com/ling/jfs/t1/407502/40/10816/1424/69c2178aFe0f4d7c8/027602e02667b370.png" className="w-[11px] h-[9px]" alt="钻石" />
              <span className="text-[12px] text-[#774AFF] font-medium leading-[14px]" data-ai-alt="钻石文案">钻石用户</span>
            </div>
          </div>
        </div>

        {/* 右上异形 PLUS 权益卡 */}
        <div
          className="absolute right-0 top-[-11px] w-[140px] h-[60px] flex flex-col justify-center pl-[16px] overflow-hidden"
          style={{
            borderRadius: '12px 0 0 24px',
            background: 'linear-gradient(135deg, #4A3625 0%, #110E0C 100%)'
          }}
          data-ai-alt="PLUS权益卡容器"
          data-ai-clip="true"
        >
          <img src="https://img13.360buyimg.com/ling/jfs/t1/405988/19/15079/5343/69c12698Fecc68a92/0276074046b7fcb9.png" className="absolute left-[30px] top-[0] w-[29px] h-[17px] opacity-30" alt="bgdecor" />
          <img src="https://img13.360buyimg.com/ling/jfs/t1/405314/1/16138/1223/69c12698F0ee36c0b/02760530436904ee.png" className="absolute left-[10px] top-[3px] w-[20px] h-[16px] opacity-50" alt="bgdecor2" />
          <img src="https://img13.360buyimg.com/ling/jfs/t1/405374/14/7943/27006/69ba9881Fea977d48/02760800a840292c.png" className="absolute right-0 top-0 w-[32px] h-[42px]" alt="奖杯" />

          <div className="flex items-center gap-[2px] relative z-10" data-ai-alt="PLUS标题行">
            <span className="text-[14px] font-bold text-[#FEE6C5] italic" data-ai-alt="PLUS会员">PLUS会员</span>
            <img src="https://img13.360buyimg.com/ling/jfs/t1/404420/23/13117/1079/69ba9881F9b4e6152/027602302c7e4314.png" className="w-[8px] h-[10px] mt-[2px]" alt="箭头" />
          </div>
          <span className="text-[11px] text-[#F6D6C2] relative z-10 mt-[2px]" data-ai-alt="抢原价飞天茅台">抢原价飞天茅台</span>
        </div>
      </div>

      {/* 中部：资产统计 6 列 */}
      <div className="flex items-center w-full mt-[24px] px-[8px] mb-[16px]" data-ai-alt="资产统计6列" data-ai-list="true">
        {[
          { num: '32', label: '优惠券' },
          { num: '729', label: '京豆' },
          { num: '16', label: '京东E卡' },
          { num: '¥135', label: '购物卡' },
          { num: '¥88.8', label: '红包' }
        ].map((item, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center gap-[4px]" data-ai-alt={`资产列-${item.label}`}>
            <span className="text-[15px] font-bold text-[#1A1A1A] leading-[18px]" data-ai-alt="数字">{item.num}</span>
            <span className="text-[12px] text-[#505259]" data-ai-alt="标签">{item.label}</span>
          </div>
        ))}
        <div className="w-[1px] h-[24px] bg-[#E5E5E5] mx-[4px]" data-ai-alt="分割线" />
        <div className="w-[48px] flex flex-col items-center gap-[4px]" data-ai-alt="更多操作列">
          <img src="https://img10.360buyimg.com/img/jfs/t1/408944/3/12709/787/69c69a04F7743c131/027601c01c446827.png" className="w-[16px] h-[16px]" />
          <span className="text-[12px] text-[#505259]" data-ai-alt="更多文字">更多</span>
        </div>
      </div>

      {/* 底部：省省卡券条 */}
      <div className="px-[10px] w-full" data-ai-alt="券条容器">
        <div className="w-full h-[36px] bg-[#FFF0F4] rounded-[8px] flex items-center justify-between px-[8px]" data-ai-alt="券条内部">
          <div className="flex items-center" data-ai-alt="券条左侧内容">
            <img src="https://img12.360buyimg.com/img/jfs/t1/410576/25/4580/2430/69c6ab6aF726a5b66/0276040040ebea59.png" className="w-[28px] h-[28px] object-cover rounded-[4px]" alt="省省卡" data-ai-alt="省省卡icon" />
            <span className="text-[13px] font-bold text-[#FF0F23] ml-[4px] mr-[6px]" data-ai-alt="省省卡标题">省省卡</span>
            <div className="w-[1px] h-[10px] bg-[#1A1A1A] opacity-30 mr-[6px]" data-ai-alt="分割线" />
            <span className="text-[12px] text-[#1A1A1A]" data-ai-alt="券条描述">20元秒送专享券 单单抵扣</span>
          </div>
          <div
            className="w-[49px] h-[24px] rounded-[4px] flex items-center justify-center"
            style={{ background: 'linear-gradient(90deg, #FF475D 0%, #FF0F23 100%)' }}
            data-ai-alt="去使用按钮"
          >
            <span className="text-[11px] text-[#FFFFFF]">去使用</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProfileCard;
