import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Form, FormControl, Table } from 'react-bootstrap'

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

function Searchbar(props) {

  const [value, setValue] = useState("")

  const [searchResults, setSearchResults] = useState('');

  useEffect(() => {

  }, [value])

  const quickSearch = function (e) {
    setValue(e.target.value)
    const searchTerm = new RegExp(value)
    const newSearchResults = account.map((entry) => {
      if (searchTerm.exec(entry.name)) {
        return <tr><td>{entry.name}</td></tr>
      }
    })

    setSearchResults(newSearchResults)
  }

  return (
    <div>


      <Form className="my-2" autocomplete="off">
        <FormControl type="text" placeholder="Search for player..." name="search" value={value} onChange={event => quickSearch(event)} />
      </Form>
      <div style={{ width: '200px' }} >
        <Table striped hover className="search-results">
          <tbody>
            {searchResults}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Searchbar;