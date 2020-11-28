import LikeButton from './LikeButton'
import { FaTwitch } from "react-icons/fa";
import { Table } from 'react-bootstrap'

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
      <tr id="ladderList" className="d-flex">
        <td className="col-2"><img src={classIcon} alt={entry.character.name} /></td>
        <td className="col-3" onClick={() => props.handleCharacterChange(entry.account.name, entry.character.name, entry.character.id)}>{entry.character.name} </td>
        <td className="col-2">{entry.character.level}</td>
        <td className="col-2">{className}</td>
    <td className="col-2">{entry.account.twitch && <a href={`https://twitch.tv/${entry.account.twitch.name}`} target="_blank" rel="noreferrer">{entry.account.twitch.name}</a>}</td>
    <td className="col-1">{props.cookies.user && <LikeButton characterid={entry.character.id} favourites={props.favourites} character={entry.character} removeFavourite={props.removeFavourite} addFavourite={props.addFavourite} size="1.5em" setMsg={props.setMsg}/>}</td>
      </tr>
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
              <tr className="d-flex">
                <th className="col-2">Icon</th>
                <th className="col-3">Name</th>
                <th className="col-2">Level</th>
                <th className="col-2">Class</th>
                <th className="col-2">Twitch</th>
                <th className="col-1">Fav</th>
              </tr>
        </thead>
      )
    }
  }
  return (
    <Table id="ladderTable" responsive striped bordered variant="dark">

      {head()}
      {rows}

    </Table>
  )
}