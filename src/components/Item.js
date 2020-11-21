import './Item.scss'

import { Popover, OverlayTrigger, Badge } from 'react-bootstrap'

export default function Item(props) {

  const implicitMods = props.item.implicitMods.map((mod) => {
  return <div className="implicit-mod">{mod}</div>
  })
  const explicitMods = props.item.explicitMods.map((mod) => {
    return <div className="explicit-mod">{mod}</div >
    })

  
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title className="item-title"><b>{props.item.name}</b></Popover.Title>
      <Popover.Content>
        <div className="item-pills">
      <Badge pill variant="primary">
        {props.item.inventoryId}
       </Badge>{' '}
       <h6><Badge pill variant="dark">
        iLevel: {props.item.ilvl}
       </Badge>{' '}</h6>
        </div>
      {implicitMods}
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