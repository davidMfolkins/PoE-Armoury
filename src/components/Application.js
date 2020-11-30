import Ladder from "./Ladder";
import Loading from "./Loading";
import Character from "./Character";
import Account from "./Account";
import Navigation from "./Navigation";
import Register from "./Register";
import Logout from "./Logout";
import Login from "./Login";
import Favourites from "./Favourites";
import Grabber from "./Grabber";
import Message from "./Message";
import { fetchCharacter } from "./helpers/getters";

import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import "../index.scss";
import { CgChevronDoubleLeft } from "react-icons/cg";
import ScrollUpButton from "react-scroll-up-button";
import Container from "react-bootstrap/Container";

const ladder_standard = require("../ladder_standard.json");
const ladder_hardcore = require("../ladder_hardcore.json");

export default function Application() {
  const [cookies, setCookie, removeCookie] = useCookies(null);

  function handleCookie(key) {
    setCookie("user", key, {
      path: "/",
    });
  }
    // the visual state of the app:
      // - 'ladder', 'account', 'character', 'favourites', 'loading'
  const [state, setState] = useState("ladder");
    // The name of the account currently being searched
  const [account, setAccount] = useState("");
    // an object with account and character information of character being inspected
  const [character, setCharacter] = useState(null);
    // if someone if currently logged in or not
  const [loggedIn, setLoggedIn] = useState(false);
    // an array of character objects that have been favourited by the active user (cookies.user)
  const [favourites, setFavourites] = useState([]);
    // an array of favourites this logged in user has
  const [loadingMsg, setLoadingMsg] = useState(null);
    // if there is an error loading, this message displays in Loading.js component
  const [loadingError, setLoadingError] = useState(null);
    // if ladder is set to standard
  const [standardLadder, setStandardLadder] = useState([]);
    // if ladder is set to hardcore
  const [hardcoreLadder, setHardcoreLadder] = useState([]);
    // used to seed the database for development 
  const [grab, setGrab] = useState(false);
    // content of different messages used
  const [msg, setMsg] = useState(null);
    // an array of states, used to navigate using the back button
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setState("loading");
    setLoadingMsg("Grabbing characters...");

    setTimeout(() => {
      axios
        .get("http://localhost:3030/characters")
        .then((res) => {
          // compares characters saved in the DB to all characters in the ladder.json and filters out and characters
          // that don't exist in the DB
          const ladder_hardcore_display = ladder_hardcore.entries.reduce(
            (accumulator, currentValue) => {
              if (
                res.data.filter(
                  (element) => element.name === currentValue.character.name
                ).length > 0
              ) {
                return [...accumulator, currentValue];
              } else {
                return [...accumulator];
              }
            },
            []
          );
          const ladder_standard_display = ladder_standard.entries.reduce(
            (accumulator, currentValue) => {
              if (
                res.data.filter(
                  (element) => element.name === currentValue.character.name
                ).length > 0
              ) {
                return [...accumulator, currentValue];
              } else {
                return [...accumulator];
              }
            },
            []
          );

          setStandardLadder(ladder_standard_display);
          setHardcoreLadder(ladder_hardcore_display);
        })
        .then(() => {
          setState("ladder");
        });
    }, 1000);
  }, []);

  // get user characters if user is logged in (cookies.user)
  useEffect(() => {
    if (cookies.user) {
      axios
        .get(`http://localhost:3030/users/${cookies.user}/favourites`)
        .then((result) => {
          if (result) {
            setFavourites(result.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setFavourites([]);
    }
  }, []);

  // app keeps a record of state changes so we can go 'back'
  useEffect(() => {
    if (state !== "loading" && history[history.length - 1] !== state) {
      setHistory([...history, state]);
    }
  }, [state]);

  useEffect(() => {
    if (cookies.user) {
      setLoggedIn(true);
    }
  });

  function back() {
    if (history.length >= 1) {
      const previous = history[history.length - 1];
      const newHistory = history;
      newHistory.splice(-1);
      setHistory(newHistory);
      setState(previous);
    }
  }

  // parameter is a string of the character's name i.e. 'SoundsOfViolence'
  // output is the entire array of favourited characters (as objects) 
  function removeFavourite(name) {
    axios
      .delete(`http://localhost:3030/users/${cookies.user}/favourites/${name}`)
      .then((result) => {
        setFavourites(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // parameter is a string of the character's name i.e. 'SoundsOfViolence'
  // output is the entire array of favourited characters (as objects) 
  function addFavourite(name) {
    axios
      .post(`http://localhost:3030/users/${cookies.user}/favourites/${name}`)
      .then((result) => {
        setFavourites(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // to get a specific character's info to display in Character.js
  // parameter: accountName (string, i.e. 'Panini') and characterName (string, i.e. 'SoundsOfViolence')
  // result: sets the current character to an object containing all character and account information
  function getCharacter(accountName, characterName) {
    const randomInterval = function () {
      return Math.floor(Math.random() * 500 + 100);
    };
    setState("loading");
    setTimeout(() => {
      fetchCharacter(accountName, characterName).then((res) => {
        if (res.name === "Error") {
          setCharacter(null);
        } else {
          setCharacter(res);
        }
        setState("character");
      });
    }, randomInterval());
  }

  return (
    <Container fluid>
      {history.length > 1 && (
        <div id="back-button" onClick={back}>
          <CgChevronDoubleLeft onClick={back} size="6em" />
        </div>
      )}
      <Navigation
        state={state}
        setGrab={setGrab}
        grab={grab}
        getCharacter={getCharacter}
        setState={setState}
        removeCookie={removeCookie}
        cookies={cookies}
        setAccount={setAccount}
      />
      {msg && <Message msg={msg} setMsg={setMsg} />}
      <Grabber grab={grab} />
      <ScrollUpButton />
      <Container style={{ marginTop: "100px" }}>
        <Switch>
          <Route exact path="/">
            {state === "account" && (
              <Account
                account={account}
                getCharacter={getCharacter}
                setState={setState}
                setLoadingMsg={setLoadingMsg}
                setLoadingError={setLoadingError}
                cookies={cookies}
              />
            )}
            {state === "ladder" && (
              <Ladder
                getCharacter={getCharacter}
                setState={setState}
                standard={standardLadder}
                hardcore={hardcoreLadder}
                favourites={favourites}
                addFavourite={addFavourite}
                removeFavourite={removeFavourite}
                setMsg={setMsg}
                cookies={cookies}
              />
            )}

            {state === "character" && character && (
              <Character
                character={character}
                view={state}
                addFavourite={addFavourite}
                removeFavourite={removeFavourite}
                favourites={favourites}
                cookies={cookies}
                setState={setState}
                setAccount={setAccount}
                msg={msg}
                setMsg={setMsg}
              />
            )}

            {state === "favourites" && (
              <Favourites
                favourites={favourites}
                removeFavourite={removeFavourite}
                getCharacter={getCharacter}
                setState={setState}
              />
            )}

            {state === "character" && !character && (
              <Loading
                error={loadingError}
                msg={loadingMsg}
                setState={setState}
              />
            )}
            {state === "loading" && (
              <Loading
                error={loadingError}
                msg={loadingMsg}
                setState={setState}
              />
            )}
          </Route>
          <Route path="/register">
            {!loggedIn && (
              <Register
                handleCookie={handleCookie}
                setState={setState}
                setLoggedIn={setLoggedIn}
              />
            )}
            {loggedIn && <Redirect to="/" />}
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/login">
            {!loggedIn && <Login handleCookie={handleCookie} />}
            {loggedIn && <Redirect to="/" />}
          </Route>
        </Switch>
      </Container>
    </Container>
  );
}
