import items from './helpers/dummy_data/items_data'
import '../index.scss';
import Ladder from './Ladder'

import Character from './Character'
import Searchbar from './Searchbar'

import { useState } from 'react'
import axios from 'axios'

export default function Application() {

  const [state, setState ] = useState('ladder');

  const [character, setCharacter ] = useState(null)

  const toggleView = function() {
    if (state === 'ladder') {
      setState('character')
    } else {
      setState('ladder')
    }
  }

  const getCharacter= function(char) {
    axios.get(`http://localhost:3030/characters/${char}`)
    .then((res) => {
      const character = res.data[0]
      console.log(character.items.items)
      setCharacter(character)
      return true
    }).then(() => {
      setState('character')
    })
  }


return (
  <div id="root">
    <Searchbar view={state} toggleView={() => toggleView()}/>
    {state === 'ladder' &&<Ladder getCharacter={getCharacter}/>}
    {state === 'character' && <Character character={character.items}/>}
    
    </div>
)
}