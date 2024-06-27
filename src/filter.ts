import { Game, GameFilter } from "./Types";

export function applyFilters(games: Game[], gameFilter: GameFilter): Game[] {

  const { name, minPlayers, maxPlayers} = gameFilter

  if(name?.length){
    games = games.filter(x => x.name.includes(name))
  }

  if(minPlayers) {
    games = games.filter(x => x.minPlayers >= minPlayers)
  }

  if(maxPlayers){ 
    games = games.filter(x => x.maxPlayers <= maxPlayers)
  }

  return games; 
}