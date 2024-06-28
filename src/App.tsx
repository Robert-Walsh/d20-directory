import { useState } from 'react'
import MediaQuery from 'react-responsive'
import { Games } from './Games'
import { Search } from './Search'
import { GameFilter, StoreName } from './Types'
import D20Drawer from './Drawer'




export const App = () => {
  const [filter, setFilter] = useState<GameFilter>({
    name: '',
    categories: [],
    isExpansion: false,
    minPlayers: 1,
    maxPlayers: 6,
    maxPlayTime: undefined,
    agePlus: undefined
  })

  const [selectedStore, setSelectedStore] = useState<StoreName>(StoreName.Watford)

  const updateFilter = (newFilter: GameFilter) => {
    setFilter(newFilter)
  }

  const updateStore = (newStore: StoreName) => {
    setSelectedStore(newStore)
  }
  return (
    <div style={{'backgroundColor': '#B7121C' }}>
      <div style={{'backgroundColor': '#F1DEAB', width: '100%', color: '#F1DEAB', height:'80px', display: 'flex' }}>
        <D20Drawer setSelectedStore={updateStore}/>
        <h1 className='title' >D20 - {selectedStore}</h1>
      </div>
      <img src={'/raoul.png'} className="logo" alt="D20 Logo" />

      <h3 className='subtitle'> Games Directory</h3>
      <MediaQuery minWidth={1224}>
        {/* <Search filter={filter} updateFilter={updateFilter}/>
        <Games filter={filter} selectedStore={selectedStore}/> */}
        <div style={{height: '100%', backgroundColor: '#F1DEAB'}}>
          <h5 style={{marginTop: '20px', padding: '30px', textAlign: 'center'}}>This app was built with mobile in mind first! Please check it out on your phone and come back later for the wide-screen version. </h5>
        </div>

        <div style={{height: '100%', backgroundColor: '#B7121C', color: '#B7121C'}}>
        -
        </div>
      </MediaQuery>
      
      <MediaQuery maxWidth={1224}>
        <Search filter={filter} updateFilter={updateFilter}/>
        <Games filter={filter} selectedStore={selectedStore}/>
      </MediaQuery>
    </div>
  )
}