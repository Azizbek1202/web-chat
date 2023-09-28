import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import ChatRoom from "./ChatRoom";

function App() {
  const [message, setMessage] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // connect to WebSocket server
    const newSocket = io("http://localhost:8080");
    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('Connected to server', newSocket.id);
    });

      newSocket.on('disconnect', () => {
      console.log('Disconnected from server');

    });
  }, []);
  return (
    <div className="App">
      <ChatRoom />
    </div>
  );
}

export default App;
