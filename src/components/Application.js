import "../index.scss";
import Ladder from "./Ladder";
import Loading from "./Loading";
import Character from "./Character";
import Account from "./Account";
import Navigation from "./Navigation";
import Register from './Register';
import Logout from './Logout';
import Login from './Login'
import Favourites from './Favourites';
import fetchCharacter from "./helpers/getters";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useCookies } from 'react-cookie';
import ScrollUpButton from "react-scroll-up-button";
import axios from 'axios'

export default function Application() {
  const [cookies, setCookie, removeCookie] = useCookies(null);


  function handleCookie(key) {
    setCookie("user", key, {
      path: "/"
    });
  }


  const [state, setState] = useState("ladder");

  const [account, setAccount] = useState("");

  const [character, setCharacter] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false)
  const [favourites, setFavourites] = useState([])

  useEffect(() => {
    if (cookies.user) {
      setLoggedIn(true)
    }
  })

  const randomInterval = function () {
    return Math.floor((Math.random() * 1000) + 750)
  }

  const getCharacter = function (accountName, characterName) {
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
    }, randomInterval())
  };

  useEffect(() => {
      axios.get(`http://localhost:3030/users/${cookies.user}/favourites`).then((result) => {
        setFavourites(result.data)
      })
  }, [])

  function removeFavourite(character_id) {
    console.log('removing fav')
   axios.delete(`http://localhost:3030/users/${cookies.user}/favourites/${character_id}`).then((result) => {
      const newFavourites = favourites.filter(fav => fav.id !== result.data[0].id)
      console.log(newFavourites)
      setFavourites(newFavourites)
    }).catch((err) => {
      console.log(err)
    })
  }

  function addFavourite(character_id) {
    console.log('adding fav')
    axios.post(`http://localhost:3030/users/${cookies.user}/favourites/${character_id}`).then((result) => {
      setFavourites([...favourites, result.data[0]])
    }).catch((err) => {
      console.log(err)
    })
  }


 
  return (
    <Container fluid>
      <Navigation getCharacter={getCharacter} setState={setState} removeCookie={removeCookie} cookies={cookies} setAccount={setAccount} />
      <ScrollUpButton />
      <Container style={{ marginTop: "100px" }}>
        <Switch>
      <Route exact path="/">
         {state === "account" && <Account account={account} getCharacter={getCharacter} setState={setState} />}
            {state === "ladder" && <Ladder getCharacter={getCharacter} />}
        {state === "character" && character && (
          <Character
            character={character.items}
            view={state}
            addFavourite={addFavourite}
            removeFavourite={removeFavourite}
            character_id={character.character_id}
            favourites={favourites}
          />
        )}
        {state === "character" && !character && (
          <Loading error={"No character found."} setState={setState} />
        )}
        {state === "loading" && <Loading />}
        </Route>
        <Route path="/register">
          {!loggedIn && <Register handleCookie={handleCookie} setState={setState} setLoggedIn={setLoggedIn}/>}
          {loggedIn && <Redirect to="/"/>}
          </Route>
          <Route path="/logout">
            {!loggedIn && <Logout />}
          </Route>
          <Route path="/login">
            {!loggedIn && <Login handleCookie={handleCookie} />}
            {loggedIn && <Redirect to="/" />}
          </Route>
          <Route path="/users/:id/favourites">
         <Favourites favourites={favourites} removeFavourite={removeFavourite}/>
          </Route>
        </Switch>
      </Container>


    </Container>
  );
}

