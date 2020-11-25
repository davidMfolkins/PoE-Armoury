import './Skills.scss'
import Skill from './Skill'
import className from 'classnames'

export default function Skills (props) {

  const gem = props.gems.map(gem => {
    if (!gem.abyssJewel) {
      const level = gem.properties.map(property => {
        if (property.name === "Level") {
          return property.values[0][0].slice(0,2)
        }
      })

      let quality = null;
      gem.properties.map(property => {
        if (property.name === "Quality") {
          return quality = property.values[0][0].slice(1,3)
        }
      })

      return <div className="gemRow"><Skill gem={gem}/> <div className="gemName">{gem.typeLine} <div className="gemStats">(Level: {level} / Quality: {quality || "0"})</div></div></div>
    }
  })

  let connection = ""

  let groups = [];
  for (const socket of props.item.sockets) {
    if (socket.attr !== "A")
    groups.push(socket.group)
  }
  
  let linkedGroups = [];
  let current = 0;
  let count = 0;
  for (const socket of groups) {
    if (socket === current){
      count++
    } else {
      linkedGroups.push(count)
      current = socket
      count = 1
    }
  }
  linkedGroups.push(count)
  // console.log(props.item.inventoryId)
  // if (props.item.inventoryId === "Weapon") {
  //   console.log(props.item)
  // }
  // console.log(groups)
  console.log(props.item.inventoryId, linkedGroups)
  
  // for (const socket of linkedGroups) {
  //   switch(socket){
  //     case 1:
  //       connection = <div>--</div>
  //     break;
  //     case 2:
  //       connection = <div>--<br/>|<br/>--</div>
  //     break;
  //     case 3:

  //     break;
  //     case 4:

  //     break;
  //     case 5:

  //     break;
  //     case 6:

  //     break;
  //     case 7:

  //     break;
  //     case 8:

  //     break;
  //     case 9:

  //     break;
  //     case 10:
  //     break;
  //   }

  // }


  return (
  <div className="skills-container">
    <div>
      <hr className="line"/> 
      <span classname="gemGroup">{props.item.inventoryId}</span>
      {connection}{gem}
    </div>
  </div>
  )
}