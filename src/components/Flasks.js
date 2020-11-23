import Item from './Item'

import './Flasks.scss'

export default function Flasks(props) {
  const flasks = props.items.map((item) => {
    if (item.inventoryId === 'Flask') {
      return <Item windowWidth={props.windowWidth} item={item} />
    }
  })
  return (
    <div className="flasks-container">{flasks}</div>
  )
}