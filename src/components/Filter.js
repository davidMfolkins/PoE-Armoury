import React from "react";
import { Form, Accordion, Card } from "react-bootstrap";

import "./Filter.scss";

function Filter(props) {
  function handleFilterChange(evt) {
    props.onFilterChange(evt);
  }

  function handleTwitchChange(event) {
    props.onTwitchChange(event);
  }

  function handleFavouriteChange(event) {
    props.onFavouriteChange(event);
  }
  return (
    <Accordion className="accordianContainer">
      <Card>
        <div className="filter-buttons-container">
          <button
            type="button"
            id="ladderButton"
            onClick={() => props.setHardcore(!props.hardcore)}
          >
            {props.changeButton()}
          </button>
          <Accordion.Toggle id="bootstrap" variant="link" eventKey="0">
            Filters
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse eventKey="0" id="filter">
          <Card.Body id="cardBody">
            <div className="filterContainer">
              <Form inline className="my-2" autocomplete="off" id="filter-form">
                <div className="filter-container">
                  {/* <div className="filterTitle">Class: </div> */}
                  {/* <FormControl
                    type="text"
                    placeholder="Class"
                    name="hero"
                    value={props.filter}
                    onChange={handleFilterChange}
                  /> */}
                  <Form.Group controlId="class-select">
                    <Form.Label className="mr-2">Class:</Form.Label>
                    <Form.Control
                      className="mr-2"
                      as="select"
                      id="class-select"
                      custom
                      name="hero"
                      value={props.filter}
                      onChange={handleFilterChange}
                    >
                      <option value="">Select...</option>
                      <option>Ascendant</option>
                      <option>Assassin</option>
                      <option>Berserker</option>
                      <option>Champion</option>
                      <option>Chieftain</option>
                      <option>Deadeye</option>
                      <option>Elementalist</option>
                      <option>Gladiator</option>
                      <option>Guardian</option>
                      <option>Hierophant</option>
                      <option>Inquisitor</option>
                      <option>Juggernaught</option>
                      <option>Marauder</option>
                      <option>Necromancer</option>
                      <option>Occultist</option>
                      <option>Pathfinder</option>
                      <option>Raider</option>
                      <option>Ranger</option>
                      <option>Scion</option>
                      <option>Shadow</option>
                      <option>Slayer</option>
                      <option>Saboteur</option>
                      <option>Templar</option>
                      <option>Trickster</option>
                      <option>Witch</option>
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className="filter-container">
                  <Form.Check inline type="switch" id="switch-twitch">
                    <Form.Check.Input
                      type="checkbox"
                      aria-label="check box to check has twitch filter"
                      checked={props.hasTwitch}
                      onClick={handleTwitchChange}
                    />
                    <Form.Check.Label>Has Twitch</Form.Check.Label>
                  </Form.Check>
                </div>
                <div className="filter-container">
                  <Form.Check inline type="switch" id="switch-favourites">
                    <Form.Check.Input
                      disabled={!props.cookies.user}
                      aria-label="check box to only see favorites"
                      checked={props.favourited}
                      onClick={handleFavouriteChange}
                    />
                    <Form.Check.Label>Favourited</Form.Check.Label>
                    {!props.cookies.user && (
                      <Form.Control.Feedback
                        type="valid"
                        id="login-for-favourites"
                      >
                        Account required
                      </Form.Control.Feedback>
                    )}
                  </Form.Check>
                </div>
              </Form>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default Filter;
