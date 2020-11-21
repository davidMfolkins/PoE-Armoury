import React from 'react';

import './Searchbar.scss'

function Searchbar() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Search.." name="search"></input>
        <button type="submit">Search</button>
    </form>
  </div>
  )
}

export default Searchbar;