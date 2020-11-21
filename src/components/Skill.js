import './Skill.scss'

import { Popover, OverlayTrigger, Badge } from 'react-bootstrap'

import className from 'classnames'

export default function Skill(props) {

  let gems = [];
  let links = [];
  let newGems = {}
  let isSupport;
  let inventoryId = props.item.inventoryId;
  let gemNumber = 0;

  // props.setGems({...gems, newGems})

  if (props.item.inventoryId === "Offhand2" || props.item.inventoryId === "Weapon2") {
    return null
  } else {

    if (props.item.sockets) {
      props.item.sockets.map((socket) => {
        // if (socket.group === links[links.length - 1]) {
        //   links.push("-")
        // } else {
        //   links.push(" ")
        // }
        links.push(socket.group)
      })
    }
  
    if (props.item.socketedItems) {
      props.item.socketedItems.map((gem) => {
        gems.push(gem.typeLine)
        if (gem.support) {
          isSupport = true;
        } else {
          isSupport = false;
        }
        newGems = {[inventoryId]: {[gemNumber]: {isSupport, group: links[gemNumber], name: gem.typeLine}}}
        gemNumber++
        console.log(newGems)
      })
    }
  }

  // return <div className="active-gem">{gem.typeLine} <img src={gem.icon}/></div>
  // return <div className="support-gem">{gem.typeLine} <img src={gem.icon}/></div>


  return (
    <div>
      <p>{links}</p>
      <p>{gems}</p>
    </div>
  )
}