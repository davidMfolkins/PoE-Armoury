import './Skill.scss'

import { Popover, OverlayTrigger, Badge } from 'react-bootstrap'

import className from 'classnames'

export default function Skill(props) {
  
  let gem;
  let groups;
  let links = [];

  if (props.item.inventoryId === "Offhand2" || props.item.inventoryId === "Weapon2") {
    return null
  } else {

    if (props.item.sockets) {
      props.item.sockets.map((socket) => {
        if (socket.group === links[links.length - 1]) {
          links.push("-")
        } else {
          links.push(" ")
        }
        links.push(socket.group)
        return <div>{links}</div>
      })
    }
  
    // if (props.item.socketedItems) {
    //   gem = props.item.socketedItems.map((gem) => {
    //     if (gem.support) {
    //       return <div className="support-gem">{gem.typeLine} <img src={gem.icon}/></div>
    //     } else {
    //       return <div className="active-gem">{gem.typeLine} <img src={gem.icon}/></div>
    //     }
    //   })
    // }
  }



  return (
    <div>
      <p>{gem} {links}</p>
    </div>
  )
}