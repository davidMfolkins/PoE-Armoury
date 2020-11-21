import React, { useState } from 'react';

import './Searchbar.scss'

function Searchbar() {

  const [value, setValue] = useState("")

  return (
    <div>
      <form onSubmit={event => event.preventDefault()}>
        <input 
        type="text" 
        placeholder="Search Ladder..." 
        name="search"
        value={value}
        onChange={event => setValue(event.target.value)}/>
    </form>
  </div>
  )
}

export default Searchbar;