import React from 'react';
import Items from './Items';

export default function Character(props) {
  console.log(props)
  return (
    <div className="Character">
      <h2>{props.character.character.name}</h2>
  <h3>{props.character.character.class}</h3>
  <h4>Level: {props.character.character.level}</h4>
      <Items items={props.character.items}/>
    </div>
  );
};