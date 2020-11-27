import { Fragment, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { GiBrokenHeart } from 'react-icons/gi'
import './LikeButton.scss'


const classNames = require('classnames')

export default function LikeButton(props) {

  const [unliked, setUnliked ] = useState(false)

  const likeButtonStyle = classNames({
    "like-button": props.favourites,
    "liked": props.favourites.some(fav => fav.character_name === props.character.name),
    "unliked": unliked
  })


  async function likeButton() {
   props.setMsg(null)
    if (props.favourites.some(fav => fav.character_name === props.character.name)) {
     await props.removeFavourite(props.character.name)
      setUnliked(true)
      props.setMsg(`Removed ${props.character.name} from favourites`)
    } else {
      setUnliked(false)
      await props.addFavourite(props.character.name)
     props.setMsg(`Added ${props.character.name} to favourites`)
    }
  }

  const heartIcon = () => {
    if (unliked) {
      return <GiBrokenHeart className={likeButtonStyle} onClick={likeButton} size={props.size}></GiBrokenHeart>
    } else {
      return <AiFillHeart className={likeButtonStyle} onClick={likeButton} size={props.size}></AiFillHeart>
    }
  }

return  (
  <Fragment>
  {heartIcon()}
</Fragment>
)
}