import React, { useState, useEffect } from 'react';
import axios from "axios";

import './Account.scss'
import Filter from './Filter'
import { Table } from 'react-bootstrap'

function Account(props) {
  const accountName = props.account;

  
  const [chars, setchars] = useState([])
  
  useEffect(() => {
    axios.get(`http://localhost:3030/accounts/${accountName}`)
      .then((result) => {
        setchars(result.data)
      }).catch((err) => {
        if (err.message.includes('404')) {
          axios.get(`/accounts/${accountName}`)
          .then(result => {
            setchars(result.data)
          }).catch((err) => {
            console.log(err)
          })
        }
      })
  }, [props.account])

  const rows = chars.map((entry) => {
    // console.log(entry.account.twitch)
    const className = entry.class
    const classIcon = `/icons/${className.toLowerCase()}_icon.png`
    // const num = Math.ceil(Math.random() * 5)
    return (
      <tr id="ladderList" className="d-flex" onClick={() => props.getCharacter(accountName, entry.name)}>
        <td className="col-1"></td>
        <td className="col-2"><img src={classIcon} /></td>
        <td className="col-3">{entry.name} </td>
        <td className="col-2">{entry.level}</td>
        <td className="col-2">{className}</td>
        <td className="col-2">{}</td>
      </tr>
    )
  })

  return (
    <div className="ladderPage">

      <div className="ladderTitle"></div>
      <div className="topButtons">
      <button type="button" id="ladderButton" onClick={() => props.setState("ladder")}>Back to Ladder</button>
        </div>
        <Filter />
      <div className="ladderContainer">
        <Table striped bordered variant="dark">
          <thead>
            <tr className="d-flex">
              <th className="col-1">{accountName}</th>
              <th className="col-2">Icon</th>
              <th className="col-3">Name</th>
              <th className="col-2">Level</th>
              <th className="col-2">Class</th>
              <th className="col-2">League</th>
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
export default Account;