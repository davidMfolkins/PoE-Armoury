import './Skills.scss'
import Skill from './Skill'
import className from 'classnames'
import { Table } from 'react-bootstrap'
import '../images/socket.png'

export default function Skills (props) {

  console.log(props.item.inventoryId)
  let groups = [];
  for (const socket of props.item.sockets) {
    if (socket.attr !== "A")
    groups.push(socket.group)
  }
  // console.log("groups:" , groups)
  
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

  // console.log("linkedGroups:" , linkedGroups)

  let finalArray = []
  for (const link of linkedGroups) {
    let numberOfTimes = link
    finalArray.push(link)
    while (numberOfTimes > 1) {
      finalArray.push(0)
      numberOfTimes--
    }
  }
  // console.log("finalArray:", finalArray)

  const gems = props.gems.map((gem, gemIndex) => {
    if (!gem.abyssJewel) {
      return gem;
    }
  })


  const builder = finalArray.map((connections, index) => {

    const gemSocket = gems.find(g => g.socket === index)

    let level;
    let quality = null;
    if (gemSocket) {
      gemSocket.properties.map(property => {
        if (property.name === "Level") {
          return level = property.values[0][0].slice(0,2)
        }
      })
      gemSocket.properties.map(property => {
        if (property.name === "Quality") {
          return quality = property.values[0][0].slice(1,3)
        }
      })
    }


    if (gems.some(g => g.socket === index)) {
      // console.log(connections, gemSocket.socket)
      if (connections) {
        return (
          <tr>
            <td rowspan={connections}>{connections} links</td>
            <td className="gemRow"><Skill gem={gemSocket}/> <div className="gemName">{gemSocket.typeLine} <div className="gemStats">(Level: {level} / Quality: {quality || "0"})</div></div></td>
          </tr>
        )
      } else {
        return (
          <tr>
            <td className="gemRow"><Skill gem={gemSocket}/> <div className="gemName">{gemSocket.typeLine} <div className="gemStats">(Level: {level} / Quality: {quality || "0"})</div></div></td>
          </tr>
        )
      }
    } else {
      // console.log(connections, "x")
      if (connections) {
        return (
          <tr>
            <td rowspan={connections}>{connections} links</td>
            <td className="gemRow">Empty Socket</td>
          </tr>
        )
      } else {
        return <tr><td className="gemRow">Empty Socket</td></tr>
      }
    }
  })

  return (
  <div className="skills-container">
      <hr className="line"/> 
      <span classname="gemGroup">{props.item.inventoryId}</span>
    <Table>
      <td>{builder}</td>
    </Table>
  </div>
  )
}