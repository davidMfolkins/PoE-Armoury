import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Container } from 'react-bootstrap'
import './Navigation.scss'
import Searchbar from './Searchbar'

export default function Navigation(props) {

  return (
    <Navbar fixed="top" variant="dark" bg="dark" expand="lg">
      <Navbar.Brand id="nav-logo" style={{ cursor: 'pointer' }} href="/">PoE Armoury</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* <Nav className="mr-auto">
          <Nav.Link className="mx-3 my-2" onClick={() => props.setGrab(!props.grab)}>Seed</Nav.Link>

        </Nav> */}
        <Nav className="m-auto">
          <div id="search-container">
          <Searchbar id="poe-search" getCharacter={props.getCharacter} setState={props.setState} setAccount={props.setAccount} state={props.state} />
          </div>
        </Nav>
        {props.cookies.user &&
          <NavDropdown className="d-none d-lg-block" title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => props.setState('favourites')}>Favourites</NavDropdown.Item>
            <NavDropdown.Item href="/logout" onClick={(e) => props.removeCookie("user")}>Logout</NavDropdown.Item>
          </NavDropdown>
        }
        {props.cookies.user &&
          <Nav className="d-lg-none">
            <Nav.Link className="mx-3 my-2" onClick={() => props.setState('favourites')}>Favourites</Nav.Link>
            <Nav.Link className="mx-3 my-2" href="/logout" onClick={(e) => {
              props.removeCookie("user")
            }}>Logout</Nav.Link>
          </Nav>}
        {!props.cookies.user &&
          <Nav className="ml-auto">
            <Nav.Link className="mx-3 my-2" href="/login" onClick={(e) => {}}>Login</Nav.Link>
            <Nav.Link className="mx-3 my-2" href="/register" >Register</Nav.Link>
          </Nav>}
      </Navbar.Collapse>
    </Navbar>
  )
}