import React, { useState, useEffect } from 'react';
import axios from "axios";

import './Ladder.scss'

import { Table } from 'react-bootstrap'


function Ladder() {
  const [data, setData] = useState({
    ladderChars: []
  })

  useEffect(() => {
    axios.get('http://localhost:3030/ladder')
      .then((result) => {

        setData({ ...data, ladderChars: result.data[0].rankings.entries })
        console.log(result)
      })
  }, [])

  const rows = data.ladderChars.map((entry) => {
    const className = entry.character.class
    return (
      <tr className="d-flex">
        <td className="col-4">{entry.character.name}</td>
        <td className="col-4">{entry.character.level}</td>
        <td className="col-4">{className}</td>
      </tr>
    )
  })



  return (
    <div className="ladderContainer">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr className="d-flex">
            <th className="col-4">Name</th>
            <th className="col-4">Level</th>
            <th className="col-4">Class</th>
          </tr>
        </thead>
        <tbody>
          {rows}

        </tbody>
      </Table>
    </div>
  );
}

export default Ladder;