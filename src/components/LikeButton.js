import { useState, Fragment } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import './LikeButton.scss'

const classNames = require('classnames')

export default function LikeButton(props) {


  const [ msg, setMsg ] = useState(null)

  console.log(props.favourites)
  console.log(props.character)

  const likeButtonStyle = classNames({
    "like-button": props.favourites,
    "liked": props.favourites.some(fav => fav.character_name === props.character.name)
  })

  async function likeButton() {
   setMsg(null)
    if (props.favourites.some(fav => fav.character_name === props.character.name)) {
     await props.removeFavourite(props.character.name)
      setMsg('Removed from favourites')
    } else {
      await props.addFavourite(props.character.name)
     setMsg('Added to favourites')
    }
  }
return  (
  <Fragment>
<AiFillHeart className={likeButtonStyle} onClick={likeButton} size={props.size}></AiFillHeart>
{msg && <span class="msg-animated">{msg}</span>}
</Fragment>
)
}