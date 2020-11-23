import React from 'react';
import Items from './Items';
import Flasks from './Flasks'
import './Character.scss'

import { Row, Col } from 'react-bootstrap'

export default function Character(props) {
  console.log('character props:', props)
  const className = props.character.character.class

  const classIcon = `/icons/${className.toLowerCase()}_icon.png`
  return (

    <div className="container character-container char" style={{ borderRadius: '10px', overflow: 'hidden' }}>
      <Row className="p-5 char-title">
        <Col lg="auto"><img src={classIcon} alt={props.character.class} /></Col>
        <Col lg={5} className="my-auto">
          <h1 style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>{props.character.character.name}</h1>
          <h5 style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>{props.character.character.level} | {props.character.character.class}</h5>
        </Col>

      </Row>
      <Row className="p-3" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <Col>skills</Col>

        <Col>
          <Row>
            <Items items={props.character.items} />
          </Row>
          <Row>
            <Col>
              <Flasks items={props.character.items} />
            </Col>
          </Row>
        </Col>

      </Row>

    </div>
  );
};