// character > items > Items.js > outputs items, sockets for those items and socketed items
// character > items > Skills.js > outputs skills into a table with the item as a header
// both Items.js and Skills.js want to display the skill information hoverover
// 

import './Skills.scss'
import Skill from './Skill'
import className from 'classnames'

export default function Skills (props) {

  // const items = props.items.map(item => {
  //   if (item.sockets) {
  //     console.log(item.socketedItems)
  //   }
  // })

  

  const items = props.items.map(item => {
    if (item.socketedItems) {
      return item.socketedItems
    }
  }).map(thing => {
    if (thing){
      console.log(thing)
      for (const gem of thing) {
        console.log("gem", gem.typeLine)
        return <div>{gem.typeLine}</div>
      }
    }
  })

  // map items for item
  // look through item for "socketedItems"
  // if it has "socketedItems" map for gem
  // if gem doesnt contain abyssalgem then put give it to Skill.js

  // const gems = props.gems.map((gem) => {
  //   if(gem.abyssJewel) {

  //   } else {
  //     return (
  //      <div className="skill">
  //        <Skill gem={gem}/>
  //      </div>
  //     )
  //   }
  // }) 

  return (
  <div className="skills-container">
    {items}
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