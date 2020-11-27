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
import Grabber from './Grabber'
import Message from './Message'
import fetchCharacter from "./helpers/getters";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { addFavourite } from './helpers/getters'
import ScrollUpButton from "react-scroll-up-button";
import axios from 'axios'

const ladder_standard = require('../ladder_standard.json');
const ladder_hardcore = require('../ladder_hardcore.json');




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
  const [loadingMsg, setLoadingMsg] = useState(null)
  const [loadingError, setLoadingError] = useState(null)
  const [standardLadder, setStandardLadder] = useState([])
  const [hardcoreLadder, setHardcoreLadder] = useState([])
  const[ grab, setGrab] = useState(false)
  const [msg, setMsg] = useState(null)

  useEffect(() => {
    setState('loading')
    setLoadingMsg('Grabbing characters...')

    setTimeout(() => {

    axios.get('http://localhost:3030/characters')
    .then((res) => {
      console.log('characters from server: ',   res)
      const ladder_hardcore_display = ladder_hardcore.entries.reduce((accumulator, currentValue) => {
        if (res.data.filter(element => element.name === currentValue.character.name).length > 0) {
          return [...accumulator, currentValue]
        } else {
          return [...accumulator]
        }
        
    }, [])
    const ladder_standard_display = ladder_standard.entries.reduce((accumulator, currentValue) => {
      if (res.data.filter(element => element.name === currentValue.character.name).length > 0) {
        return [...accumulator, currentValue]
      } else {
        return [...accumulator]
      }
    
      
    }, [])

    setStandardLadder(ladder_standard_display)
    setHardcoreLadder(ladder_hardcore_display)

  }).then(() => {
    setState('ladder')
  })
}, 1000)
}, []);

  useEffect(() => {
    if (cookies.user) {
      setLoggedIn(true)
    }
  })

  const randomInterval = function () {
    return Math.floor((Math.random() * 500) + 100)
  }

  const getCharacter = function (accountName, characterName) {
    setState("loading");
    setTimeout(() => {
      fetchCharacter(accountName, characterName).then((res) => {
        console.log('fetch char result: ', res)
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
    if (cookies.user) {
      axios.get(`http://localhost:3030/users/${cookies.user}/favourites`).then((result) => {
        console.log('favs from server: ', result)
        if (result) {
        setFavourites(result.data)
        } 
      }).catch((err) => {
        console.log(err)
      })
    } else {
      setFavourites([])
    }
  }, [])

  function removeFavourite(name) {
    console.log('removing fav:', cookies.user, name)
   axios.delete(`http://localhost:3030/users/${cookies.user}/favourites/${name}`).then((result) => {
    //  console.log(result)
    //  console.log(favourites)
    //   const newFavourites = favourites.filter(fav => fav.character_name !== result.data[0].character_name)
    //   console.log(newFavourites)
      setFavourites(result.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  function addFavourite(name) {
    console.log('adding fav:', cookies.user, name)
    axios.post(`http://localhost:3030/users/${cookies.user}/favourites/${name}`).then((result) => {
      console.log(result)
      setFavourites(result.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <Container fluid>
      <Navigation setGrab={setGrab} grab={grab} getCharacter={getCharacter} setState={setState} removeCookie={removeCookie} cookies={cookies} setAccount={setAccount} />
      {msg && <Message msg={msg} setMsg={setMsg}/>}
      <Grabber grab={grab}/>
      <ScrollUpButton />
      <Container style={{ marginTop: "100px" }}>
        <Switch>
      <Route exact path="/">
        { state === 'loading' && <Loading />}
         {state === "account" && <Account account={account} getCharacter={getCharacter} setState={setState} />}
            {state === "ladder" && <Ladder getCharacter={getCharacter} setState={setState} standard={standardLadder} hardcore={hardcoreLadder} favourites={favourites} addFavourite={addFavourite} removeFavourite={removeFavourite} setMsg={setMsg} cookies={cookies}/>}

          {state === 'character' && character && <Character
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
          />}

        {state === 'favourites' && <Favourites favourites={favourites} removeFavourite={removeFavourite} getCharacter={getCharacter} setState={setState}/>}

        {state === "character" && !character && (
          <Loading error={loadingError} msg={loadingMsg} setState={setState} />
        )}
        {state === "loading" && <Loading error={loadingError} msg={loadingMsg} />}
        </Route>
        <Route path="/register">
          {!loggedIn && <Register handleCookie={handleCookie} setState={setState} setLoggedIn={setLoggedIn}/>}
          {loggedIn && <Redirect to="/"/>}
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

