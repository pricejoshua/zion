import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { io } from 'socket.io-client';
import Pusher from 'pusher-js';
import pusherConfig from '../pusher.json';
import axios from 'axios';


const API_URL = 'https://zion.pricejoshua.com/api';
//setup socket
const pusher = new Pusher(pusherConfig.key, pusherConfig)

pusher.connect();



const Chat = ({ navigation, route }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/messages`).then((response) => {
      console.log(response.data);
      setMessages(parseMessages(response.data));
  })}, []);

  function parseMessage(message) {
    console.log(message, typeof message);
    var id;
    // check if message id exists

    if (message.id){
      id = message.id;
    } else {
      //generate random id
      id = Math.random().toString(36).substring(7);
    }

    if (message.created_at){
      var date = new Date(message.created_at);
    } else {
      var date = new Date();
    }

    const parsed = {
      _id: id,
      text: message.message,
      createdAt: new Date(date),
      user: {
        name: message.username,
        avatar: "https://placeimg.com/140/140/any",
      },
    };
    console.log('parsed', parsed);
    return parsed;
  }

  function parseMessages(messages) {
    if (Array.isArray(messages)) {
      return messages.map((message) => parseMessage(message)).sort((a, b) => b.createdAt - a.createdAt);
    }
    return [parseMessage(messages)];
  }

  const chatChannel = pusher.subscribe('message');
  chatChannel.bind("App\\Events\\MessageEvent", (data) => {
    // console.log(data);
    // console.log(typeof data);
    // convert data to json
    // const message = JSON.stringify(data);
    // console.log(message);
    // console.log(data);
    str = JSON.stringify(data);
    // console.log(str);
    message = JSON.parse(str);
    // console.log(message);
    const parsed = parseMessages(message);
    // console.log(parsed);
    setMessages(previousMessages => GiftedChat.append(previousMessages, parsed));
  });

  const onSend = useCallback((messages = []) => {
    for (let i = 0; i < messages.length; i++) {
      // post a message to the server using axios
      axios.post(`${API_URL}/messages`, {
        message: messages[i].text,
        username: 'Joshua',
      });
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