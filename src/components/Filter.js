import React, { useState, useEffect } from 'react';

import { Form, FormControl, Accordion, Card } from 'react-bootstrap'

import './Filter.scss'

function Filter(props) {

  const [hero, setHero] = useState("")
  const [min, setMin] = useState("")
  const [max, setMax] = useState("")

  const classFilter = function (e) {
    setHero(e.target.value)
  }

  const minFilter = function (e) {
    setMin(e.target.value)
  }

  const maxFilter = function (e) {
    setMax(e.target.value)
  }
  return (
    <Accordion className="accordianContainer">
      <Card>
        <Accordion.Toggle id="bootstrap" variant="link" eventKey="0">
          Filters
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body id="cardBody">
            <div className="filterContainer">
              <Form className="my-2" autocomplete="off">
                <div className="filterTitle">Class: </div>
                <FormControl type="text" placeholder="Class" name="search" value={hero} onChange={event => classFilter(event)} /><br></br>
                <div className="filterTitle">Level: </div>
                <FormControl type="text" placeholder="Min Level" name="search" value={min}  onChange={event => minFilter(event)}/><br></br>
                <FormControl type="text" placeholder="Max Level" name="search" value={max} onChange={event => maxFilter(event)}/>
              </Form>
            </div>
          </Card.Body>
        </Accordion.Collapse>

      </Card>
    </Accordion>
  )
}

export default Filter;