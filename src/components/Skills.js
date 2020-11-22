import './Skills.scss'
import Skill from './Skill'
import className from 'classnames'


export default function Skills (props) {
  let gems;

  const items = props.items.map((item) => {
    if (item.socketedItems) {
     gems = item.socketedItems.map((gem) =>{
       if(gem.abyssJewel) {
         
       } else {
         return <Skill gem={gem}/>
       }
     }) 
    }
  })
 
  return (
  <div className="skills-container">
    <div>
      <div>item name</div>
      <div className="skill-group">
        <div>active skill</div>
        <div>support</div>
        <div>support</div>
        <div>support</div>
      </div>
      ---------------------
    </div>
    <div>
      <div>item name</div>
      <div className="skill-group">
        <div>active skill</div>
        <div>support</div>
        <div>support</div>
        <div>support</div>
      </div>
      ---------------------
    </div>
    <div>
      <div>item name</div>
      <div className="skill-group">
        <div>active skill</div>
        <div>support</div>
        <div>support</div>
        <div>support</div>
      </div>
    </div>
  </div>
  )
}