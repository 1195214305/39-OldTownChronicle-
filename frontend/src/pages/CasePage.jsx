import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useGameStore } from '../utils/store'
import cases from '../data/cases'
import Newspaper from '../components/Newspaper'
import DetectiveNotes from '../components/DetectiveNotes'
import Modal from '../components/Modal'

export default function CasePage() {
  const { caseId } = useParams()
  const navigate = useNavigate()
  const { saveCaseProgress, getCaseProgress, completeCase } = useGameStore()

  const caseData = cases.find(c => c.id === parseInt(caseId))
  const [foundClues, setFoundClues] = useState(getCaseProgress(caseId).cluesFound || [])
  const [clueTexts, setClueTexts] = useState([])
  const [showWelcome, setShowWelcome] = useState(true)
  const [showDeduction, setShowDeduction] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [resultData, setResultData] = useState(null)
  const [answers, setAnswers] = useState({})

  if (!caseData) {
    return <div className="min-h-screen flex items-center justify-center">关卡不存在</div>
  }

  const handleClueClick = (clue) => {
    if (foundClues.includes(clue.id)) return

    const newFoundClues = [...foundClues, clue.id]
    const newClueTexts = [...clueTexts, clue.text]

    setFoundClues(newFoundClues)
    setClueTexts(newClueTexts)
    saveCaseProgress(caseId, { cluesFound: newFoundClues, completed: false })
  }

  const handleSolve = () => {
    setShowDeduction(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const userAnswers = {}
    caseData.questions.forEach(q => {
      userAnswers[q.id] = formData.get(q.id)
    })

    const allCorrect = caseData.questions.every(q => userAnswers[q.id] === q.correctAnswer)

    if (allCorrect) {
      setResultData({
        success: true,
        title: caseData.endings.success.title,
        message: caseData.endings.success.message
      })
      completeCase(caseId)
    } else {
      let message = caseData.endings.failure.messages.wrongSuspect
      if (userAnswers.suspect === caseData.questions[0].correctAnswer) {
        if (userAnswers.method !== caseData.questions[1].correctAnswer) {
          message = caseData.endings.failure.messages.wrongMethod
        } else {
          message = caseData.endings.failure.messages.wrongMotive
        }
      }
      setResultData({
        success: false,
        title: caseData.endings.failure.title,
        message: message + '<br><br>' + caseData.endings.failure.conclusion
      })
    }

    setShowDeduction(false)
    setShowResult(true)
  }

  return (
    <div className="min-h-screen p-4 md:p-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        <Newspaper
          caseData={caseData}
          onClueClick={handleClueClick}
          foundClues={foundClues}
        />
        <DetectiveNotes
          clues={clueTexts}
          totalClues={caseData.totalClues}
          onSolve={handleSolve}
          canSolve={foundClues.length >= caseData.totalClues}
        />
      </div>

      <Modal isOpen={showWelcome} onClose={() => setShowWelcome(false)} title="侦探委托书">
        <div className="text-lg leading-relaxed mb-6 space-y-4">
          <p>尊敬的侦探：</p>
          <p>如你所见，{caseData.description}。作为《旧城纪事报》的特约顾问，我们需要你在今天的报纸版面中寻找真相。</p>
          <p className="font-bold bg-yellow-100 p-2 border border-yellow-200">
            任务目标：找出 {caseData.totalClues} 条关键线索，推断出嫌疑人、作案手法及动机。
          </p>
          <p className="text-sm italic text-neutral-500">
            提示：鼠标移动到报纸文字上，点击看起来可疑的描述。
          </p>
        </div>
        <button
          onClick={() => setShowWelcome(false)}
          className="w-full bg-red-900 text-white font-bold py-3 text-xl hover:bg-red-800 transition shadow-lg"
        >
          接受委托
        </button>
      </Modal>

      <Modal isOpen={showDeduction} onClose={() => setShowDeduction(false)} title="最终推理">
        <form onsubmit={handleSubmit} className="space-y-6">
          {caseData.questions.map((question, idx) => (
            <div key={question.id}>
              <label className="block font-bold text-lg mb-2 font-serif">
                {idx + 1}. {question.question}
              </label>
              {question.type === 'radio' ? (
                <div className="grid grid-cols-2 gap-3">
                  {question.options.map(option => (
                    <label key={option.value} className="border p-3 cursor-pointer hover:bg-white flex items-center gap-2">
                      <input type="radio" name={question.id} value={option.value} className="accent-red-900" required />
                      {option.label}
                    </label>
                  ))}
                </div>
              ) : (
                <select name={question.id} className="w-full p-3 border border-neutral-400 bg-white font-serif text-lg" required>
                  {question.options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              )}
            </div>
          ))}
          <div className="pt-4 text-center">
            <button type="submit" className="bg-neutral-900 text-white px-8 py-3 font-bold text-xl hover:bg-neutral-700 transition w-full md:w-auto">
              提交报告
            </button>
          </div>
        </form>
      </Modal>

      <Modal isOpen={showResult} className="bg-white max-w-lg w-full p-8 text-center border-y-8 border-red-900">
        <div className="text-6xl mb-4 text-red-900">
          {resultData?.success ? '👑' : '📰'}
        </div>
        <h2 className="text-4xl font-black mb-4 font-serif uppercase">{resultData?.title}</h2>
        <p className="text-lg mb-8 font-serif leading-relaxed" dangerouslySetInnerHTML={{ __html: resultData?.message }} />
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="border-2 border-black px-6 py-2 hover:bg-black hover:text-white transition uppercase font-bold"
          >
            重新阅读
          </button>
          <button
            onClick={() => navigate('/')}
            className="bg-red-900 text-white px-6 py-2 hover:bg-red-800 transition uppercase font-bold"
          >
            返回主页
          </button>
        </div>
      </Modal>
    </div>
  )
}
