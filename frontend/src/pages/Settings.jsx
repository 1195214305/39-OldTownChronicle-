import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGameStore } from '../utils/store'

export default function Settings() {
  const navigate = useNavigate()
  const { qwenApiKey, setQwenApiKey, resetGame } = useGameStore()
  const [apiKey, setApiKey] = useState(qwenApiKey)
  const [showResetConfirm, setShowResetConfirm] = useState(false)

  const handleSave = () => {
    setQwenApiKey(apiKey)
    alert('设置已保存')
  }

  const handleReset = () => {
    resetGame()
    setShowResetConfirm(false)
    alert('游戏进度已重置')
    navigate('/')
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="newspaper-sheet p-8">
          <div className="mb-8">
            <button
              onClick={() => navigate('/')}
              className="text-neutral-600 hover:text-red-900 transition-colors font-serif"
            >
              ← 返回主页
            </button>
          </div>

          <h1 className="text-4xl font-black font-serif mb-8 text-center border-b-2 border-neutral-800 pb-4">
            设置
          </h1>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold font-serif mb-4">千问API配置</h2>
              <p className="text-sm text-neutral-600 mb-4">
                配置千问API Key后，可以在游戏中获取AI提示帮助破案。
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-serif font-bold mb-2">
                    API Key
                  </label>
                  <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="请输入千问API Key"
                    className="w-full p-3 border border-neutral-400 font-mono text-sm"
                  />
                  <p className="text-xs text-neutral-500 mt-2">
                    获取API Key：访问 <a href="https://dashscope.aliyun.com/" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">阿里云百炼平台</a>
                  </p>
                </div>
                <button
                  onClick={handleSave}
                  className="w-full py-3 bg-neutral-800 text-white font-serif font-bold hover:bg-red-900 transition-colors"
                >
                  保存设置
                </button>
              </div>
            </div>

            <div className="border-t-2 border-neutral-300 pt-8">
              <h2 className="text-2xl font-bold font-serif mb-4 text-red-900">危险区域</h2>
              <p className="text-sm text-neutral-600 mb-4">
                重置游戏将清除所有进度，包括已完成的关卡和收集的线索。
              </p>
              {!showResetConfirm ? (
                <button
                  onClick={() => setShowResetConfirm(true)}
                  className="w-full py-3 border-2 border-red-900 text-red-900 font-serif font-bold hover:bg-red-900 hover:text-white transition-colors"
                >
                  重置游戏进度
                </button>
              ) : (
                <div className="space-y-4">
                  <p className="text-center font-bold text-red-900">
                    确定要重置所有游戏进度吗？此操作不可恢复！
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setShowResetConfirm(false)}
                      className="py-3 bg-neutral-300 text-neutral-800 font-serif font-bold hover:bg-neutral-400 transition-colors"
                    >
                      取消
                    </button>
                    <button
                      onClick={handleReset}
                      className="py-3 bg-red-900 text-white font-serif font-bold hover:bg-red-800 transition-colors"
                    >
                      确认重置
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t-2 border-neutral-300 pt-8">
              <h2 className="text-2xl font-bold font-serif mb-4">关于游戏</h2>
              <div className="space-y-2 text-sm text-neutral-700 font-serif">
                <p>《旧城纪事报探案》是一款基于1920年代报纸风格的探案游戏。</p>
                <p>通过阅读报纸上的新闻、广告和八卦，收集线索，推理出真相。</p>
                <p className="pt-4 border-t border-neutral-200">
                  本项目由<a href="https://www.aliyun.com/product/esa" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">阿里云ESA</a>提供加速、计算和保护
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
