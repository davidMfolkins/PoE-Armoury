import { Button } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'

import { useState } from 'react'

import './Favourite.scss'

export default function Favourite(props) {

  const [msg, setMsg] = useState(null)

  const [ deleted, setDeleted ] = useState(false)

  async function handleRemoveFavourite(id) {
  
    setDeleted(true)
    setTimeout( async() => {
      setDeleted(false)
      setMsg(null)
      await props.removeFavourite(id)
    }, 2000)

  }

  function removeCheck() {
    setMsg('Are you sure you want to delete?')
  }

  const handleCharacterChange = function (account, character, id) {
    props.getCharacter(account, character);
  }
  const classIcon = `/icons/${props.fav.class.toLowerCase()}_icon.png`;
  if (!msg) {
  return (
    <tr id="favouriteList" className="d-flex">
      <td className="col-3"><img src={classIcon} alt={props.fav.class} /></td>
      <td className="col-4" onClick={(e) => {
        e.preventDefault()
        handleCharacterChange(props.fav.account_name, props.fav.name, props.fav.id)
      }
      }>{props.fav.name}</td>
      <td className="col-1">{props.fav.level}</td>
      <td className="col-3">{props.fav.class}</td>
      <td className="col-1">
        <Button onClick={() => removeCheck()} variant="primary" size="lg">
          <AiFillDelete />
        </Button>{' '}
      </td>
    </tr>

  )
  } else if (deleted) {
    return (
      <tr id="favouriteList" className="d-flex">
      
      <td className="col-12" style={{backgroundColor: 'rgba(249, 189, 189, 0.5', color: 'white'}} id="deleted">Deleted!
      </td>
    </tr>
    )
  } else {
    return (
      <tr id="favouriteList" className="d-flex">
      
      <td className="col-12 trash" style={{backgroundColor: 'rgba(249, 189, 189, 0.5', color: 'white'}}>
        <a href="#" onClick={() => handleRemoveFavourite(props.fav.character_id)} variant="primary" size="lg">Click to permanently delete
          <AiFillDelete size="3em" ></AiFillDelete>
        </a>{' '}
      </td>
    </tr>
    )
  }
}