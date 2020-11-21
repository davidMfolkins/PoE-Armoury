import React, { useState, useEffect } from 'react';
import axios from "axios";

import './Ladder.scss'


function Ladder() {
  const [data, setData] = useState ({
    ladderChars: []
  })

  useEffect(() => {
    axios.get('http://localhost:3030/ladder')
    .then( (result) => {
    
      setData({...data, ladderChars: result.data[0].rankings.entries})
      console.log(result)
    })
  }, []) 

    const name = data.ladderChars.map( (entry) => {
      return <div>{entry.character.name}</div>
    })

    const level = data.ladderChars.map( (entry) => {
      return <div>{entry.character.level}</div>
    })

    const charClass = data.ladderChars.map( (entry) => {
      return <div>{entry.character.class}</div>
    })
 
  return (
    <div className="ladderContainer">
      <table className="table">
        <tr className="rows">
          <th>Name</th>
          <th>Level</th>
          <th>Class</th>
        </tr>
        <tr className="rows">
          <th>{name}</th>
          <th>{level}</th>
          <th>{charClass}</th>
        </tr>
      </table>
    </div>
  );
}

export default Ladder;