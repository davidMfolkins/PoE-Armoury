import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Form, FormControl, Table, Badge } from "react-bootstrap";
import "./Searchbar.scss";

const className = require('classnames')

function Searchbar(props) {
  const [value, setValue] = useState("", () => Promise.resolve(true));
  const [searchResults, setSearchResults] = useState([]);
  const [hidden, setHidden] = useState('hidden')
  const [selected, setSelected] = useState('hidden')

  useEffect(() => {
      setValue('')
      setSelected(null)
      setHidden('hidden')

  }, [props.state])

 
  


  function selectSearchItem(name) {
    props.getCharacter('none', name);
    setSearchResults(null)
    setValue("")
  }

  function handleSubmit (event, name) {
    console.log('searching for account...')
    props.setAccount(name)
    props.setState('account')
    setValue("")
    setSearchResults([])
    event.preventDefault();
  }

let quickSearch = async function () {
      const searchTerm = new RegExp(value);
      if (value.length > 0) {
        setHidden(null)
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
                  <td onClick={() => {
                    selectSearchItem(entry.name)
                    setHidden('hidden')
                  }
                  }>{entry.name}  <Badge variant="primary">character</Badge>{' '}</td>
                </tr>
              );
            } else {
              return (
                <tr id={trClass}>
                  <td onClick={() => {
                    props.setAccount(entry.name)
                    setValue('')
                    setSearchResults([])
                    setHidden('hidden')
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


  function searchSelection(e) {
    console.log(e)
    console.log(e.target.value)
    console.log(e.code)
    console.log(selected)
    if (e.code === 'ArrowDown') {
      if (selected === null) {
        setSelected(0)
      } else {
        console.log('selected:', selected)
        console.log('searchresults length: ', searchResults.length)
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
          selectSearchItem(rowValues[0])
        }
      }
    } else if (e.code !== 'ArrowDown' && e.code !== 'ArrowUp' && e.code !== 'Enter') {
      console.log('not up, down, or enter')
      setSelected(null)

     setValue(e.target.value)

    }
  }

  const searchRef = useRef(null);


  return (
    <div>
      <Form className="my-2" autocomplete="off" onSubmit={(e) => e.preventDefault() } id="search-bar">
        <div className="container">
        <FormControl
          type="text"
          placeholder="Search for player..."
          name="search"
          onKeyUp={(e) => searchSelection(e)}
        />
         </div>
      </Form>
     
      <div style={{ width: "200px"}}>
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