export interface Game {
  name: string
  category: string
  isExpansion: boolean
  shelf: string
  minPlayers: number
  maxPlayers: number
  maxPlayTime: number
  agePlus: number
}

export interface GameFilter {
  name?: string
  category?: string
  isExpansion?: boolean
  shelf?: string
  minPlayers: number
  maxPlayers: number
  maxPlayTime?: number
  agePlus?: number
}