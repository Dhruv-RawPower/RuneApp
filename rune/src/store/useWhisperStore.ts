import { create } from "zustand"

export type Whisper = {
  id: string
  from_user: string
  to_user: string
  content: string
  created_at: string
  read_at: string | null
}

type WhisperStore = {
  open: boolean
  whispers: Whisper[]
  unreadCount: number

  openInbox: () => void
  closeInbox: () => void

  setWhispers: (w: Whisper[]) => void
  addWhisper: (w: Whisper) => void

  setUnreadCount: (n: number | ((prev: number) => number)) => void
}

export const useWhisperStore = create<WhisperStore>((set) => ({
  open: false,
  whispers: [],
  unreadCount: 0,

  openInbox: () => set({ open: true }),
  closeInbox: () => set({ open: false }),

  setWhispers: (whispers) => set({ whispers }),

  addWhisper: (whisper) =>
    set((state) => ({
      whispers: [whisper, ...state.whispers],
    })),

  setUnreadCount: (n) =>
    set((state) => ({
      unreadCount: typeof n === "function" ? n(state.unreadCount) : n,
    })),
}))
