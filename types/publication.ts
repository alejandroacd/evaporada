export interface Publication {
  id: number
  title: string
  description: string
  created_at: string // ISO timestamp
  updated_at: string // ISO timestamp
  images: string[]   // URLs
  user_id: string    // UUID
}
