import Navbar from "./components/navbar";
import {data} from './data'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main" >
        <div className="tabs">
          <div className="tab" >movies</div>
          <div className="tab">favourties</div>
        </div>
        <div className="list" >
          {data.map()}
        </div>
      </div>
    </div>
  );
}

export default App;
