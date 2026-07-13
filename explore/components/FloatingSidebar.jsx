import React, { useState } from 'react';

function FloatingSidebar() {
  const [isFollowed, setIsFollowed] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(54000);
  const [isCollected, setIsCollected] = useState(false);
  const [collectCount, setCollectCount] = useState(1363);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleCollect = () => {
    setIsCollected(!isCollected);
    setCollectCount(prev => isCollected ? prev - 1 : prev + 1);
  };

  const formatCount = (count) => count >= 10000 ? (count / 10000).toFixed(1) + '万' : count;

  return (
    <div className="absolute right-[10px] top-[429px] w-[62px] flex flex-col items-center z-20" data-ai-alt="右侧悬浮互动边栏">
      {/* 头像组 */}
      <div className="relative mb-[24px] flex flex-col items-center cursor-pointer group" onClick={() => setIsFollowed(!isFollowed)} data-ai-alt="侧边栏头像组">
        <div className="w-[48px] h-[48px] rounded-full border border-white/50 overflow-hidden bg-[#E5E5E5] transition-transform group-active:scale-95" data-ai-alt="头像外框">
          <img src="https://l-api.jd.com/relay-aigc/design/image/prompt/colorful%20illustration%20cartoon%20avatar?width=512&height=512" className="w-full h-full object-cover" alt="Avatar" data-ai-alt="头像内容" />
        </div>
        <div className={`absolute -bottom-[10px] w-[20px] h-[20px] rounded-full flex items-center justify-center border-[1.5px] border-black/20 transition-all duration-300 ${isFollowed ? 'bg-[#1A1A1A] scale-0 opacity-0' : 'bg-[#FF0F23] scale-100 opacity-100'}`} data-ai-alt="关注按钮容器">
           <i className="fas fa-plus text-white text-[10px]" data-ai-alt="加号图标"></i>
        </div>
      </div>

      {/* 互动操作列表 */}
      <div className="flex flex-col items-center gap-[20px] w-full" data-ai-list="true" data-ai-alt="侧边互动列表">
        {/* 点赞 */}
        <div className="flex flex-col items-center gap-[2px] cursor-pointer group" onClick={handleLike} data-ai-alt="点赞项">
          <div className="w-[48px] h-[40px] flex items-center justify-center group-active:scale-90 transition-transform" data-ai-alt="图标容器">
            <i className={`fas fa-heart text-[32px] drop-shadow-md transition-colors duration-300 ${isLiked ? 'text-[#FF0F23]' : 'text-white'}`} data-ai-alt="点赞图标"></i>
          </div>
          <span className={`text-[11px] font-medium drop-shadow-md transition-colors ${isLiked ? 'text-[#FF0F23]' : 'text-white'}`} data-ai-alt="点赞数">{formatCount(likeCount)}</span>
        </div>

        {/* 评论 */}
        <div className="flex flex-col items-center gap-[2px] cursor-pointer group" data-ai-alt="评论项">
          <div className="w-[48px] h-[40px] flex items-center justify-center group-active:scale-90 transition-transform" data-ai-alt="图标容器">
            <i className="fas fa-ellipsis-h text-white text-[32px] drop-shadow-md" data-ai-alt="评论三点"></i>
          </div>
          <span className="text-white text-[11px] font-medium drop-shadow-md" data-ai-alt="评论数">508</span>
        </div>

        {/* 收藏 (新增) */}
        <div className="flex flex-col items-center gap-[2px] cursor-pointer group" onClick={handleCollect} data-ai-alt="收藏项">
          <div className="w-[48px] h-[40px] flex items-center justify-center group-active:scale-90 transition-transform" data-ai-alt="图标容器">
            <i className={`fas fa-star text-[32px] drop-shadow-md transition-colors duration-300 ${isCollected ? 'text-[#FFCC00]' : 'text-white'}`} data-ai-alt="收藏图标"></i>
          </div>
          <span className={`text-[11px] font-medium drop-shadow-md transition-colors ${isCollected ? 'text-[#FFCC00]' : 'text-white'}`} data-ai-alt="收藏数">{formatCount(collectCount)}</span>
        </div>

        {/* 转发 */}
        <div className="flex flex-col items-center gap-[2px] cursor-pointer group" data-ai-alt="转发项">
          <div className="w-[48px] h-[40px] flex items-center justify-center group-active:scale-90 transition-transform" data-ai-alt="图标容器">
            <i className="fas fa-location-arrow text-white text-[32px] drop-shadow-md transform rotate-45" data-ai-alt="转发图标"></i>
          </div>
          <span className="text-white text-[11px] font-medium drop-shadow-md" data-ai-alt="转发数">324</span>
        </div>
      </div>
    </div>
  );
}

export default FloatingSidebar;
