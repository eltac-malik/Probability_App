import './App.css';
import Input from './components/Input'
import Last10 from './components/last10';
import Last20 from './components/last20';
import Last30 from './components/last30';
import { Prov } from './context/Context';


function App() {
  return (
    <div className="App">
    <Prov>
      <Input/>
      <div className="result">
        <Last10 />
        <Last20 />
        <Last30 />
      </div>
      </Prov>
    </div>
  );
}

export default App;
