import React, { useState, useEffect } from 'react';
import axios from "axios";

import './Account.scss'
import { Table } from 'react-bootstrap'

function Account(props) {
  const accountName = props.account;
  console.log(props.account)

  const [chars, setchars] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3030/accounts/${accountName}`)
      .then((result) => {
        console.log(result)
        if (result.data.error) {
          props.setState('loading')
          props.setLoadingMsg('')
          if (result.data.error.code === 1) {
            props.setLoadingError('Account does not exist.')
          } else {
            props.setLoadingError('Looks like this account is private.')
          }
        
        } else {
          props.setState('account')
          setchars(result.data)
        }
      })

  }, [])

  const rows = chars.map((entry) => {
    const className = entry.class
    const classIcon = `/icons/${className.toLowerCase()}_icon.png`
    return (
      <tr id="accountList" className="d-flex" onClick={() => props.getCharacter(accountName, entry.name)}>
        <td className="col-3"><img src={classIcon}/> | {className}</td>
        <td className="col-3">{entry.name}</td>
        <td className="col-3">{entry.level}</td>
        <td className="col-3">{entry.league}</td>
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
        <Table id="accountTable" striped bordered variant="dark">
          <thead>
            <tr className="d-flex">
              <th className="col-3">Class</th>
              <th className="col-3">Name</th>
              <th className="col-3">Level</th>
              <th className="col-3">League</th>
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