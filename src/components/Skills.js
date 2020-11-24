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
      return <tr><Skill gem={gem}/></tr>
    }
  })

  return (
  <div className="skills-container">
    <span>{props.itemName}</span>
    {gem}
  </div>
  )
}

{/* <div>
      <div>item name</div>
      <div className="skill-group">
        <div>icon active skill</div>
        <div>icon support</div>
        <div>icon support</div>
        <div>icon support</div>
      </div>
      ---------------------
    </div>
    <div>
      <div>item name</div>
      <div className="skill-group">
        <div>icon active skill</div>
        <div>icon support</div>
        <div>icon support</div>
        <div>icon support</div>
      </div>
      ---------------------
    </div>
    <div>
      <div>item name</div>
      <div className="skill-group">
        <div>icon active skill</div>
        <div>icon support</div>
        <div>icon support</div>
        <div>icon support</div>
      </div>
    </div> */}