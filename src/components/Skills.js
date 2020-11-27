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

      // console.log("from inside gems:", finalArray)
      console.log("finalArray[gemIndex]", finalArray[gemIndex])

      if (finalArray[gemIndex]) {
        return (
          <tr>
            <td rowspan={finalArray[gemIndex]}>{finalArray[gemIndex]} links</td>
            <td className="gemRow"><Skill gem={gem}/> <div className="gemName">{gem.typeLine} <div className="gemStats">(Level: {level} / Quality: {quality || "0"})</div></div></td>
          </tr>
        )
      } else {
        return (
          <tr>
            <td className="gemRow"><Skill gem={gem}/> <div className="gemName">{gem.typeLine} <div className="gemStats">(Level: {level} / Quality: {quality || "0"})</div></div></td>
          </tr>
        ) 
      }
    }
  })

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
      <td>{gem}</td>
    </Table>
  </div>
  )
}