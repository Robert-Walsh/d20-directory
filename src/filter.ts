import { Game, GameFilter } from "./Types";

export function applyFilters(games: Game[], gameFilter: GameFilter): Game[] {

  const { name, minPlayers, maxPlayers, categories } = gameFilter

  if(name?.length){
    games = games.filter(x => x.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
  }

  if(minPlayers) {
    games = games.filter(x => x.minPlayers >= minPlayers)
  }

  if(maxPlayers){ 
    games = games.filter(x => {
      if(!x.maxPlayers){ 
        return false
      }
      return x.maxPlayers <= maxPlayers
    })
  }

  if(categories.length > 0){
    games = games.filter(x => categories.includes(x.category))
  }

  return games; 
}