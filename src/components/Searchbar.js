import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, FormControl, Table, Badge } from "react-bootstrap";
import "./Searchbar.scss";
let charName = "";
function Searchbar(props) {
  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  function selectSearchItem (name) {
    props.getCharacter('none', name);
    setSearchResults(null)
    setValue("")
  }

  const quickSearch = async function (e) {
    setValue(e.target.value);
    const searchTerm = new RegExp(value);
    if (value.length > 0) {
    const newSearchResults = await axios.get(`http://localhost:3030/search/${value}`).then((res) => {
      // console.log(res.data.searchItems)
      return res.data.searchItems.map((entry) => {
        if (entry.type === 'character') {
          return (
                  <tr>
                    <td onClick={() => selectSearchItem(entry.name)}>{entry.name}  <Badge variant="primary">character</Badge>{' '}</td>
                  </tr>
                );
        } else {
          props.setState("account")
          return (
                  <tr>
                    <td onClick={() => props.setAccount(entry.name)}>{entry.name}  <Badge variant="secondary">account</Badge>{' '}</td>
                  </tr>
                );
        }
      });
    })
    if (!e.target.value) {
      setSearchResults([null]);
    } else {
      setSearchResults(newSearchResults);
    }
  }
  };
  return (
    <div>
      <Form className="my-2" autocomplete="off">
        <FormControl
          type="text"
          placeholder="Search for player..."
          name="search"
          value={value}
          onChange={(event) => quickSearch(event)}
        />
      </Form>
      <div style={{ width: "200px" }}>
        <Table striped hover className="search-results">
          <tbody>{searchResults}</tbody>
        </Table>
      </div>
    </div>
  );
}
export default Searchbar;