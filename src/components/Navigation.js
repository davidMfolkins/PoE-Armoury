import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Container } from 'react-bootstrap'
import './Navigation.scss'
import Searchbar from './Searchbar'

export default function Navigation(props) {
  return (
  
    <Navbar fixed="top" variant="dark" bg="dark" expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto"> 
        <Nav.Link className="mx-3 my-2"><span onClick={props.toggleView}>Home</span></Nav.Link>
        <Searchbar />
      </Nav>
      <Nav className="ml-auto">
      <Nav.Link className="mx-3 my-2" href="/">Login</Nav.Link>
      <Nav.Link className="mx-3 my-2" href="/">Register</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  )
}