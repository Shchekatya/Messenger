import './App.css';
import {Routes, Route, NavLink} from "react-router-dom";
import { Provider } from 'react-redux';
import Home  from './components/Pages/Home';
import Profile from './components/Pages/Profile';
import Chats from './components/Pages/Chats';
import Layout from './components/Pages/Layout';
import NotFound from './components/Pages/NotFound';
import ChatList from './components/ChatList/ChatList';
import { store } from './store';


function App() {   

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
