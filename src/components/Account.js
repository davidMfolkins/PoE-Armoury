import React, { useState, useEffect } from 'react';
import axios from "axios";

import './Account.scss'
import Filter from './Filter'
import { Table } from 'react-bootstrap'

function Account(props) {

  const [chars, setchars] = useState([])

  useEffect(() => {
    const accountName = props.account;
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

  // const rows = data.accountChars.map((entry) => {
  //   // console.log(entry.account.twitch)
  //   const className = entry.character.class
  //   const classIcon = `/icons/${className.toLowerCase()}_icon.png`
  //   const num = Math.ceil(Math.random() * 5)
  //   return (
  //     <tr id="ladderList" className="d-flex" onClick={() => props.getCharacter(entry.account.name, entry.character.name)}>
  //       <td className="col-1">{entry.rank}</td>
  //       <td className="col-2"><img src={classIcon} /></td>
  //       <td className="col-3">{entry.character.name} </td>
  //       <td className="col-2">{entry.character.level}</td>
  //       <td className="col-2">{className}</td>
  //       {entry.account.twitch && <td className="col-2"><a href={`https://twitch.tv/${entry.account.twitch.name}`} target="_blank">{entry.account.twitch.name}</a></td>}
  //     </tr>
  //   )
  // })

  return (
    <></>
  );
}
export default Account;