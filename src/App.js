import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chats from './components/Chats';
import Comments from './components/Comments';
import Home from './components/Home';
import Login from './components/Login';
import Messages from './components/Messages';
import Register from './components/Register';


function App() {   
 

  return (
    <Routes>
      <Route path='/chats' element={<Chats />} />
      <Route path='/message/:id' element={<Messages />}/>
      <Route path='/comments' element={<Comments />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/' element={<Home/>}/>
   </Routes>

  );
}

export default App;
