import { Fragment } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import './LikeButton.scss'

const classNames = require('classnames')

export default function LikeButton(props) {

  const likeButtonStyle = classNames({
    "like-button": props.favourites,
    "liked": props.favourites.some(fav => fav.character_name === props.character.name)
  })

  async function likeButton() {
   props.setMsg(null)
    if (props.favourites.some(fav => fav.character_name === props.character.name)) {
     await props.removeFavourite(props.character.name)
      props.setMsg(`Removed ${props.character.name} from favourites`)
    } else {
      await props.addFavourite(props.character.name)
     props.setMsg(`Added ${props.character.name} to favourites`)
    }
  }
return  (
  <Fragment>
<AiFillHeart className={likeButtonStyle} onClick={likeButton} size={props.size}></AiFillHeart>
</Fragment>
)
}