import './Skills.scss'

import { Popover, OverlayTrigger, Badge } from 'react-bootstrap'

import className from 'classnames'

export default function Skills(props) {
  
  let gem;
  
  if (props.item.socketedItems && props.item.socketedItems[0]) {
    gem = props.item.socketedItems[0].typeLine
  }

  if (props.item.socketedItems) {
    gem = props.item.socketedItems.map((gem) => {
      if (gem.support) {
        return <div className="support-gem">{gem.typeLine}</div>
      } else {
        return <div className="active-gem">{gem.typeLine}</div>
      }
    })
  }


  return (
    <div>
      <p>{gem}</p>
    </div>
  )
}