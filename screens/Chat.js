import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { io } from 'socket.io-client';
import {
  Pusher,
  PusherMember,
  PusherChannel,
  PusherEvent,
} from '@pusher/pusher-websocket-react-native';
import pusherConfig from '../pusher.json';


const socket_url = 'http://localhost:3000';

export function Chat() {
  const [messages, setMessages] = useState([]);

  //setup socket
  this.pusher = new Pusher(pusherConfig.key, pusherConfig)

  this.channel = this.pusher.subscribe('messages');
  this.chatChannel.bind('pusher:subscription_succeeded', () => {
    console.log('subscription succeeded');
  });


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