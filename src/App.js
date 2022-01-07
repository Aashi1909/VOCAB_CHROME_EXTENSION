import logo from './logo.svg';
import './App.css';
import {Words} from './VocabList'
function App() {
  const randomnumber = Math.floor(Math.random() * Math.floor(Words.length))
  return (
    <div className="App">
      <h1>{Words[randomnumber].FIELD1}</h1>
      <h3>{Words[randomnumber].FIELD2}</h3>
  
    </div>
  );
}

export default App;
