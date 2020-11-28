import LikeButton from './LikeButton'
import { FaTwitch } from "react-icons/fa";
import { Table, Col, Row} from 'react-bootstrap'
import './LadderResponsive.scss'

export default function LadderResponsive(props) {

  const rows = props.characters.slice(0, props.visible).map((entry) => {
    const className = entry.character.class
    const classIcon = `/icons/${className.toLowerCase()}_icon.png`
    if (props.smallScreen) {
      return (
        <tr id="ladderList" className="d-flex">
          <td className="col-10" onClick={() => props.handleCharacterChange(entry.account.name, entry.character.name, entry.character.id)}>
            <div className="ladder-entry-small">
        <div>
          <img src={classIcon} alt={entry.character.name} />
        </div>
        <div className="ladder-entry-small-inner">
          <div>
            <b>{entry.character.name}</b>
          </div>
          <div>
            {entry.character.level} | {entry.character.class}
          </div>
        </div>
            </div>
       
            </td>
          <td className="col-2">
            <div className="ladder-buttons-small">
            {props.cookies.user && 
            <div>
            <LikeButton characterid={entry.character.id} favourites={props.favourites} character={entry.character} removeFavourite={props.removeFavourite} addFavourite={props.addFavourite} size="1.3em" setMsg={props.setMsg}/>
            </div>
            }
            {entry.account.twitch &&
            <div>
              <a href={`https://twitch.tv/${entry.account.twitch.name}`} target="_blank" rel="noreferrer"><FaTwitch size="1.3em"></FaTwitch></a>
              </div>
            }     
          
            </div>
            </td>
            

           </tr>
      )
  

    } else if (!props.smallScreen) {  
    return (
      <Row as="tr" id="ladderList" className="d-flex">
        <Col as="td"><img src={classIcon} alt={entry.character.name} /><span style={{marginLeft: '0.5em'}}>{className}</span></Col>
        <Col as="td" onClick={() => props.handleCharacterChange(entry.account.name, entry.character.name, entry.character.id)}>{entry.character.name} </Col>
        <Col as="td" xs={1} sm={1}>{entry.character.level}</Col>

        {props.account && <Col as="td">{entry.character.league}</Col>}
    {!props.account && <Col as="td" className="d-none d-sm-flex" sm={2 } md={2} lg={2}>{entry.account.twitch && <a href={`https://twitch.tv/${entry.account.twitch.name}`} target="_blank" rel="noreferrer">{entry.account.twitch.name}</a>}</Col>}
    {!props.account && <Col as="td"xs={1} sm={1} md={1} lg={1}>{props.cookies.user && <LikeButton characterid={entry.character.id} favourites={props.favourites} character={entry.character} removeFavourite={props.removeFavourite} addFavourite={props.addFavourite} size="1.5em" setMsg={props.setMsg}/>}</Col>}
      </Row>
    )
    }
  })

  const head = function () {
    if (props.smallScreen) {
      return (
        <thead>
              <tr className="d-flex">
                <th className="col-12">Characters</th>
              </tr>
            </thead>
      )
    } else {
      return (
        <thead>
              <Row className="d-flex">
                {props.account && <Col as="th">Class</Col>}
                {props.account && <Col as="th" >Name</Col>}
                {props.account && <Col as="th" xs={1} sm={1}>Lvl</Col>}
                {!props.account && <Col as="th" xs={5} sm={4} md={4}>Class</Col>}
                {!props.account && <Col as="th" xs={5} sm={4} md={4}>Name</Col>}
                {!props.account && <Col as="th" xs={1} sm={1} lg={1}>Lvl</Col>}
                {props.account && <Col as="th" >League</Col>}
                {!props.account && <Col as="th" className="d-none d-sm-block" sm={2} md={2} lg={2}>Twitch</Col>}
                {!props.account && <Col as="th" xs={1} sm={1} md={1} lg={1}>Fav</Col>}
              </Row>
        </thead>
      )
    }
  }
  return (
    <Table id="ladderTable" striped bordered variant="dark">

      {head()}
      {rows}

    </Table>
  )
}