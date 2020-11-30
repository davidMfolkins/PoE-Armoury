import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Account.scss";
import LadderResponsive from "./LadderResponsive";

/* The Account component recieves the x props and outputs the accounts page
  - props.account: the name of the account that's being searched, i.e. 'Panini'
  - props.favourites: an array of favourited characters (from Application)
  - 

*/

function Account(props) {

    // list of characters associated with account
  const [chars, setChars] = useState([]);
    // initial state is the account name as searched by the user
    // if account exists in PoE, accountName is assigned the account name, correctly formatted
  const [accountName, setAccountName] = useState(props.account);
    // true: width of screen is less than 480px
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

  // get all characters for an account from db
  // if account is not in DB, our DB will query the PoE servers and search for the account there
  useEffect(() => {
    axios
      .get(`http://localhost:3030/accounts/${props.account}`)
      .then((result) => {
        if (result.data.error) {
          props.setState("loading").props.setLoadingMsg("");
          if (result.data.error.code === 1) {
            props.setLoadingError("Account does not exist.");
          } else {
            props.setLoadingError("Looks like this account is private.");
          }
        } else {
          // changes the webpage to to the account page
          props.setState("account");
          // assigning the correctly formatted account name to the state
          setAccountName(result.data.accountName);
          
          const characters = result.data.data.map((entry) => {
            return { character: entry, account: { name: props.account } };
          });

          setChars(characters);
        }
      });
  }, [props.account]);
  return (
    <div className="accountPage">
      <div className="accountName">{accountName}</div>
      <div className="accountContainer">
        {chars && (
          <LadderResponsive
            characters={chars}
            visible={chars.length}
            smallScreen={smallScreen}
            handleCharacterChange={handleCharacterChange}
            cookies={{}}
            favourites={props.favourites}
            account={true}
          />
        )}
      </div>
    </div>
  );
}
export default Account;
