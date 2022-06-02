import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chats from './components/Chats';
import Comments from './components/Comments';
import Messages from './components/Messages';


function App() {   
 

  return (
    <Routes>
      <Route path='/chats' element={<Chats />} />
      <Route path='/message/:id' element={<Messages />}/>
      <Route path='/' element={<Comments />} />
   </Routes>

  );
}

export default App;
