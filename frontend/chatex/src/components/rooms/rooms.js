import "./style.css";

function RoomList({children}) {
  return (
    <div className="roomlist">
      {children}
    </div>
  );
}

function Room({name, onClick}) {
  return (
    <div className="room" onClick={onClick}>
      {name}
    </div>
  );
}

export {RoomList, Room};