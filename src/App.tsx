import { useState } from 'react'
import MediaQuery from 'react-responsive'
import { Games } from './Games'
import { Search } from './Search'
import { GameFilter } from './Types'

export const App = () => {
  const [filter, setFilter] = useState<GameFilter>({
    name: '',
    category: '',
    isExpansion: false,
    minPlayers: 1,
    maxPlayers: 6,
    maxPlayTime: undefined,
    agePlus: undefined
  })

  const updateFilter = (newFilter: GameFilter) => {
    setFilter(newFilter)
  }

  return (
    <div style={{'backgroundColor': '#B7121C' }}>
      <div style={{'backgroundColor': '#F1DEAB', width: '100%', color: '#F1DEAB', height:'80px' }}>
        <h1 className='title' >D20 - Watford</h1>
      </div>
      <img src={'/raoul.png'} className="logo" alt="D20 Logo" />

      <h3 className='subtitle'> Games Directory</h3>
      <MediaQuery minWidth={1224}>
        <Search filter={filter} updateFilter={updateFilter}/>
        <Games filter={filter}/>
      </MediaQuery>
      
      <MediaQuery maxWidth={1224}>
        <Search filter={filter} updateFilter={updateFilter}/>
        <Games filter={filter}/>
      </MediaQuery>
    </div>
  )
}