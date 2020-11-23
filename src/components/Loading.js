import './Loading.scss'

import Spinner from 'react-bootstrap/Spinner'

export default function Loading(props) {


  return <div className="container" id="container">
    <div style={{textAlign: 'center', height: '50px'}}>
    {!props.error && 
    <div>
      <Spinner style={{width: '5em', height: '5em'}} animation="border" variant="warning" >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  }
  {props.error && 
  <div style={{color: 'white'}}>
    {props.error}
    <div>
      <a href="#" onClick={() => props.toggleView('ladder')}>Back</a>
    </div>
  </div>}

  </div>
</div>

}