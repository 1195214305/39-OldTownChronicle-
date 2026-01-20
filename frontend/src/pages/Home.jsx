import React from 'react'
import { Link } from 'react-router-dom'
import { useGameStore } from '../utils/store'
import cases from '../data/cases'

export default function Home() {
  const { completedCases } = useGameStore()

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-4 font-serif text-ink">
            旧城纪事报
          </h1>
          <p className="text-xl md:text-2xl font-serif text-neutral-600 mb-2">
            THE OLD TOWN CHRONICLE
          </p>
          <p className="text-lg text-neutral-500 italic">
            挖掘真相，不畏权贵
          </p>
        </header>

        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-3xl font-bold font-serif">案件档案</h2>
          <Link
            to="/settings"
            className="px-4 py-2 bg-neutral-800 text-white font-serif hover:bg-red-900 transition-colors"
          >
            设置
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseItem) => {
            const isCompleted = completedCases.includes(caseItem.id)

            return (
              <Link
                key={caseItem.id}
                to={`/case/${caseItem.id}`}
                className="newspaper-sheet p-6 hover:shadow-2xl transition-shadow relative group"
              >
                {isCompleted && (
                  <div className="absolute top-4 right-4 bg-red-900 text-white px-3 py-1 text-sm font-bold">
                    已破案
                  </div>
                )}

                <div className="mb-4">
                  <div className="text-sm text-neutral-500 mb-2">{caseItem.date}</div>
                  <h3 className="text-2xl font-black font-serif mb-2 group-hover:text-red-900 transition-colors">
                    {caseItem.title}
                  </h3>
                  <p className="text-lg font-serif text-neutral-600 mb-3">
                    {caseItem.subtitle}
                  </p>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {caseItem.description}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-neutral-300">
                  <span className="text-sm font-serif text-neutral-500">
                    难度：{caseItem.difficulty}
                  </span>
                  <span className="text-sm font-serif text-neutral-500">
                    线索：{caseItem.totalClues}条
                  </span>
                </div>

                <div className="mt-4 text-center">
                  <span className="inline-block px-4 py-2 bg-neutral-800 text-white font-serif text-sm group-hover:bg-red-900 transition-colors">
                    {isCompleted ? '重新调查' : '开始调查'}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        <footer className="mt-16 text-center text-sm text-neutral-500 border-t border-neutral-300 pt-8">
          <p className="mb-2">© 1925 旧城纪事报社</p>
          <p className="text-xs">本项目由<a href="https://www.aliyun.com/product/esa" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">阿里云ESA</a>提供加速、计算和保护</p>
        </footer>
      </div>
    </div>
  )
}
