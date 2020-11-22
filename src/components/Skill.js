import './Skill.scss'

import { Popover, OverlayTrigger, Badge } from 'react-bootstrap'

import className from 'classnames'


export default function Skill (props) {


  const name = props.gem.typeLine

  let gemType;

  if (props.gem.support) {
    gemType = "support"
  } else {
    gemType = "active"
  }

  let properties;

  if (props.gem.properties) {
      
    properties = props.gem.properties.map((property) => {
      if (property.values[0]) {
        return <div className="property">{property.name}: <span >{property.values[0][0]}</span></div>
      } else {
        return <div className="property">{property.name}</div>
      }
    })
  }

  let requirements;

  if (props.gem.requirements) {
    requirements = props.gem.requirements.map((requirement) => {
    return <span className="requirement">{requirement.name} <span className="simple">{requirement.values[0][0]}</span></span>
    })
  }
  let additionalProperties;

  if (props.gem.additionalProperties) {
      
    additionalProperties = props.gem.additionalProperties.map((property) => {
      if (property.values[0]) {
        return <div className="property">{property.name}: <span >{property.values[0][0]}</span></div>
      } else {
        return <div className="property">{property.name}</div>
      }
    })
  }
  let secDescrText = props.gem.secDescrText;

  let explicitMods;
   
  if (props.gem.explicitMods) {
    explicitMods = props.gem.explicitMods.map((mod) => {
      return <div className="explicit-mod">{mod}</div >
    })
  }
  let descrText = props.gem.descrText;


  // const popover = (
  //   <Popover id={gemRarity} style={{minWidth: '300px'}}>
  //     <Popover.Title className="item-title"><b>{props.item.name || "No name"}</b>{props.item.typeLine && <div><b>{props.item.typeLine}</b></div>}</Popover.Title>
  //     <Popover.Content style={{minHeight: '75px'}}>
  //       <div className="item-pills">
  //     <h6><Badge pill variant={pillType}>
  //       {props.item.inventoryId}  
  //      </Badge>{' '}</h6>
  //      <h6><Badge pill variant="dark">
  //       iLevel: {props.item.ilvl}
  //      </Badge>{' '}</h6>
  //       </div>
        
  //       {properties && <div className="item-separator"/>}
  //     {properties}
  //     {requirements && <div className="item-separator"/>}
  //     {requirements && <span className="requirement">Requires</span>}
  //     {requirements}
  //       {implicitMods && <div className="item-separator"/>}
  //     {implicitMods}
  //     {explicitMods && <div className="item-separator"/>}
  //     {explicitMods}
  //     {flavourText && <div className="item-separator"/>}
  //     {flavourText}
  //     </Popover.Content>
  //   </Popover>
  // );


  
  return (
    <div>
      <div>{properties}</div>
      <div>{requirements}</div>
      <div>{additionalProperties}</div>
      <div>{secDescrText}</div>
      <div>{explicitMods}</div>
      <div>{descrText}</div>
    </div>
  )
}