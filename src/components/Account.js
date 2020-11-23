import React, { useState, useEffect } from 'react';
import axios from "axios";

import './Account.scss'
import Filter from './Filter'
import { Table } from 'react-bootstrap'


function Account(props) {

  useEffect(() => {
    let notInDb = false;
    axios.get(`http://localhost:3030/account/${props.account}`)
      .then((result) => {
        console.log(result)
      }).catch((err) => {
        if (err.message.includes('404')) {
          notInDb = true
        }
      })
      if (notInDb) {
        axios.get(`https://www.pathofexile.com/character-window/get-characters?accountName=${props.account}`)
        .then((result) => {
          const rows = result.map((entry) => {
            console.log(entry.account.twitch)
            const className = entry.class
            const classIcon = `/icons/${className.toLowerCase()}_icon.png`
            // const num = Math.ceil(Math.random() * 5)
            console.log("i did it")
            return (
              <tr id="accountList" className="d-flex" onClick={() => props.getCharacter(entry.account.name, entry.character.name)}>
                <td className="col-1"></td>
                <td className="col-2"><img src={classIcon} /></td>
                <td className="col-3">{entry.name} </td>
                <td className="col-2">{entry.level}</td>
                <td className="col-2">{className}</td>
                {entry.account.twitch && <td className="col-2"><a href={`https://twitch.tv/${entry.account.twitch.name}`} target="_blank">{entry.account.twitch.name}</a></td>}
              </tr>
            )
          })
        })
      }
  }, [props.account])

  return (
    <></>
  );
}
export default Account;