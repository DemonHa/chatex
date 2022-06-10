import { RoomList, Room } from './components/rooms/rooms';
import { Chat, Message } from './components/chat/chat';

import { useState, useEffect } from "react";
import './App.css';

// import logo from './logo.svg';

function App() {

  const [room, setRoom] = useState(-1);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("api/rest/public/getdata")
    .then(res=> res.json())
    .then(res=> setData(res.rooms));
  }, []);

  return (
    <div className="App">
      <RoomList>
        {data.map((el, i) => <Room key={i} name={el.name} onClick={(e) => setRoom(i)} />)}
      </RoomList>
      <Chat>
        {room >= 0 && data[room].messages.map((el, i) => <Message key={i} message={el.id} />)}
      </Chat>
    </div>
  );
}

export default App;
