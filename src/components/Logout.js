import './Logout.scss';
import { Container } from 'react-bootstrap'

export default function Logout(props) {
  return (
    <Container>
      <div className="logout-container">
        <div className="container logout-form-container">

          You have been logged out successfully
      </div>
      </div>
    </Container>
  )
}