import { create } from "zustand"

type SelectionState = {
  selectedRuneId: string | null
  selectRune: (id: string) => void
  clearSelection: () => void
}

export const useSelectionStore = create<SelectionState>((set) => ({
  selectedRuneId: null,
  selectRune: (id) => set({ selectedRuneId: id }),
  clearSelection: () => set({ selectedRuneId: null }),
}))
