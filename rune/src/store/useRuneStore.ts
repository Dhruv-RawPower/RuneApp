import { create } from "zustand"
import { Rune } from "@/types/rune"
import { fetchRunes } from "@/services/runeService"

type RuneStore = {
  runes: Rune[]
  focusedRune: Rune | null

  loadRunes: () => Promise<void>
  setFocusedRune: (rune: Rune | null) => void
}

export const useRuneStore = create<RuneStore>((set) => ({
  runes: [],
  focusedRune: null,

  loadRunes: async () => {
    const runes = await fetchRunes()
    set({ runes })
    console.log("runes - ", runes)
  },

  setFocusedRune: (rune) => {
    set({ focusedRune: rune })
  },
}))
