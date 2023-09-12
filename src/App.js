import './App.css';
import Data from './Component/Data';
import Pcompo from './Component/Pcompo';
import HighOrderCompo from './Component/HighOrderCompo';


function App() {
  return (
    <div className="App">
      <h1>Hands On - 05</h1>
      <HighOrderCompo value={Data}/>
      <Pcompo/>
      
    
      
    </div>
  );
}

export default App;
