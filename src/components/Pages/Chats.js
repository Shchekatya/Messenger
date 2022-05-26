import React from "react";
import { Message } from "../Message/Message";
import { Form } from "../Form/Form";
import { useParams } from "react-router-dom";
import './Chats.style.css';


const Chats = ({ messages, addMessage }) => {

 
    const { id } = useParams();   
    const nameUser = 'Katya'; 

   // const [messages, setMessages] = useState(firstMessages);
  
 
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