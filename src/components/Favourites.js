import { useEffect, useState } from 'react';

import { Table } from 'react-bootstrap'


import Favourite from './Favourite'

import './Favourites.scss'

export default function Favourites(props) {

  const favouritesTable = props.favourites.map((fav) => {
    return <Favourite fav={fav} removeFavourite={props.removeFavourite} getCharacter={props.getCharacter} />
  })

  if (props.favourites.length > 0) {
    return (
      <div className="favouritePage">
        <div className="favourite-title">Favourited Builds</div>
        <div className="favourites-container">
          <Table id="favouriteTable" responsive striped bordered variant="dark">
            <thead>
              <tr className="d-flex">
                <th className="col-3">Icon</th>
                <th className="col-3">Name</th>
                <th className="col-2">Level</th>
                <th className="col-2">Class</th>
                <th className="col-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {favouritesTable}
            </tbody>
          </Table>
        </div>
      </div>
    )
  } else {
    return <div className="noFavouritePage">
      <div className="no-favourites" style={{ textAlign: 'center' }}>You have no favourited builds</div>
    </div>
  }
}