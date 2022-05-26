import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { addChat } from '../../store/action';
import { Form } from '../Form/Form';
import './ChatList.style.css';


const ChatList = ({ chats, addChat, removeChat }) => {

  const handleSubmit = (newChatName) => {
    const newChat = {
      name: newChatName,
      id: Date.now()
    }

    addChat(newChat);
  };

  
    return (
        <>
        <div className='chats-list'>
        { chats.map((chat) => (
          <>
             <NavLink to={`${chat.id}`} key={chat.id}>{chat.name}</NavLink>
             <span onClick={() => removeChat(chat.id)}>delete</span>
         </> ))}         
        </div>
        <Form onSubmit={handleSubmit} />
        <Outlet />
        </>
    );
};

export default ChatList;