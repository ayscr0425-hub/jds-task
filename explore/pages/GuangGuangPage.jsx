import React from 'react';
import TopOverlay from '../components/TopOverlay';
import FloatingSidebar from '../components/FloatingSidebar';
import BottomContentOverlay from '../components/BottomContentOverlay';
import BottomFixedShell from '../components/BottomFixedShell';

function GuangGuangPage() {
  return (
    <div className="relative mx-auto w-[375px] h-[812px] bg-black overflow-hidden" data-ai-alt="页面根容器">
      {/* F0: 全屏视频背景层 */}
      <div className="absolute top-0 left-0 w-[375px] h-[732px]" data-ai-alt="全屏视频背景层">
        <img
          src="https://img13.360buyimg.com/ling/jfs/t1/409476/26/2845/1304683/69c2de1fF6d2431f3/02765dcb7051ef97.png"
          alt="视频背景"
          className="w-full h-full object-cover"
          data-ai-alt="主视频背景图"
        />
      </div>

      {/* 顶部 overlay 状态栏与频道导航 */}
      <TopOverlay />

      {/* 右侧悬浮互动边栏 */}
      <FloatingSidebar />

      {/* 底部渐变遮罩 */}
      <div
        className="absolute left-0 bottom-[80px] w-[375px] h-[120px] pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)' }}
        data-ai-alt="底部黑色渐变遮罩"
      ></div>

      {/* 底部内容信息区 */}
      <BottomContentOverlay />

      {/* 底部黑色壳层 (包含评论条、导航、Home Indicator) */}
      <BottomFixedShell />
    </div>
  );
}

export default GuangGuangPage;
