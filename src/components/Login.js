import './Register.scss';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default function Login(props) {

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
    })
  }

  return (
    <Container>
      <div className="login-container">
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