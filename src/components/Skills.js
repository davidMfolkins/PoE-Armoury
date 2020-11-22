import './Skills.scss'
import Skill from './Skill'
import className from 'classnames'


export default function Skills (props) {
  const items = props.items.map((item) => {
    if (item.socketedItems) {
     const gems = item.socketedItems.map((gem) =>{
       if(gem.abyssJewel) {

       } else {
         return <Skill gem={gem}/>
       }
     }) 
    }
  })
 
  return (
  <div className="inventory-container">
    <span>
      {gems}
    </span>
  </div>
  )
}