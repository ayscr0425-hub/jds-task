import React, { useState, useEffect } from 'react';

function AiChatModal({ visible, onClose, initialInput }) {
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    if (visible) {
      setInputText(initialInput || '');
    }
  }, [visible, initialInput]);

  if (!visible) return null;

  const suggestions = ['想吃清淡的', '想吃面', '想吃米饭', '想吃辣的', '想吃放纵餐'];

  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-end" data-ai-alt="AI对话弹窗" data-ai-changelog-id="ai_chat_modal" data-ai-changelog-title="AI猜你想吃对话层" data-ai-changelog-desc="提供文本与快捷建议输入">
      <div className="absolute inset-0 bg-black/45 cursor-pointer" onClick={onClose} data-ai-alt="背景遮罩"></div>
      <div className="w-full bg-[#F2F3F5] rounded-t-[16px] flex flex-col relative z-10 pb-[env(safe-area-inset-bottom)]" style={{ height: '70vh' }} data-ai-alt="弹窗主体">
        <div className="flex items-center justify-between px-[16px] h-[48px] bg-white rounded-t-[16px] shrink-0 border-b border-[#F2F3F5]" data-ai-alt="弹窗头部">
          <span className="text-[16px] font-semibold text-[#1A1A1A]">AI 猜你想吃</span>
          <div className="p-[4px] cursor-pointer active:scale-95 transition-transform" onClick={onClose}>
            <span className="text-[18px] text-[#888B94]">✕</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-[16px] flex flex-col gap-[16px]" data-ai-alt="对话列表">
          <div className="flex justify-start" data-ai-alt="助手消息">
            <div className="max-w-[80%] bg-white rounded-[12px] rounded-tl-[4px] p-[12px] shadow-sm">
              <span className="text-[14px] text-[#1A1A1A] leading-[20px]">想吃点什么？</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-[12px] shadow-[0_-2px_10px_rgba(0,0,0,0.05)] shrink-0" data-ai-alt="底部输入区">
          <div className="flex overflow-x-auto scrollbar-hide gap-[8px] mb-[12px]" data-ai-list="true" data-ai-clip="true">
            {suggestions.map((item, idx) => (
              <div key={idx} className="shrink-0 px-[12px] py-[6px] bg-[#F5F5F5] rounded-[16px] cursor-pointer active:scale-95 transition-transform">
                <span className="text-[12px] text-[#505259]">{item}</span>
              </div>
            ))}
          </div>
          <div className="w-full h-[40px] bg-[#F5F5F5] rounded-full flex items-center px-[16px]">
            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} className="flex-1 bg-transparent text-[14px] text-[#1A1A1A] outline-none placeholder-[#888B94]" placeholder="输入你想吃的..." />
            <div className="w-[28px] h-[28px] bg-[#FF0F23] rounded-full flex items-center justify-center cursor-pointer ml-[8px] active:scale-95 transition-transform">
              <span className="text-white text-[14px] leading-none mb-[2px]">↑</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiChatModal;