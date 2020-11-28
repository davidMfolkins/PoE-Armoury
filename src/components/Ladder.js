import React, { useState, useEffect } from 'react';

import './Ladder.scss'
import Filter from './Filter'
import LikeButton from './LikeButton'
import { Table } from 'react-bootstrap'

const counter = 20;


function Ladder(props) {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState(null)
  const [filter, setFilter] = useState("")
  const [hasTwitch, sethasTwtich] = useState(false)
  const [hardcore, setHardcore] = useState(true)
  const [visible, setVisible] = useState(counter)
  const [favouriteFilter, setFavouriteFilter] = useState(false)


  useEffect(() => {
    if (hardcore) {
      setData(props.hardcore)
    } else {
      setData(props.standard)
    }

  }, [hardcore])



  let rows;

  if (filteredData) {
    rows = filteredData.slice(0, visible).map((entry) => {
      const className = entry.character.class
      const classIcon = `/icons/${className.toLowerCase()}_icon.png`
      return (
        <tr id="ladderList" className="d-flex">
          <td id="classCell" className="col-3"><img src={classIcon} alt={entry.character.name} /> {className}</td>
          <td className="col-3" onClick={() => handleCharacterChange(entry.account.name, entry.character.name, entry.character.id)}>{entry.character.name} </td>
          <td className="col-2">{entry.character.level}</td>
          <td className="col-3">{entry.account.twitch && <a href={`https://twitch.tv/${entry.account.twitch.name}`} target="_blank" rel="noreferrer">{entry.account.twitch.name}</a>}</td>
          <td className="col-1">{props.cookies.user && <LikeButton characterid={entry.character.id} favourites={props.favourites} character={entry.character} removeFavourite={props.removeFavourite} addFavourite={props.addFavourite} size="1.5em" setMsg={props.setMsg} />}</td>
        </tr>
      )
    })
  }

  useEffect(() => {
    if (data) {
      const newArray = data
        .filter(hero => hero.character.class.toLowerCase().includes(filter.toLowerCase()))
        .filter(hero => !hasTwitch || hero.account.twitch)
        .filter(hero => !favouriteFilter || props.favourites.some(fav => fav.character_name === hero.character.name))
      setFilteredData(newArray)
    }


  }, [data, filter, hasTwitch, favouriteFilter])

  const changeButton = function () {
    if (!hardcore) {
      return "Heist Hardcore Ladder"
    } else {
      return "Heist Ladder"
    }
  }

  const tableName = function () {
    if (hardcore) {
      return "Heist Hardcore Ladder"
    } else {
      return "Heist Ladder"
    }
  }

  const handleFilterChange = function (evt) {
    setFilter(evt.target.value)
  }

  const handleTwitchChange = function (evt) {
    sethasTwtich(evt.target.checked)
  }

  const handleCharacterChange = function (account, character, id) {
    props.getCharacter(account, character);
  }

  const handleFavouriteFilter = function (evt) {
    setFavouriteFilter(evt.target.checked)
  }

  return (
    <div className="ladderPage">

      <div className="ladderTitle">{tableName()}</div>
      <div id="topButtons">

        <Filter cookies={props.cookies} hardcore={hardcore} changeButton={changeButton} setHardcore={setHardcore} filter={filter} hasTwtich={hasTwitch} favourited={favouriteFilter} onFilterChange={handleFilterChange} onTwitchChange={handleTwitchChange} onFavouriteChange={handleFavouriteFilter} />
      </div>

      <div className="ladderContainer">
        <Table id="ladderTable" responsive striped bordered variant="dark">
          <thead>
            <tr className="d-flex">
              <th className="col-3">Class</th>
              <th className="col-3">Name</th>
              <th className="col-2">Level</th>
              <th className="col-3">Twitch</th>
              <th className="col-1">Fav</th>

            </tr>
          </thead>
          <tbody>
            {filteredData && rows}
          </tbody>
        </Table>
      </div>
      {filteredData && visible < filteredData.length &&
        <button className="loadMore" type="button" onClick={() => setVisible(visible + counter)}>Load More</button>}
    </div>
  );
}

export default Ladder;