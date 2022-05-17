import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import hw7 from './hw7';
//import multiButton from'./cgu_multiButton';
function App() { 
  return ( 
    <div className="App"> 
    <div>
 {hw7}
    </div> 
    </div>
  ); 
} 
ReactDOM.render( 
  <div> 
    <App /> 
  </div>, 
  document.getElementById('root') 
);
reportWebVitals();