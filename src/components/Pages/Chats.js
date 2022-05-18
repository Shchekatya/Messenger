import React from "react";
import { Message } from "../Message/Message";
import { Form } from "../Form/Form";
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ChatList from "../ChatList/ChatList";
import './Chats.style.css';

const Chats = () => {

    const chatsList = [
        {
          name: 'Chat#1',
          id:'chat1'
        },
        {
          name: 'Chat#2',
          id:'chat2'
        },
        {
          name: 'Chat#3',
          id:'chat3'
        },
    ];
     const firstMessages = {
        chat1: [],
        chat2: [],
        chat3: [],
     };

    const { id } = useParams();   
    const nameUser = 'Katya'; 

    const [messages, setMessages] = useState(firstMessages);
  
    const addMessage = (newText) => {
    //   setMessages([...messages, {author: nameUser, text: newText, id:Date.now()}]);   
      setMessages({...messages, [id]: [...messages[id], {author: nameUser, text: newText, id:Date.now()}]  });  
    };

  
    // useEffect( () => {
    //   setTimeout(()=> {
    //     if (messages.length>0) {
    //       alert('Message has sent')
    //     }
    //   }, 1000)  
    // }, [messages])

    return (
        <div className="chats">        
      
      {messages[id].map((msg) => {
        return (
          <div key={msg.id}>
          <Message author={msg.author} text={msg.text}/>
          </div>
        )        
      })}
    
     
    <Form onSubmit={addMessage}/>
        </div>
    );
};

export default Chats;