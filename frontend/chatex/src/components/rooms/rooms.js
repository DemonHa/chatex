import "./style.css";

function RoomList({children}) {
  return (
    <div className="roomlist">
      {children}
    </div>
  );
}

function Room({name}) {
  return (
    <div className="room">
      {name}
    </div>
  );
}

export {RoomList, Room};