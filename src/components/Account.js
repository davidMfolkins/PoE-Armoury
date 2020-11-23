import React, { useState, useEffect } from 'react';
import axios from "axios";
import jsonp from "jsonp";
import fetch from 'fetch';
import fetchJsonp from 'fetch-jsonp'

import './Account.scss'
import Filter from './Filter'
import { Table } from 'react-bootstrap'

// axios.get(`https://www.pathofexile.com/character-window/get-characters?accountName=${props.account}`)
// .then((result) => {
//   console.log("something")
//   return 
// })


function Account(props) {

  useEffect(() => {
    axios.get(`http://localhost:3030/accounts/${props.account}`)
      .then((result) => {
        console.log("this is from account")
        console.log(result)
        return result
      }).catch((err) => {
        if (err.message.includes('404')) {
          axios.get(`/accounts/${props.account}`)
          .then(result => {
            console.log("it happened")
          }).catch((err) => {
            console.log("something")
            throw err
          })
        }
      })
  }, [props.account])

  return (
    <></>
  );
}
export default Account;