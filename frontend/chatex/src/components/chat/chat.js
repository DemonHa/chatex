import "./style.css";

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
      {children}
    </div>
  );
}

export {Chat, Message};