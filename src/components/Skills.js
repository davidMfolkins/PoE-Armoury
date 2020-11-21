import './Skills.scss'
import Skill from './Skill'
import className from 'classnames'

export default function Skills (props) {

  const skills = props.items.map((item) => {
    const itemType = className({

    })
      return (
        <div ><Skill item={item} /></div>
      )
    
  })
 
  return (
    <div className="skills">
      {skills}
    </div>
  )
}