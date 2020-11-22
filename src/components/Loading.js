import './Loading.scss'

import Spinner from 'react-bootstrap/Spinner'

export default function Loading(props) {
  return <div className="container" id="container">
    <div style={{ textAlign: 'center', height: '50px' }}>
      <Spinner animation="grow" variant="danger" >
        <span className="sr-only">Loading...</span>
      </Spinner>
      <Spinner animation="grow" variant="success" >
        <span className="sr-only">Loading...</span>
      </Spinner>
      <Spinner animation="grow" variant="info" >
        <span className="sr-only">Loading...</span>
      </Spinner>
      <Spinner animation="grow" variant="warning" >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  </div>
}