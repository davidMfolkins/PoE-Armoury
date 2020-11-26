import { useEffect, useState } from 'react';
import axios from 'axios';

import { Table, Button, Alert } from 'react-bootstrap'

import { AiFillDelete } from 'react-icons/ai'

import './Favourites.scss'

export default function Favourites(props) {



  const [msg, setMsg] = useState(null)


  async function handleRemoveFavourite(id) {
    await props.removeFavourite(id)
    setMsg('Entry removed from favourites')
  }

  const handleCharacterChange = function (account, character) {
    props.getCharacter(account, character);
    //this does not work here yet, clicking on charname will get error because favorites does not see account yet.
  }


  const favouritesTable = props.favourites.map((fav) => {
    const classIcon = `/icons/${fav.class.toLowerCase()}_icon.png`;
    console.log(fav)
    return (
      <tr id="favouriteList" className="d-flex">
        <td className="col-3"><img src={classIcon} alt={fav.class} /></td>
        <td className="col-4" onClick={() => handleCharacterChange(fav.name)}>{fav.name}</td>
        <td className="col-1">{fav.level}</td>
        <td className="col-3">{fav.class}</td>
        <td className="col-1">
          <Button onClick={() => handleRemoveFavourite(fav.character_id)} variant="primary" size="lg">
            <AiFillDelete />
          </Button>{' '}
        </td>
      </tr>
    )
  })

  const favouritesTables = function () {
    if (props.favourites.length > 0) {
      return <div>
              <div className="favourite-title">Favourited Builds</div>
              <Table id="favouriteTable" responsive striped bordered variant="dark">
                <thead>
                  <tr className="d-flex">
                    <th className="col-3">Icon</th>
                    <th className="col-4">Name</th>
                    <th className="col-1">Level</th>
                    <th className="col-3">Class</th>
                    <th className="col-1">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {favouritesTable}
                </tbody>
              </Table>
              </div>
    } else {
      return <div className="no-favourites">You have no favourited builds</div>
    }
  }

  return <div className="favourites-container">
          {msg && <div className="remove-alert"><Alert variant="info">{msg}</Alert></div>}
          {favouritesTables()}
        </div>
}