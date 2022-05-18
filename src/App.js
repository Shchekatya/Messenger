import './App.css';
import {Routes, Route, NavLink} from "react-router-dom";
import Home  from './components/Pages/Home';
import Profile from './components/Pages/Profile';
import Chats from './components/Pages/Chats';
import Layout from './components/Pages/Layout';
import NotFound from './components/Pages/NotFound';
import ChatList from './components/ChatList/ChatList';



function App() {   

  return (
    <div className="App" >        
        <Routes>
          <Route path='/' element={<Layout />}>
              <Route index element={<Home />}/>
              <Route path='/chats' element={<ChatList/>}> 
                 <Route path=':id' element={<Chats />}/> 
              </Route>               
              <Route path='/profile' element={<Profile />}/>
              <Route path='*' element={<NotFound />}/>
          </Route>
          
        </Routes>
   
    </div>
  );
}

export default App;
