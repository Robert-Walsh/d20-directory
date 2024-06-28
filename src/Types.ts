export interface Game {
  name: string
  category: Category
  isExpansion: boolean
  shelf: string
  minPlayers: number
  maxPlayers?: number | null
  maxPlayTime: number
  agePlus: number
  bggLink?: string
}

export interface GameFilter {
  name?: string
  categories: string[]
  isExpansion?: boolean
  shelf?: string
  minPlayers: number
  maxPlayers: number
  maxPlayTime?: number
  agePlus?: number
}


export enum Category {
  Party = "Party",
  LightStrategy = "Light Strategy",
  CoOp = "Co-op",
  AdventureHeavy = "Adventure/Heavy",
  TwoPlayer = "2 Player",
  Strategy = "Strategy",
  FamilyAndKids = "Family and Kids",
  ThreePlayer = "3 Player",
  CardAndDice = "Card & Dice",
  Trivia = "Trivia",
  Over18 = "Over 18",
  Classic = "Classic"
}

export const categoriesOptions = getEnumValues(Category);

export const enum StoreName {
  Watford = "Watford", 
  Uxbridge = "Uxbridge"
}

function getEnumValues(enumType: any): string[] {
  return Object.values(enumType);
}