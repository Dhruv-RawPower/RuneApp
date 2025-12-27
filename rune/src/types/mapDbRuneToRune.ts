export function mapDbRuneToRune(db: any) {
  return {
    id: db.id,
    content: db.content,
    x: db.x,
    y: db.y,
    z: db.z,
    authorId: db.author_id,
  }
}
