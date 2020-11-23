import "../index.scss";
import Ladder from "./Ladder";
import Loading from "./Loading";
import Character from "./Character";
import Navigation from "./Navigation";
import fetchCharacter from "./helpers/getters";
import Container from "react-bootstrap/Container";
import { useState } from "react";

export default function Application() {
  const [state, setState] = useState("ladder");

  const [character, setCharacter] = useState(null);

  const toggleView = function () {
    if (state === "character") {
      setState("ladder");
    }
  };

  const getCharacter = function (accountName, characterName) {
    setState("loading");
    fetchCharacter(accountName, characterName).then((res) => {
      if (res.name === "Error") {
        setCharacter(null);
      } else {
        setCharacter(res);
      }
      setState("character");
    });
  };

  return (
    <Container fluid>
      <Navigation toggleView={toggleView} />
      <Container style={{ marginTop: "100px" }}>
        {state === "ladder" && <Ladder getCharacter={getCharacter} />}
        {state === "character" && character && (
          <Character
            character={character.items}
            toggleView={toggleView}
            view={state}
          />
        )}
        {state === "character" && !character && (
          <Loading error={"No character found."} toggleView={toggleView} />
        )}
        {state === "loading" && <Loading />}
      </Container>
    </Container>
  );
}

