import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useGameStore = create(
  persist(
    (set, get) => ({
      qwenApiKey: '',
      setQwenApiKey: (key) => set({ qwenApiKey: key }),
      completedCases: [],
      currentCase: null,
      caseProgress: {},
      completeCase: (caseId) => set((state) => ({
        completedCases: [...new Set([...state.completedCases, caseId])]
      })),
      setCurrentCase: (caseId) => set({ currentCase: caseId }),
      saveCaseProgress: (caseId, progress) => set((state) => ({
        caseProgress: { ...state.caseProgress, [caseId]: progress }
      })),
      getCaseProgress: (caseId) => {
        const state = get()
        return state.caseProgress[caseId] || { cluesFound: [], completed: false }
      },
      resetGame: () => set({ completedCases: [], currentCase: null, caseProgress: {} })
    }),
    { name: 'old-town-chronicle-storage' }
  )
)
