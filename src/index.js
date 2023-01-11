import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {createStore} from 'redux'
import './index.css';
import App from './App';
import Movies from './reducer';


const store = createStore(Movies)
console.log("store",store)
console.log("before",store.getState())
store.dispatch({
  type:"ADD_MOVIES",
  movies:[{name:"pathan"}]
})
console.log("after state",store.getState())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>
  
);

