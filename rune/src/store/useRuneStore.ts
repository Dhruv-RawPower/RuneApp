import { create } from "zustand"
import { Rune } from "@/types/rune"
import { fetchRunes } from "@/services/runeService"
import { createRune } from "@/services/runeWriteService"

type RuneState = {
  runes: Rune[]
  loadRunes: () => Promise<void>
  addRune: (content: string) => Promise<void>
}

export const useRuneStore = create<RuneState>((set) => ({
  runes: [],
  loadRunes: async () => {
    const runes = await fetchRunes()
    set({ runes })
  },
  addRune: async (content: string) => {
    await createRune({ content })
    const runes = await fetchRunes()
    set({ runes })
  },
}))
