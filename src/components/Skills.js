import './Skills.scss'
import Skill from './Skill'
import className from 'classnames'
import { Table } from 'react-bootstrap'

export default function Skills (props) {

  // let groups = [];
  // for (const socket of props.item.sockets) {
  //   if (socket.attr !== "A")
  //   groups.push(socket.group)
  // }
  
  // let linkedGroups = [];
  // let current = 0;
  // let count = 0;
  // for (const socket of groups) {
  //   if (socket === current){
  //     count++
  //   } else {
  //     linkedGroups.push(count)
  //     current = socket
  //     count = 1
  //   }
  // }
  // linkedGroups.push(count)

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

      return <td className="gemRow"><Skill gem={gem}/> <div className="gemName">{gem.typeLine} <div className="gemStats">(Level: {level} / Quality: {quality || "0"})</div></div></td>
    }
  })

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

  let finalArray = []
  for (const link of linkedGroups) {
    let numberOfTimes = link
    finalArray.push(link)
    while (numberOfTimes > 1) {
      finalArray.push(0)
      numberOfTimes--
    }
  }
  console.log(finalArray)

  // console.log(props.item.inventoryId)
  // if (props.item.inventoryId === "Weapon") {
  //   console.log(props.item)
  // }
  // console.log(groups)
  console.log(props.item.inventoryId, linkedGroups)

  // const connection = linkedGroups.map(links => {
  //   return <tr><td rowSpan={links}>{links}</td></tr>
  // })
  
  // console.log(connection)

  // each links in linkedGroups is a counter of gem rows until the next links

  // we have gems and connection
  // make a new fuction "groups"
  // groups will take in gems and connection and output a table
  // the first row of each table will always output both connection and gem
  // the next rows may or may not have connection but will always have gem
  // table construction function will return <tr>{connection} {gem} <tr>

  return (
  <div className="skills-container">
      <hr className="line"/> 
      <span classname="gemGroup">{props.item.inventoryId}</span>
    <Table>
      {/* <td>{connection}</td> */}
      <td>{gem}</td>
    </Table>
  </div>
  )
}