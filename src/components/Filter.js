import React, { useState, useEffect } from 'react';

import { Form, FormControl, Accordion, Card } from 'react-bootstrap'

import './Filter.scss'

function Filter(props) {

  const [state, setState] = useState({
    hero: "",
    min: "",
    max: ""
  })

  function handleChange(evt) {
    
    setState({
      ...state,
      [evt.target.name]: evt.target.value
    });
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
                <FormControl type="text" placeholder="Class" name="hero" value={state.hero} onChange={handleChange}/><br></br>
                <div className="filterTitle">Level: </div>
                <FormControl type="text" placeholder="Min Level" name="min" value={state.min}  onChange={handleChange}/><br></br>
                <FormControl type="text" placeholder="Max Level" name="max" value={state.max} onChange={handleChange}/>
              </Form>
            </div>
          </Card.Body>
        </Accordion.Collapse>

      </Card>
    </Accordion>
  )
}

export default Filter;