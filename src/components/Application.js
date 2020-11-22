import items from './helpers/dummy_data/items_data'
import '../index.scss';
import Ladder from './Ladder'
import Loading from './Loading'
import Character from './Character'
import Searchbar from './Searchbar'
import Navigation from './Navigation'

import Container from 'react-bootstrap/Container'

import { useState } from 'react'
import axios from 'axios'

export default function Application() {

  const [state, setState] = useState('ladder');

  const [character, setCharacter] = useState(null)

  const toggleView = function () {
    if (state === 'character') {
      setState('ladder')
    }
  }

  const getCharacter = function (char) {
    setState('loading')
    setTimeout(() => {
      axios.get(`http://localhost:3030/characters/${char}`)
        .then((res) => {
          const character = res.data[0]
          console.log(character.items.items)
          setCharacter(character)
          return true
        }).then(() => {
          setState('character')
        })
    }, 1000)

  }


  return (
    <Container fluid>

      <Navigation toggleView={toggleView} />
      <Container style={{ marginTop: '100px' }}>
        {state === 'ladder' && <Ladder getCharacter={getCharacter} />}
        {state === 'character' && <Character character={character.items} toggleView={toggleView} view={state} />}
        {state === 'loading' && <Loading />}
      </Container>

    </Container>
  )
}