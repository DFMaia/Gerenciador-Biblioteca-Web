export type SortOrder = 'ASC' | 'DESC' | 'RANDOM'
export type Theme = 'kinari' | 'sumi' | 'sepia'

export interface Preferences {
  id: number
  theme: Theme
  sortOrder: SortOrder
}
