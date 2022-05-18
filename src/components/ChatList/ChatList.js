import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './ChatList.style.css';

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
]

const ChatList = () => {
    return (
        <>
        <div className='chats-list'>
        { chatsList.map((chat) => (
             <NavLink to={`${chat.id}`} key={chat.id}><div>{chat.name}</div></NavLink>
         ))}
        </div>
        <Outlet />
        </>
    );
};

export default ChatList;