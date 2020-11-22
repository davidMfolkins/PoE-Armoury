import './Skills.scss'
import Skill from './Skill'
import className from 'classnames'

export default function Skills (props) {

  const gems = props.gems.map((gem) => {
    if(gem.abyssJewel) {

    } else {
      return (
       <div className="skill">
         <Skill gem={gem}/>
       </div>
      )
    }
  }) 

  return (
  <div className="skills-container">
    
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