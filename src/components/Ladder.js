import React, { useState, useEffect } from "react";

import "./Ladder.scss";
import Filter from "./Filter";
import LikeButton from "./LikeButton";
import LadderResponsive from "./LadderResponsive";
import { Table } from "react-bootstrap";
import { FaTwitch } from "react-icons/fa";

const counter = 20;

function Ladder(props) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(null);
  const [filter, setFilter] = useState("");
  const [hasTwitch, sethasTwtich] = useState(false);
  const [hardcore, setHardcore] = useState(true);
  const [visible, setVisible] = useState(counter);
  const [favouriteFilter, setFavouriteFilter] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  window.addEventListener("resize", () => handleResize());

  useEffect(() => {
    if (hardcore) {
      setData(props.hardcore);
    } else {
      setData(props.standard);
    }
  }, [hardcore]);

  function handleResize() {
    setSmallScreen(window.innerWidth < 480);
  }

  useState(() => {
    if (window.innerWidth < 480) {
      setSmallScreen(true);
    }
  }, []);

  let rows;

  if (filteredData) {
    rows = filteredData.slice(0, visible).map((entry) => {
      const className = entry.character.class;
      const classIcon = `/icons/${className.toLowerCase()}_icon.png`;
      if (smallScreen) {
        return (
          <tr id="ladderList" className="d-flex">
            <td
              className="col-10"
              onClick={() =>
                handleCharacterChange(
                  entry.account.name,
                  entry.character.name,
                  entry.character.id
                )
              }
            >
              <div className="ladder-entry-small">
                <div>
                  <img src={classIcon} alt={entry.character.name} />
                </div>
                <div className="ladder-entry-small-inner">
                  <div>
                    <b>{entry.character.name}</b>
                  </div>
                  <div>
                    {entry.character.level} | {entry.character.class}
                  </div>
                </div>
              </div>
            </td>
            <td className="col-2">
              <div className="ladder-buttons-small">
                {props.cookies.user && (
                  <div>
                    <LikeButton
                      characterid={entry.character.id}
                      favourites={props.favourites}
                      character={entry.character}
                      removeFavourite={props.removeFavourite}
                      addFavourite={props.addFavourite}
                      size="1.3em"
                      setMsg={props.setMsg}
                    />
                  </div>
                )}
                {entry.account.twitch && (
                  <div>
                    <a
                      href={`https://twitch.tv/${entry.account.twitch.name}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTwitch size="1.3em"></FaTwitch>
                    </a>
                  </div>
                )}
              </div>
            </td>
          </tr>
        );
      } else if (!smallScreen) {
        return (
          <tr id="ladderList" className="d-flex">
            <td className="col-2">
              <img src={classIcon} alt={entry.character.name} />
            </td>
            <td
              className="col-3"
              onClick={() =>
                handleCharacterChange(
                  entry.account.name,
                  entry.character.name,
                  entry.character.id
                )
              }
            >
              {entry.character.name}{" "}
            </td>
            <td className="col-2">{entry.character.level}</td>
            <td className="col-2">{className}</td>
            <td className="col-2">
              {entry.account.twitch && (
                <a
                  href={`https://twitch.tv/${entry.account.twitch.name}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {entry.account.twitch.name}
                </a>
              )}
            </td>
            <td className="col-1">
              {props.cookies.user && (
                <LikeButton
                  characterid={entry.character.id}
                  favourites={props.favourites}
                  character={entry.character}
                  removeFavourite={props.removeFavourite}
                  addFavourite={props.addFavourite}
                  size="1.5em"
                  setMsg={props.setMsg}
                />
              )}
            </td>
          </tr>
        );
      }
    });
  }

  useEffect(() => {
    if (data) {
      const newArray = data
        .filter((hero) =>
          hero.character.class.toLowerCase().includes(filter.toLowerCase())
        )
        .filter((hero) => !hasTwitch || hero.account.twitch)
        .filter(
          (hero) =>
            !favouriteFilter ||
            props.favourites.some(
              (fav) => fav.character_name === hero.character.name
            )
        );
      setFilteredData(newArray);
    }
  }, [data, filter, hasTwitch, favouriteFilter]);

  const changeButton = function () {
    if (!hardcore) {
      return "Hardcore Ladder";
    } else {
      return "Standard Ladder";
    }
  };

  const tableName = function () {
    if (hardcore) {
      return "Hardcore Ladder";
    } else {
      return "Standard Ladder";
    }
  };

  const handleFilterChange = function (evt) {
    setFilter(evt.target.value);
  };

  const handleTwitchChange = function (evt) {
    sethasTwtich(evt.target.checked);
  };

  const handleCharacterChange = function (account, character, id) {
    props.getCharacter(account, character);
  };

  const handleFavouriteFilter = function (evt) {
    setFavouriteFilter(evt.target.checked);
  };

  return (
    <div className="ladderPage">
      
      <div className="ladderTitle">{tableName()}</div>
      <div id="topButtons">
        <Filter
          cookies={props.cookies}
          hardcore={hardcore}
          changeButton={changeButton}
          setHardcore={setHardcore}
          filter={filter}
          hasTwtich={hasTwitch}
          favourited={favouriteFilter}
          onFilterChange={handleFilterChange}
          onTwitchChange={handleTwitchChange}
          onFavouriteChange={handleFavouriteFilter}
        />
      </div>

      <div className="ladderContainer">
      {filteredData && <LadderResponsive
        characters={filteredData}
        visible={visible}
        smallScreen={smallScreen}
        handleCharacterChange={handleCharacterChange}
        cookies={props.cookies}
        favourites={props.favourites}
        
      />}
      </div>
      {filteredData && visible < filteredData.length && (
        <button
          className="loadMore"
          type="button"
          onClick={() => setVisible(visible + counter)}
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Ladder;
