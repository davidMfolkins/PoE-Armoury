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

  return (
  <div className="skills-container">
    <div>
      <hr className="line"/> 
      <span classname="gemGroup">{props.itemName}</span>
      {gem}
    </div>
  </div>
  )
}