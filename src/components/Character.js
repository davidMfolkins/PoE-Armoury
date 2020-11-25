import React from 'react';
import Items from './Items';
import Flasks from './Flasks'
import LikeButton from './LikeButton'

import Skills from './Skills'

import './Character.scss'



import { Row, Col } from 'react-bootstrap'

import { useState, useEffect } from 'react'

import { AiFillHeart } from 'react-icons/ai'

const classNames = require('classnames')

export default function Character(props) {

  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)

  const [ msg, setMsg ] = useState(null)

  const gems = props.character.items.map(item => {
    if (item.inventoryId === "Offhand2" || item.inventoryId === "Weapon2") {

    } else {
      if (item.socketedItems) {
        return <Skills itemName={item.inventoryId} gems={item.socketedItems} />
      }
    }
  })

  useEffect(() => {
    function handleResize () {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
  })

  const charClass = props.character.character.class
  const classIcon = `/icons/${charClass.toLowerCase()}_icon.png`
  return (

    <div className="container character-container char" style={{ borderRadius: '10px', overflow: 'hidden' }}>
      <Row className="p-5 char-title">
        <Col lg="auto" ><img src={classIcon} alt={props.character.class} /></Col>
        <Col lg={5}  className="my-auto">
          <h1 style={{ backgroundColor: "rgba(0,0,0,0.5)"}}>{props.character.character.name}</h1>
          <h5 style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>{props.character.character.level} | {props.character.character.class}</h5>
        </Col>
        <Col>
        {props.cookies.user &&<LikeButton character_id={props.character_id} favourites={props.favourites} addFavourite={props.addFavourite} removeFavourite={props.removeFavourite} setMsg={setMsg} size="4em"/>}
        {msg && <div className="msg-animated">{msg}</div>}
        </Col>
      

      </Row>
      <Row className="p-3" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>

        <Col lg={6} xs={12}><Skills items= {props.character.items}/></Col>
       
        <Col lg={6} xs={12}> {gems}</Col>

        <Col>
          <Row>
            <Items windowWidth={windowWidth} items={props.character.items} />
          </Row>
          <Row>
            <Col>
              <Flasks windowWidth={windowWidth} items={props.character.items} />
            </Col>
          </Row>
        </Col>

      </Row>

    </div>
  );
};