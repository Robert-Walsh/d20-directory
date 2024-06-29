import { Game, GameFilter } from "./Types";

export function applyFilters(games: Game[], gameFilter: GameFilter): Game[] {

  const { name, players, categories, showPlayers } = gameFilter

  if(name?.length){
    games = games.filter(x => x.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
  }

  if(players && showPlayers) {
    games = games.filter(x => players >= x.minPlayers && players <= x.maxPlayers)
  }

  if(categories.length > 0){
    games = games.filter(x => categories.includes(x.category))
  }

  return games; 
}