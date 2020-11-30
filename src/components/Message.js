import { AiOutlineClose } from "react-icons/ai";
import "./Message.scss";

  // global message when liking/unliking a character
  // props.msg is the message
export default function Message(props) {
  return (
    <div className="message">
      {props.msg}{" "}
      <span style={{ cursor: "pointer", position: "absolute", right: "5px" }}>
        <AiOutlineClose onClick={() => props.setMsg(null)}></AiOutlineClose>
      </span>
    </div>
  );
}
