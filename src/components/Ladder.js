import React, { useState, useEffect } from 'react';
import axios from "axios";

import './Ladder.scss'
import Filter from './Filter'
import { Table } from 'react-bootstrap'

const counter = 20;


function Ladder(props) {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState(null)
  const [filter, setFilter] = useState("")
  const [hasTwitch, sethasTwtich] = useState(false)
  const [hardcore, setHardcore] = useState(true)
  const [visible, setVisible] = useState(counter)


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
        <tr id="ladderList" className="d-flex" onClick={() => handleCharacterChange(entry.account.name, entry.character.name)}>
          <td className="col-2"><img src={classIcon} alt={entry.character.name} /></td>
          <td className="col-4">{entry.character.name} </td>
          <td className="col-2">{entry.character.level}</td>
          <td className="col-2">{className}</td>
          {entry.account.twitch && <td className="col-2"><a href={`https://twitch.tv/${entry.account.twitch.name}`} target="_blank" rel="noreferrer">{entry.account.twitch.name}</a></td>}
        </tr>
      )
    })
  }

  useEffect(() => {
    if (data) {
      const newArray = data
      .filter(hero => hero.character.class.toLowerCase().includes(filter.toLowerCase()))
      .filter(hero => !hasTwitch || hero.account.twitch)
    setFilteredData(newArray)
    }
   

  }, [data, filter, hasTwitch])

  const changeButton = function () {
    if (!hardcore) {
      return "Hardcore Ladder"
    } else {
      return "Standard Ladder"
    }
  }

  const tableName = function () {
    if (hardcore) {
      return "Hardcore Ladder"
    } else {
      return "Standard Ladder"
    }
  }

  const handleFilterChange = function (evt) {
    setFilter(evt.target.value)
  }

  const handleTwitchChange = function (evt) {
    sethasTwtich(evt.target.checked)
  }

  const handleCharacterChange = function (account, character) {
    props.getCharacter(account, character);
    // window.location("/character/${}")
  }

  return (
    <div className="ladderPage">

      <div className="ladderTitle">{tableName()}</div>
      <div className="topButtons">
        <button type="button" id="ladderButton" onClick={() => setHardcore(!hardcore)}>{changeButton()}</button>
      </div>
      <Filter filter={filter} hasTwtich={hasTwitch} onFilterChange={handleFilterChange} onTwitchChange={handleTwitchChange} />
      <div className="ladderContainer">
        <Table id="ladderTable" responsive striped bordered variant="dark">
          <thead>
            <tr className="d-flex">
              <th className="col-2">Icon</th>
              <th className="col-4">Name</th>
              <th className="col-2">Level</th>
              <th className="col-2">Class</th>
              <th className="col-2">Twitch</th>
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