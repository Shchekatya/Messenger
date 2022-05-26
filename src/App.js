import './App.css';
import {Routes, Route, NavLink} from "react-router-dom";
import { Provider, useDispatch, useSelector } from 'react-redux';
import Home  from './components/Pages/Home';
import Profile from './components/Pages/Profile';
import Chats from './components/Pages/Chats';
import Layout from './components/Pages/Layout';
import NotFound from './components/Pages/NotFound';
import ChatList from './components/ChatList/ChatList';
import { store } from './store';
import { useState } from 'react';
import { addChat, deleteChat } from './store/action';

const initialChats = [
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

const nameUser = "Katya";
const initMessage = initialChats.reduce((acc, chat) => {
acc[chat.id]= [];
return acc;
}, {});

function App() {   
 
const [chats, setChats] = useState(initialChats);
const [messages, setMessages] = useState(initMessage);

  const chatList = useSelector((state) => state.chatList);
  const dispatch = useDispatch();
  const addMessage = (newText, id) => {
    //   setMessages([...messages, {author: nameUser, text: newText, id:Date.now()}]);   
     setMessages({...messages, [id]: [...messages[id], {author: nameUser, text: newText, id:Date.now()}, id]  });  
    };

  
    const addNewChat = (newChat) => {
     dispatch(addChat(newChat))
      setMessages(prevMessages => ({...prevMessages, [newChat.id]:[]}));
    };

    const removeChat = (id) => {
     dispatch(deleteChat(id));
      setMessages((prevMessages) => {
        const newMessages = {...prevMessages};
        delete newMessages[id];
        return newMessages;
      })
    }


  return (
   
    <div className="App" >        
        <Routes>
          <Route path='/' element={<Layout />}>
              <Route index element={<Home />}/>
              <Route path='/chats' element={<ChatList 
              addNewChat={addNewChat} 
              removeChat={removeChat}
              chats={chats}/>}> 
                 <Route path=':id' element={<Chats messages={messages} addMessage={addMessage}/>}/> 
              </Route>               
              <Route path='/profile' element={<Profile />}/>
              <Route path='*' element={<NotFound />}/>
          </Route>
          
        </Routes>
   
    </div>

  );
}

export default App;
