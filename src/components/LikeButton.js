import { useEffect } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import './LikeButton.scss'

const classNames = require('classnames')

export default function LikeButton(props) {

  const likeButtonStyle = classNames({
    "like-button": props.favourites,
    "liked": props.favourites.some(fav => fav.character_id === props.character_id)
  })

  async function likeButton() {
    props.setMsg(null)
    if (props.favourites.some(fav => fav.character_id === props.character_id)) {
     await props.removeFavourite(props.character_id)
      props.setMsg('Removed from favourites')
    } else {
      await props.addFavourite(props.character_id)
      props.setMsg('Added to favourites')
    }
  }
  return  <AiFillHeart className={likeButtonStyle} onClick={likeButton} size={props.size}/>
}