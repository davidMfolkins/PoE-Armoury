import React, { useState, useEffect } from 'react';
import axios from "axios";

import './Ladder.scss'
import Filter from './Filter'
import { Table } from 'react-bootstrap'




function Ladder(props) {
  const [data, setData] = useState({
    ladderChars: []
  })
  const [filteredData, setFilteredData] = useState({
    ladderChars: []
  })

  const [hardcore, setHardcore] = useState({
    hardcore: false
  })

  useEffect(() => {
    axios.get('http://localhost:3030/ladder')
      .then((result) => {
        if (hardcore) {
          setData({ ...data, ladderChars: result.data[0].rankings.entries })
          setFilteredData({ ...data, ladderChars: result.data[0].rankings.entries })
        } else {
          setData({ ...data, ladderChars: result.data[1].rankings.entries })
          setFilteredData({ ...data, ladderChars: result.data[1].rankings.entries })
        }
      })
  }, [hardcore])

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

  const filterFunction = function(evt) {
    const query = evt.target.value.toLowerCase()
    const newArray = data.ladderChars.filter(hero => hero.character.class.toLowerCase().includes(query)) 
    setFilteredData({ladderChars: newArray})
  }
  
  const filterTwitch = function(event) {
    const checkBox = event.target.value
    if (checkBox === "on") {
      console.log("ON!")
    } else {
      console.log("OFF!")
    }
  }
  const rows = filteredData.ladderChars.map((entry) => {
    const className = entry.character.class
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
      <Filter onChange = {filterFunction} handleChange = {filterTwitch}/>
      <div className="ladderContainer">
        <Table striped bordered variant="dark">
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
    </div>
  );
}

export default Ladder;