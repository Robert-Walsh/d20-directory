
import { useState } from 'react'
import watfordData from './watfordData.json'
import uxbridgeData from './uxbridgeData.json'
import { GameResult } from './GameResult';
import { Category, GameFilter, StoreName } from './Types';
import { applyFilters } from './filter';

interface Props {
  filter: GameFilter
  selectedStore: StoreName
}

export const Games = ({ filter, selectedStore }: Props) => { 

  const [take, setTake] = useState(10)
  const [skip, setSkip] = useState(0)


  const storeData = selectedStore === StoreName.Watford ? watfordData : uxbridgeData
  // Assuming data.games is an array of objects where each object has a category property of type string
  let games = storeData.games.map(x => {
    // Type assertion to convert the string to Category enum
    const category: Category = Category[x.category as keyof typeof Category];

    return { ...x, category };
  });

  let filteredGames = applyFilters(games, filter);
  filteredGames = filteredGames.sort((a, b) => a.name.localeCompare(b.name));

  const paginatedGames = filteredGames.slice(skip, skip + take);

  return (
  <div>
      {paginatedGames.map((game, index) => (
        <GameResult game={game} key={index}/>
      ))}

      <div className="navigate-buttons-container">
        <button className="button" onClick={() => setSkip(Math.max(skip - take, 0))} disabled={skip === 0}>Back</button>
        <button className="button" onClick={() => setSkip(skip + take)} disabled={skip + take >= filteredGames.length}>Next</button>
      </div>
    </div>
  )
}