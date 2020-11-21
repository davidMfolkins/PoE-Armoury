import './Items.scss'
import Item from './Item'
import className from 'classnames'


export default function Items (props) {

  const items = props.items.map((item) => {
    const itemType = className({
      'inventory-helm': item.inventoryId === 'Helm',
      "inventory-armour": item.inventoryId === 'BodyArmour',
      "inventory-gloves": item.inventoryId === 'Gloves',
      "inventory-boots": item.inventoryId === 'Boots',
      "inventory-ring": item.inventoryId === 'Ring',
      "inventory-ring2": item.inventoryId === 'Ring2',
      "inventory-offhand2": item.inventoryId === 'Offhand2',
      "inventory-amulet": item.inventoryId === 'Amulet',
      "inventory-belt":item.inventoryId === 'Belt',
      "inventory-weapon":item.inventoryId === 'Weapon'
    })
      return (
        <div className={itemType}><Item item={item} /></div>
      )
    
  })
 
  return (
    <div className="inventory">
      {items}
    </div>
  )
}