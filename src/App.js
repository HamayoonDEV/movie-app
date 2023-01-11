import Navbar from "./components/navbar";
import {data} from './data'
import Moviecard from "./components/moviecard";
import './app.css'
function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <div className="main" >
        <div className="tabs">
          <div className="tab" ><strong>Movies</strong></div>
          <div className="tab"> <strong> Favourties</strong></div>
        </div>
        <div className="list" >
          {data.map((movie,index)=>(
            <Moviecard movie={movie} key={`movie_${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
