import './Item.scss'

import { Popover, OverlayTrigger, Badge } from 'react-bootstrap'

import className from 'classnames'

export default function Item(props) {

  const itemType = className({
    "success": props.item.inventoryId === 'Ring' || props.item.inventoryId === 'Ring2' || props.item.inventoryId === 'Amulet',
    "danger": props.item.inventoryId === 'Offhand' || props.item.inventoryId === 'Offhand2',
    "warning": props.item.inventoryId
  })

  let implicitMods;
  let explicitMods;

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

  
  const popover = (
    <Popover id="popover-basic" style={{minWidth: '250px'}}>
      <Popover.Title className="item-title"><b>{props.item.name || "No name"}</b></Popover.Title>
      <Popover.Content style={{minHeight: '75px'}}>
        <div className="item-pills">
      <h6><Badge pill variant={itemType}>
        {props.item.inventoryId}  
       </Badge>{' '}</h6>
       <h6><Badge pill variant="dark">
        iLevel: {props.item.ilvl}
       </Badge>{' '}</h6>
        </div>
        {implicitMods && <div className="item-separator"/>}
      {implicitMods}
      {explicitMods && <div className="item-separator"/>}
      {explicitMods}
      </Popover.Content>
    </Popover>
  );

  return (
    <div className="item">
      <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
      <img className="icon" src={props.item.icon} />
      </OverlayTrigger>
    </div>
  )
}