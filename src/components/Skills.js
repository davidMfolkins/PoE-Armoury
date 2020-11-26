import './Skills.scss'
import Skill from './Skill'
import className from 'classnames'
import { Table } from 'react-bootstrap'

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

  const gem = props.gems.map((gem, gemIndex) => {
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

      return gem;

    }
  })


  const builder = finalArray.map((connections, index) => {

    const gemSocket = gem.find(g => g.socket === index)

    if (gem.some(g => g.socket === index)) {
      console.log(connections, gemSocket.socket)
      if (connections) {
        return (
          <tr>
            <td rowspan={connections}>{connections} links</td>
            {/* <td className="gemRow"><Skill gem={gemSocket}/> <div className="gemName">{gemSocket.typeLine} <div className="gemStats">(Level: {level} / Quality: {quality || "0"})</div></div></td> */}
            <td className="gemRow"><Skill gem={gemSocket}/> <div className="gemName">{gemSocket.typeLine}</div></td>
          </tr>
        )
      } else {
        return <tr><td className="gemRow"><Skill gem={gemSocket}/> <div className="gemName">{gemSocket.typeLine}</div></td></tr>
      }
    } else {
      console.log(connections, "x")
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

  // if (finalArray[gemIndex]) {

  // } else {
  //   return (
  //     <tr>
  //       <td className="gemRow"><Skill gem={gem}/> <div className="gemName">{gem.typeLine} <div className="gemStats">(Level: {level} / Quality: {quality || "0"})</div></div></td>
  //     </tr>
  //   ) 
  // }

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