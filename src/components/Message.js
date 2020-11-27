import './Message.scss'

import { AiOutlineClose } from 'react-icons/ai'

export default function Message(props) {
  console.log(props.msg)
return <div className="message">{props.msg} <span style={{cursor: 'pointer', position: 'absolute', right: '5px'}}><AiOutlineClose onClick={() => props.setMsg(null)}></AiOutlineClose></span></div>
}