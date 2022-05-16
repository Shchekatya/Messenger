import './App.css';
import { Form } from './components/Form/Form';
import { Message } from './components/Message/Message';
import {useEffect, useState} from "react";
import { ListItem } from "@material-ui/core";


function App() {
  const nameUser = 'Katya'; 

  const [messages, setMessages] = useState([]);

  const addMessage = (newText) => {
    setMessages([...messages, {author: nameUser, text: newText, id:Date.now()}]);   
  };

  useEffect( () => {
    setTimeout(()=> {
      if (messages.length>0) {
        alert('Message has sent')
      }
    }, 1000)  
  }, [messages])
  

  return (
    <div className="App" >
      <div>
      <ListItem>Chat #1</ListItem>      
      <ListItem>Chat #2</ListItem>
      </div>
      <div>
      {messages.map((msg) => {
        return (
          <div key={msg.id}>
          <Message author={msg.author} text={msg.text}/>
          </div>
        )
        
      })}
    </div>
     
    <Form onSubmit={addMessage}/>
    </div>
  );
}

export default App;
