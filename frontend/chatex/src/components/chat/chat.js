import { InfoIcon } from "./icons";
import "./style.css";

function MessageHeader() {
  return (
    <div className="chat--header">
      <div className="chat--header-room-name"># Social Media</div>
      <button className="chat--header-info"><InfoIcon /></button>
    </div>
  );
}

function MessageFooter() {
  return (<></>);
}

function Message({message}) {
  return (
    <div className="chat--message">
      {message}
    </div>
  );
}

function Chat({children}) {
  return (
    <div className="chat--container">
      <MessageHeader />
      {children}
      <MessageFooter />
    </div>
  );
}

export {Chat, Message};