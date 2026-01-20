import React from 'react'

export default function DetectiveNotes({ clues, totalClues, onSolve, canSolve }) {
  return (
    <div className="w-full lg:w-80 flex flex-col gap-4 shrink-0">
      <div className="bg-white shadow-xl rounded-sm overflow-hidden border border-neutral-300 transform rotate-1 sticky top-4">
        <div className="bg-red-900 text-white p-4">
          <h2 className="font-bold text-xl flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            侦探笔记
          </h2>
          <p className="text-xs opacity-80 mt-1">点击报纸上的可疑文本收集线索</p>
        </div>

        <div className="p-6 min-h-[400px] flex flex-col bg-yellow-50">
          <div className="flex-1 handwritten text-lg text-blue-900 space-y-1">
            {clues.length === 0 ? (
              <p className="opacity-50 italic text-sm font-sans">
                暂无记录。请在报纸上寻找线索...
              </p>
            ) : (
              clues.map((clue, index) => (
                <div key={index} className="flex items-start gap-2 animate-fadeIn">
                  <span className="text-red-800 mt-1">•</span>
                  <span className="border-b border-blue-200 pb-1 w-full">{clue}</span>
                </div>
              ))
            )}
          </div>

          <div className="mt-6 pt-4 border-t-2 border-dashed border-gray-300">
            <div className="flex justify-between text-xs font-bold mb-1 font-sans">
              <span>搜集进度</span>
              <span>{clues.length}/{totalClues}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-red-800 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${(clues.length / totalClues) * 100}%` }}
              />
            </div>
          </div>

          <button
            onClick={onSolve}
            disabled={!canSolve}
            className="mt-6 w-full py-2 bg-neutral-800 text-white font-bold font-serif uppercase tracking-widest hover:bg-red-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {canSolve ? '线索集齐 - 开始推理' : '开始推理'}
          </button>
        </div>
      </div>
    </div>
  )
}
