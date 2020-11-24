import { useEffect, useState } from 'react';
import axios from 'axios';

import { Table, Button, Alert } from 'react-bootstrap'

import { AiFillDelete } from 'react-icons/ai'

import './Favourites.scss'

export default function Favourites(props) {



  const [ msg, setMsg ] = useState(null)

 
  async function handleRemoveFavourite(id) {
    await props.removeFavourite(id)
    setMsg('Entry removed from favourites')
  }
 

  const favouritesTable = props.favourites.map((fav) => {
    console.log(fav)
    const classIcon = `/icons/${fav.class.toLowerCase()}_icon.png`;
    return (
    <tr id="ladderList" className="d-flex">
        <td className="col-3"><img src={classIcon} alt={fav.class} /></td>
        <td className="col-4">{fav.name} </td>
        <td className="col-1">{fav.level}</td>
        <td className="col-3">{fav.class}</td>
        <td className="col-1">
          <Button onClick={() => handleRemoveFavourite(fav.character_id)} variant="primary" size="lg">
            <AiFillDelete/> 
          </Button>{' '}
          </td>
      </tr>
    )
  })

  return <div className="favourites-container">
    {msg && <Alert style={{width: '400px'}} variant="info">{msg}</Alert>}
<Table responsive striped bordered variant="dark">
          <thead>
            <tr className="d-flex">
              <th className="col-3">Icon</th>
              <th className="col-4">Name</th>
              <th className="col-1">Level</th>
              <th className="col-3">Class</th>
              <th className="col-1"></th>
            </tr>
          </thead>
          <tbody>
            {favouritesTable}
          </tbody>
          
        </Table>
       
  </div>
}