import { supabase } from "@/lib/supabaseClient"
import { RUNE_SLOTS } from "@/lib/runeSlots"

export async function createRune({ content }: { content: string }) {
  // 1️⃣ Fetch existing runes
  const { data: existing, error } = await supabase
    .from("runes")
    .select("x, y, z")

  if (error) {
    console.error("Failed to check slots:", error)
    throw error
  }

  // 2️⃣ Determine occupied slots
  const occupied = new Set(
    existing.map(
      (r) => `${r.x}:${r.y}:${r.z}`
    )
  )

  // 3️⃣ Filter available slots
  const availableSlots = RUNE_SLOTS.filter(
    (slot) =>
      !occupied.has(`${slot.x}:${slot.y}:${slot.z}`)
  )

  if (availableSlots.length === 0) {
    throw new Error("No available rune slots")
  }

  // 4️⃣ Pick a free slot
  const slot =
    availableSlots[
      Math.floor(Math.random() * availableSlots.length)
    ]

  // 5️⃣ Insert rune
  const { error: insertError } = await supabase
    .from("runes")
    .insert({
      content,
      x: slot.x,
      y: slot.y,
      z: slot.z,
      decay_level: 0,
    })

  if (insertError) {
    console.error("Failed to create rune:", insertError)
    throw insertError
  }
}
