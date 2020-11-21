import React, { useState, useEffect } from 'react';
import axios from "axios";


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

    const ladder = data.ladderChars.map( (entry) => {
    
      return <div>{entry.character.name} : {entry.character.level} : {entry.character.class}</div>
    })
 
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Level</th>
          <th>Class</th>
        </tr>
          <th>{ladder}</th>
          <th></th>
          <th></th>
      
      </table>
      
    </div>
  );
}

export default Ladder;