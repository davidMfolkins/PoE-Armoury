import "../index.scss";
import Ladder from "./Ladder";
import Loading from "./Loading";
import Character from "./Character";
import Navigation from "./Navigation";
import Login from './Login';
import fetchCharacter from "./helpers/getters";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";

export default function Application() {
  const [state, setState] = useState("ladder");

  const [character, setCharacter] = useState(null);

  const randomInterval = function() {
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

  return (
    <Container fluid>
      <Navigation getCharacter={getCharacter} setState={setState} />
      
        
      <Container style={{ marginTop: "100px" }}>
      <Route exact path="/">
        {state === "ladder" && <Ladder getCharacter={getCharacter} />}
        {state === "character" && character && (
          <Character
            character={character.items}
            view={state}
          />
        )}
        {state === "character" && !character && (
          <Loading error={"No character found."} setState={setState} />
        )}
        {state === "loading" && <Loading />}
        </Route>
        <Route path="/login"><Login /></Route>
      </Container>
    
     
    </Container>
  );
}

