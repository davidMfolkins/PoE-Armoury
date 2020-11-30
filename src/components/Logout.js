import { Container } from 'react-bootstrap'
import './Logout.scss';

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