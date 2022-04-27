import './App.css';
import { Message } from './components/Message/Message';

function App() {
  const nameUser = 'Katya'
  const name = 'Rinat'
  return (
    <div className="App">
     <Message name={name}/>
     <h1>With love, {nameUser}</h1>

    </div>
  );
}

export default App;
