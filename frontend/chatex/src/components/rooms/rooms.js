import { CreateMessageIcon } from "./icons";
import "./style.css";

function RoomHeader() {
  return (
    <div className="room--header-container room--padding">
      <div>
        <div>Acme Inc.</div>
        <div className="room--header-name">Sharon Robinson</div>
      </div>
      <button className="room--create-room"><CreateMessageIcon /></button>
    </div>
  );
}

function RoomList({children}) {
  return (
    <div className="room--container">
      <div className="room--theme-selector"></div>
      <div className="room--message-container">
        <RoomHeader />
        <div className="room--padding">
          <div className="room--messages-group">
            🏚 Rooms
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

function Room({name, onClick}) {
  return (
    <div className="room" onClick={onClick}>
      # {name}
    </div>
  );
}

export {RoomList, Room};