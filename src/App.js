import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chats from './components/Chats';
import Messages from './components/Messages';


function App() {   
 

  return (
    <Routes>
      <Route path='/' element={<Chats />} />
      <Route path='/message/:id' element={<Messages />}/>
   </Routes>

  );
}

export default App;
