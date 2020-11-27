import React, { useState, useEffect } from 'react';
import axios from "axios";

import './Account.scss'
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
    const className = entry.class
    const classIcon = `/icons/${className.toLowerCase()}_icon.png`
    return (
      <tr id="accountList" className="d-flex" onClick={() => props.getCharacter(accountName, entry.name)}>
        <td className="col-2"><img src={classIcon} /></td>
        <td className="col-4">{entry.name}</td>
        <td className="col-2">{entry.level}</td>
        <td className="col-2">{className}</td>
        <td className="col-2">{entry.league}</td>
      </tr>
    )
  })

  return (
    <div className="accountPage">

      <div></div>
      <div className="topButtons">
        <button type="button" id="ladderButton" onClick={() => props.setState("ladder")}>Back to Ladder</button>
      </div>
      <div className="accountName">{accountName}</div>
      <div className="accountContainer">
        <Table striped bordered variant="dark">
          <thead>
            <tr className="d-flex">
              <th className="col-2">Icon</th>
              <th className="col-4">Name</th>
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