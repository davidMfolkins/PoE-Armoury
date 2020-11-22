import './Items.scss'
import Item from './Item'
import Skills from './Skills'
import className from 'classnames'


export default function Items (props) {
  const items = props.items.map((item) => {  
    if (item.inventoryId === 'Flask') {

    } else {
      return <Item item={item}/>
    }
     
  })
  
  return (
    <div className="inventory-container">
      <span>
        {items}
      </span>
    </div>
  )
    
}