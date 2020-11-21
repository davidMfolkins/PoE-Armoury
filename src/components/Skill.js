import './Skill.scss'

import { Popover, OverlayTrigger, Badge } from 'react-bootstrap'

import className from 'classnames'

export default function Skill(props) {
  
  let gem;
  let groups;

  // if (props.item.socketedItems && props.item.socketedItems[0]) {
  //   gem = props.item.socketedItems.typeLine
  // }

  if (props.item.sockets) {
    groups = props.item.sockets.map((socket) => {
      return <div>{socket.group}</div>
    })
  }

  if (props.item.socketedItems) {
    gem = props.item.socketedItems.map((gem) => {
      if (gem.support) {
        return <div className="support-gem">{gem.typeLine} <img src={gem.icon}/></div>
      } else {
        return <div className="active-gem">{gem.typeLine} <img src={gem.icon}/></div>
      }
    })
  }



  return (
    <div>
      <p>{gem} {groups}</p>
    </div>
  )
}