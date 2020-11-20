import React, { useState, useEffect } from 'react';
import axios from "axios";


function Ladder() {
  const [data, setData] = useState ({
    data: {entries: []}
  })

  useEffect(() => {
    axios.get('https://www.pathofexile.com/api/ladders/Standard?limit=50&type=league')
    .then( (result) => {
    
      setData(result)
      
    })
  }) 


    const final = data.data.entries.map( (entry) => {
      
      return <div>{entry.character.name} : {entry.character.level} : {entry.character.class}</div>
    })
 
  
  return (
    <div className="Ladder">
      {final}
    </div>
  );
}

export default Ladder;