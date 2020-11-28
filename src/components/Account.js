import React, { useState, useEffect } from 'react';
import axios from "axios";

import './Account.scss'
import LadderResponsive from "./LadderResponsive";

function Account(props) {
  const accountName = props.account;
  console.log(props.account)

  const [chars, setchars] = useState([])
  const [smallScreen, setSmallScreen] = useState(false);

  window.addEventListener("resize", () => handleResize());

  function handleResize() {
    setSmallScreen(window.innerWidth < 480);
  }
  const handleCharacterChange = function (account, character, id) {
    props.getCharacter(account, character);
  };

  useState(() => {
    if (window.innerWidth < 480) {
      setSmallScreen(true);
    }
  }, []);

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
          const characters = result.data.map((entry) => {
            return {'character': entry, 'account': {}}
          })
          setchars(characters)
        }
      })

  }, [])
  

  return (
    <div className="accountPage">

      <div></div>
      <div className="topButtons">
        <button type="button" id="ladderButton" onClick={() => props.setState("ladder")}>Back to Ladder</button>
      </div>
      <div className="accountName">{accountName}</div>
      <div className="accountContainer">
      {chars && <LadderResponsive
        characters={chars}
        visible={chars.length}
        smallScreen={smallScreen}
        handleCharacterChange={handleCharacterChange}
        cookies={{}}
        favourites={props.favourites}
        
      />}
      </div>
    </div>
  );
}
export default Account;