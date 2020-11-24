// character > items > Items.js > outputs items, sockets for those items and socketed items
// character > items > Skills.js > outputs skills into a table with the item as a header
// both Items.js and Skills.js want to display the skill information hoverover
// 

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
    console.log(quality)

      return <div><Skill gem={gem}/> {gem.typeLine} Level: {level} / Quality: {quality || "0"}</div>
    }
  })

  return (
  <div className="skills-container">
    <div>
      <span>{props.itemName}</span>
      {gem}
    </div>
  </div>
  )
}