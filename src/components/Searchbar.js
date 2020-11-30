import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Form, FormControl, Table, Badge } from "react-bootstrap";
import "./Searchbar.scss";

const className = require('classnames')

function Searchbar(props) {
  const [value, setValue] = useState("", () => Promise.resolve(true));
  const [searchResults, setSearchResults] = useState([]);
  const [hidden, setHidden] = useState('hidden')
  const [selected, setSelected] = useState(null)
  const [ searchValue, setSearchValue ] = useState(null)

  useEffect(() => {
      setValue('')
      setSelected(null)
      setHidden('hidden')

  }, [props.state])

  useEffect(() => {
    document.addEventListener('click', (e) => {
      let searchElement = document.querySelector('#search-results')
      let isClickInside = searchElement.contains(e.target)
      if (!isClickInside) {
        setSearchResults(null)
        setHidden('hidden')
      }
    })
  }, [])

  useEffect(() => {
    if (selected) {
    const selectedTD = document.querySelector('#selected')
    selectedTD.scrollIntoView({block: 'center'})
    }
  }, [selected])

  function selectSearchItem(event, name) {

    props.getCharacter('none', name);

    event.target.value = null;
    const searchbar = document.querySelector('#search-bar > div > input')
    searchbar.value = null;
    setHidden('hidden')
  }

  function handleSubmit (event, name) {

    console.log('searching for account...')
    props.setAccount(name)
    props.setState('account')
    const searchbar = document.querySelector('#search-bar > div > input')
    searchbar.value = null;

    setHidden('hidden')
    event.preventDefault();
  }

let quickSearch = async function () {
      const searchTerm = new RegExp(value);
      if (value.length > 0) {
        setHidden(null)
        // const searchValue = value.toLowerCase();
        const newSearchResults = await axios.get(`http://localhost:3030/search/${value}`).then((res) => {
          // console.log(res.data.searchItems)
          return res.data.map((entry, index) => {
            let trClass;
            if (selected === null) {
              trClass = null
            } else if (index === selected)  { 
              console.log(selected)
              trClass = 'selected'
            } else {
              trClass = null
            }
            if (entry.type === 'character') {
              return (
                <tr id={trClass}>
                  <td onClick={(e) => {
                    selectSearchItem(e, entry.name)
                  }
                  }>{entry.name}  <Badge variant="primary">character</Badge>{' '}</td>
                </tr>
              );
            } else {
              return (
                <tr id={trClass}>
                  <td onClick={() => {
                    props.setAccount(entry.name)
                    const searchbar = document.querySelector('#search-bar > div > input')
                    searchbar.value = null;
                    props.setState('account')
                  }
                  }>{entry.name}  <Badge variant="secondary">account</Badge>{' '}</td>
                </tr>
              );
            }
          });
        })

          setSearchResults(newSearchResults)
      } else {
        setHidden('hidden')
      }
  
      
    };

    useEffect(() => {
      console.log('quick searching...')
      quickSearch()
    }, [value, selected])

    function searchText(e) {
      if (e.code !== 'ArrowDown' && e.code !== 'ArrowUp' && e.code !== 'Enter') {
        console.log('not up, down, or enter')
        setSelected(null)
       setValue(e.target.value)
  
      }
    }


  function searchSelection(e) {
    console.log(e)
    console.log(e.target.value)
    console.log(e.code)
    console.log(selected)
    if (e.code === 'ArrowDown') {
      if (selected === null) {
        setSelected(0)
      } else {
        if (selected < searchResults.length - 1) {
          const newVal = selected + 1
          setSelected(newVal)
        }
      
      }
    }
    if (e.code === 'ArrowUp') {
      if (selected === 0) {
        setSelected(null)

      } else if (selected === null){

      } else {
        const newVal = selected - 1
        setSelected(newVal)
      }
    } else if (e.code === 'Enter') {
      if (selected === null) {
        handleSubmit(e, e.target.value)
      } else {
        const selectedRow = document.querySelector('#selected > td').innerText
        const rowValues = selectedRow.split(' ')
        console.log(rowValues)
        if (rowValues[1] === 'account') {
          handleSubmit(e, rowValues[0])
        }
        else {
          selectSearchItem(e, rowValues[0])
        }
      }
    } 
  }

  const searchRef = useRef(null);


  return (
    <div>
      <Form className="my-2" autocomplete="off" onSubmit={(e) => e.preventDefault() } id="search-bar">
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