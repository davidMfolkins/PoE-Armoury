import './Skills.scss'
import Skill from './Skill'
import className from 'classnames'

import React, { useState } from 'react';

export default function Skills (props) {

  const [gems, setGems] = useState({})

  const skills = props.items.map((item) => {
    const itemType = className({

    })
      return (
        <div ><Skill item={item} setGems={setGems}/></div>
      )
    
  })
 
  return (
    <div className="skills">
      {skills}
    </div>
  )
}