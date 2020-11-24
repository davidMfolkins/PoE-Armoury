import React, { useState, useEffect } from 'react';
import axios from "axios";

import './Ladder.scss'
import Filter from './Filter'
import { Table } from 'react-bootstrap'

const counter = 20


function Ladder(props) {
  const [data, setData] = useState( [] )
  const [filteredData, setFilteredData] = useState( [] )
  const [filter, setFilter] = useState ( "" )
  const [hasTwitch, sethasTwtich] = useState( false )
  const [hardcore, setHardcore] = useState( true )
  const [visible, setVisible] = useState( counter )

  useEffect(() => {
    axios.get('http://localhost:3030/ladder')
      .then((result) => {
        if (hardcore) {
          setData(result.data[0].rankings.entries )
        } else {
          setData(result.data[1].rankings.entries )
        }
      })
  }, [hardcore])

  useEffect(() => {
    const newArray = data
      .filter(hero => hero.character.class.toLowerCase().includes(filter.toLowerCase())) 
      .filter(twitch => !hasTwitch || twitch.account.twitch) 
    setFilteredData(newArray)

  }, [data, filter, hasTwitch])

  const changeButton = function () {
    if (hardcore) {
      return "Hardcore Ladder"
    } else {
      return "Standard Ladder"
    }
  }

  const tableName = function () {
    if (!hardcore) {
      return "Hardcore Ladder"
    } else {
      return "Standard Ladder"
    }
  }

  const handleFilterChange = function(evt) {
    setFilter(evt.target.value)
  }

  const handleTwitchChange = function(evt) {
    sethasTwtich(evt.target.checked)
  }
  
  const rows = filteredData.slice(0, visible).map((entry) => {
    const className = entry.character.class
    console.log(filteredData.length)
    const classIcon = `/icons/${className.toLowerCase()}_icon.png`
    return (
      <tr id="ladderList" className="d-flex" onClick={() => props.getCharacter(entry.account.name, entry.character.name)}>
        <td className="col-1">{entry.rank}</td>
        <td className="col-2"><img src={classIcon} alt={entry.character.name} /></td>
        <td className="col-3">{entry.character.name} </td>
        <td className="col-2">{entry.character.level}</td>
        <td className="col-2">{className}</td>
        {entry.account.twitch && <td className="col-2"><a href={`https://twitch.tv/${entry.account.twitch.name}`} target="_blank" rel="noreferrer">{entry.account.twitch.name}</a></td>}
      </tr>
    )
  })


  return (
    <div className="ladderPage">

      <div className="ladderTitle">{tableName()}</div>
      <div className="topButtons">
        <button type="button" id="ladderButton" onClick={() => setHardcore(!hardcore)}>{changeButton()}</button>
      </div>
      <Filter filter={filter} hasTwtich={hasTwitch} onFilterChange = {handleFilterChange} onTwitchChange = {handleTwitchChange}/>
      <div className="ladderContainer">
        <Table responsive striped bordered variant="dark">
          <thead>
            <tr className="d-flex">
              <th className="col-1">Rank</th>
              <th className="col-2">Icon</th>
              <th className="col-3">Name</th>
              <th className="col-2">Level</th>
              <th className="col-2">Class</th>
              <th className="col-2">Twitch</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </Table>
      </div>
      {visible < filteredData.length &&
      <button className="loadMore"type="button" onClick={() => setVisible(visible + counter)}>Load More</button>} 
    </div>
  );
}

export default Ladder;