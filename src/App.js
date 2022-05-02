import './App.css';
import { Form } from './components/Form/Form';
import { Message } from './components/Message/Message';
import {useState} from "react";

function App() {
  const nameUser = 'Katya';
  const name = 'Rinat';
  const msgs=[
    {
      author: name,
      text: "text1"
    }
  ];

  const [messages, setMessages] = useState(msgs);

  const addMessage = (newText) => {
    setMessages([...messages, {author: nameUser, text: newText}]);
  };
  

  return (
    <div className="App">
      {messages.map((msg) => (
        <Message author={msg.author} text={msg.text} />
      ))}
     <Message name={name}/>
     <h1>With love, {nameUser}</h1>
    <Form onSubmit={addMessage}/>
    </div>
  );
}

export default App;
