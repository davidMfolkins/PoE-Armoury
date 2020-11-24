import { Container, Form, Button, Alert } from 'react-bootstrap'
import axios from 'axios';
import { useState } from 'react'

import './Register.scss'

export default function Register(props) {

  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault()
    const newUser = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value
    }

    if (newUser.password.length < 7) {
      setError('Password must be 7 characters or longer')
    } else if (newUser.name.length < 2) {
      setError('Name must be at least 2 characters long')
    } else {
      setError(null)
      axios.post('http://localhost:3030/users/register', newUser).then((res) => {
          props.handleCookie(res.data)
          props.setLoggedIn(true)
      }).catch((err) => {
        setError('Email already taken')
      })
    }
    
  }

  return (
  <Container>
  <div className="login-container">
      <div className="container login-form-container">
        {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicName">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Username" />
    <Form.Text className="text-muted">
      What should we call you? 
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="I agree" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </div>
  </div>
  </Container>
  )
}