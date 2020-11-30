import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import { Form, FormControl, Table, Badge } from "react-bootstrap";
import "./Searchbar.scss";

function Searchbar(props) {
  const [value, setValue] = useState("", () => Promise.resolve(true));
  const [searchResults, setSearchResults] = useState([]);
  const [hidden, setHidden] = useState("hidden");
  const [selected, setSelected] = useState(null);

  // searchbar resets any time the page changes
  useEffect(() => {
    setValue("");
    setSelected(null);
    setHidden("hidden");
  }, [props.state]);

  // detects whether mouseclick is inside or outside the search results
  // collapses search results if click is outside
  useEffect(() => {
    document.addEventListener("click", (e) => {
      let searchElement = document.querySelector("#search-results");
      let isClickInside = searchElement.contains(e.target);
      if (!isClickInside) {
        setSearchResults(null);
        setHidden("hidden");
      }
    });
  }, []);

  // searchresults auto focus and highlight on current result
  useEffect(() => {
    if (selected) {
      const selectedTD = document.querySelector("#selected");
      selectedTD.scrollIntoView({ block: "center" });
    }
  }, [selected]);

  // search for character
  function selectSearchItem(event, name) {
    props.getCharacter("none", name);
    event.target.value = null;
    const searchbar = document.querySelector("#search-bar > div > input");
    searchbar.value = null;
    setHidden("hidden");
  }

  // search for account
  function handleSubmit(event, name) {
    props.setAccount(name);
    props.setState("account");
    const searchbar = document.querySelector("#search-bar > div > input");
    searchbar.value = null;

    setHidden("hidden");
    event.preventDefault();
  }

  // every time a key is pressed in searchbar, the searchbar value is queried to DB
  let quickSearch = async function () {
    if (value.length > 0) {
      setHidden(null);
      const newSearchResults = await axios
        .get(`http://localhost:3030/search/${value}`)
        .then((res) => {
          return res.data.map((entry, index) => {
            let trClass;
            if (selected === null) {
              trClass = null;
            } else if (index === selected) {
              trClass = "selected";
            } else {
              trClass = null;
            }
            if (entry.type === "character") {
              return (
                <tr id={trClass}>
                  <td
                    onClick={(e) => {
                      selectSearchItem(e, entry.name);
                    }}
                  >
                    {entry.name} <Badge variant="primary">character</Badge>{" "}
                  </td>
                </tr>
              );
            } else {
              return (
                <tr id={trClass}>
                  <td
                    onClick={() => {
                      props.setAccount(entry.name);
                      const searchbar = document.querySelector(
                        "#search-bar > div > input"
                      );
                      searchbar.value = null;
                      props.setState("account");
                    }}
                  >
                    {entry.name} <Badge variant="secondary">account</Badge>{" "}
                  </td>
                </tr>
              );
            }
          });
        });

      setSearchResults(newSearchResults);
    } else {
      setHidden("hidden");
    }
  };

  useEffect(() => {
    quickSearch();
  }, [value, selected]);

  function searchText(e) {
    if (e.code !== "ArrowDown" && e.code !== "ArrowUp" && e.code !== "Enter") {
      setSelected(null);
      setValue(e.target.value);
    }
  }

  // filters A-Z characters vs. ArrowUp, ArrowDown and Enter keys
  function searchSelection(e) {
    if (e.code === "ArrowDown") {
      if (selected === null) {
        setSelected(0);
      } else {
        if (selected < searchResults.length - 1) {
          const newVal = selected + 1;
          setSelected(newVal);
        }
      }
    }
    if (e.code === "ArrowUp") {
      if (selected === 0) {
        setSelected(null);
      } else if (selected === null) {
      } else {
        const newVal = selected - 1;
        setSelected(newVal);
      }
    } else if (e.code === "Enter") {
      if (selected === null) {
        handleSubmit(e, e.target.value);
      } else {
        const selectedRow = document.querySelector("#selected > td").innerText;
        const rowValues = selectedRow.split(" ");
        if (rowValues[1] === "account") {
          handleSubmit(e, rowValues[0]);
        } else {
          selectSearchItem(e, rowValues[0]);
        }
      }
    }
  }

  return (
    <div>
      <Form
        className="my-2"
        autocomplete="off"
        onSubmit={(e) => e.preventDefault()}
        id="search-bar"
      >
        <div className="container">
          <FormControl
            type="text"
            placeholder="Search for Character or PoE Account name..."
            // value={value}
            name="search"
            id="search-bar"
            onKeyUp={(e) => searchText(e)}
            onKeyDown={(e) => searchSelection(e)}
          />
        </div>
      </Form>

      <div id="search-results-container">
        <div className={hidden} id="search-results">
          <Table striped hover>
            <tbody>{searchResults}</tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
export default Searchbar;
