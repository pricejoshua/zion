import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { io } from 'socket.io-client';

const socket_url = 'http://localhost:3000';

export function Chat() {
  const [messages, setMessages] = useState([]);

  //setup socket
  const socket = io('http://localhost:3000', { transports: ['websocket'] });

  socket.on('message', message => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, message));
  });


  const onSend = useCallback((messages = []) => {
    for (let i = 0; i < messages.length; i++) {
      socket.emit('message', messages[i]);
    }
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
}



export default Chat;