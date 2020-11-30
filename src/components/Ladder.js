import Filter from "./Filter";
import LadderResponsive from "./LadderResponsive";

import React, { useState, useEffect } from "react";

import "./Ladder.scss";

// number of entries in the ladder and amount it increases by in the load more
const counter = 20;

function Ladder(props) {
    // the ladder json hardcoded
  const [data, setData] = useState([]);
    // all the json entries that are saved to DB
  const [filteredData, setFilteredData] = useState(null);
    // class filter
  const [filter, setFilter] = useState("");
  const [hasTwitch, setHasTwitch] = useState(false);
  const [hardcore, setHardcore] = useState(true);
  const [favouriteFilter, setFavouriteFilter] = useState(false);
    // the number of entries shown, used with Load More button
  const [visible, setVisible] = useState(counter);
  const [smallScreen, setSmallScreen] = useState(false);

  window.addEventListener("resize", () => handleResize());

    // whether the hardcore or softcore ladder is shown
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

    // filters data according to which filters are currently set
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
      return "Heist Hardcore Ladder";
    } else {
      return "Heist Ladder";
    }
  };

  const tableName = function () {
    if (hardcore) {
      return "Heist Hardcore Ladder";
    } else {
      return "Heist Ladder";
    }
  };

  const handleFilterChange = function (evt) {
    setFilter(evt.target.value);
  };

  const handleTwitchChange = function (evt) {
    setHasTwitch(evt.target.checked);
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
        setMsg={props.setMsg}
        addFavourite={props.addFavourite}
        removeFavourite={props.removeFavourite}
      />}
      </div>
      {filteredData && visible < filteredData.length && (
        <button
          className="loadMore"
          type="button"
          onClick={() => setVisible(visible + counter)}>
          Load More
        </button>

      )}
    </div>
  );
}

export default Ladder;
