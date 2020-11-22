import React, { useState } from 'react';
import axios from 'axios';

import './Searchbar.scss'

const account = [
  {
    "name": "SoundsOfViolence",
    "league": "Heist",
    "classId": 4,
    "ascendancyClass": 3,
    "class": "Champion",
    "level": 97,
    "experience": 3447548753,
    "lastActive": true
  },
  {
    "name": "pestoOnRice",
    "league": "Heist",
    "classId": 2,
    "ascendancyClass": 3,
    "class": "Pathfinder",
    "level": 85,
    "experience": 1329447985
  },
  {
    "name": "DeadlineWithMyMaker",
    "league": "Heist",
    "classId": 1,
    "ascendancyClass": 3,
    "class": "Chieftain",
    "level": 42,
    "experience": 23151450
  },
  {
    "name": "TheSnowGoose",
    "league": "Heist",
    "classId": 3,
    "ascendancyClass": 1,
    "class": "Occultist",
    "level": 89,
    "experience": 1784977296
  }
]

let charName = ""
function Searchbar(props) {

  const [value, setValue] = useState("")

  const search = function(name){
    account.map((entry) => {
      if (name === entry.name) {
        console.log(name)
        charName = name
        return charName
      } else {
        console.log("No name found")
      }
    })
}

  return (
    <div>
      <form>
        <input onSubmit={search(value)}
        type="text" 
        placeholder="Search Account..." 
        name="search"
        value={value}
        onChange={event => setValue(event.target.value)}/>
        
    </form>
   
    <div>{charName}</div>
  </div>
  )
}

export default Searchbar;