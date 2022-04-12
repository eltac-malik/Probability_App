import './App.css';
import Input from './components/Input'
import Last10 from './components/last10';
import Last20 from './components/last20';
import Last30 from './components/last30';

function App() {
  return (
    <div className="App">
      <Input/>
      <div className="result">
        <Last10 />
        <Last20 />
        <Last30 />
      </div>
    </div>
  );
}

export default App;
