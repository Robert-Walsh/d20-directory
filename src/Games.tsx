
import { useState } from 'react'
import data from './data.json'
import { GameResult } from './GameResult';
import { GameFilter } from './Types';
import { applyFilters } from './filter';

interface Props {
  filter: GameFilter
}

export const Games = ({ filter }: Props) => { 

  const [take, setTake] = useState(5)
  const [skip, setSkip] = useState(0)

  const games = data.games
  const filteredGames = applyFilters(games, filter)

  const paginatedGames = filteredGames.slice(skip, skip + take);

  return (
  <div>
      {paginatedGames.map((game, index) => (
        // <Paper key={index} elevation={3}>{game.Name}</Paper>

        <GameResult game={game}/>
      ))}



      <div className="navigate-buttons-container">
        <button className="button" onClick={() => setSkip(Math.max(skip - take, 0))} disabled={skip === 0}>Back</button>
        <button className="button" onClick={() => setSkip(skip + take)} disabled={skip + take >= games.length}>Next</button>
      </div>
    </div>
  )
}