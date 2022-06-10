import { RoomList, Room } from './components/rooms/rooms';
import { Chat } from './components/chat/chat';

import { useState, useEffect } from "react";
import './App.css';

// import logo from './logo.svg';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("api/rest/public/getdata")
    .then(res=> res.json())
    .then(res=>setData(res.rooms));
  }, []);

  return (
    <div className="App">
      <RoomList>
        {data.map((el, i) => <Room key={i} name={el.name} />)}
      </RoomList>
      <Chat></Chat>
    </div>
  );
}

export default App;
