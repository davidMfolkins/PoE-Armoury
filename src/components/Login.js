import './Register.scss';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react'

export default function Login(props) {

  const [msg, setMsg] = useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    const newUser = {
      email: event.target[0].value,
      password: event.target[1].value
    }
    axios.post('http://localhost:3030/users/login', newUser).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        props.handleCookie(res.data);
      }
    }).catch(() => {
      setMsg('Email or password incorrect')
    })
  }

  return (
    <Container>
      <div className="login-container">
        {msg && <Alert variant="danger">{msg}</Alert>}
        <div className="registerTitle">Login</div>
        <div className="container login-form-container">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="button-container">
              <div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            </div>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  )
}