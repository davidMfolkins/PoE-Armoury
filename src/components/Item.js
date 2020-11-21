import './Item.scss'

import { Popover, OverlayTrigger, Badge } from 'react-bootstrap'

import className from 'classnames'

export default function Item(props) {

  const pillType = className({
    "success": props.item.inventoryId === 'Ring' || props.item.inventoryId === 'Ring2' || props.item.inventoryId === 'Amulet',
    "danger": props.item.inventoryId === 'Offhand' || props.item.inventoryId === 'Offhand2' || props.item.inventoryId === 'Weapon' || props.item.inventoryId === 'Weapon2',
    "warning": props.item.inventoryId
  })

  const itemType = className({
    // inventory position
    'item': props.item.inventoryId,
    'helm': props.item.inventoryId === 'Helm',
    "armour": props.item.inventoryId === 'BodyArmour',
    "gloves": props.item.inventoryId === 'Gloves',
    "boots": props.item.inventoryId === 'Boots',
    "ring": props.item.inventoryId === 'Ring',
    "ring2": props.item.inventoryId === 'Ring2',
    "offhand2": props.item.inventoryId === 'Offhand2',
    "amulet": props.item.inventoryId === 'Amulet',
    "belt":props.item.inventoryId === 'Belt',
    "weapon":props.item.inventoryId === 'Weapon',
  })

  const itemRarity = className({
    "unique": props.item.frameType === 3,
    "rare": props.item.frameType === 2,
    "magic": props.item.frameType === 1,
    "normal": props.item.frameType === 0
  })

  let implicitMods;
  let explicitMods;
  let properties;

  if (props.item.implicitMods) {
    implicitMods = props.item.implicitMods.map((mod) => {
      return <div className="implicit-mod">{mod}</div>
      })
    }

    if (props.item.explicitMods) {
   explicitMods = props.item.explicitMods.map((mod) => {
    return <div className="explicit-mod">{mod}</div >
    })
    }

    if (props.item.properties) {
      
      properties = props.item.properties.map((property) => {
        if (property.values[0]) {
        const textColor = className({
          "simple": property.values[0][1] === 0,
          "augmented": property.values[0][1] === 1,
          "fire": property.values[0][1] === 2,
          "cold": property.values[0][1] === 3,
          "lightning": property.values[0][1] === 4,
          "chaos": property.values[0][1] === 5
        })
        return <div className="property">{property.name}: <span className={textColor}>{property.values[0][0]}</span></div>
      }
        
      })
       }

  
  const popover = (
    <Popover id={itemRarity} style={{minWidth: '250px'}}>
      <Popover.Title className="item-title"><b>{props.item.name || "No name"}</b></Popover.Title>
      <Popover.Content style={{minHeight: '75px'}}>
        <div className="item-pills">
      <h6><Badge pill variant={pillType}>
        {props.item.inventoryId}  
       </Badge>{' '}</h6>
       <h6><Badge pill variant="dark">
        iLevel: {props.item.ilvl}
       </Badge>{' '}</h6>
        </div>
        {properties && <div className="item-separator"/>}
      {properties}
        {implicitMods && <div className="item-separator"/>}
      {implicitMods}
      {explicitMods && <div className="item-separator"/>}
      {explicitMods}
      </Popover.Content>
    </Popover>
  );

  return (
    <div className={itemType}>

      <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
      <img className="icon" src={props.item.icon} />
      </OverlayTrigger>

    </div>
  )
}