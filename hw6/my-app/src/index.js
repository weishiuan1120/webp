import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const multiButton=()=>{
  var output=[10];

      output[0]=<button id="k" onClick={clickmultiButton}>我是第0個按鍵</button>
      output[1]=<button id="k1" onClick={clickmultiButton1}>我是第1個按鍵</button>
      output[2]=<button id="k2" onClick={clickmultiButton2}>我是第2個按鍵</button>
      output[3]=<button id="k3" onClick={clickmultiButton3}>我是第3個按鍵</button>
      output[4]=<button id="k4" onClick={clickmultiButton4}>我是第4個按鍵</button>
      output[5]=<button id="k5" onClick={clickmultiButton5}>我是第5個按鍵</button>
      output[6]=<button id="k6" onClick={clickmultiButton6}>我是第6個按鍵</button>
      output[7]=<button id="k7" onClick={clickmultiButton7}>我是第7個按鍵</button>
      output[8]=<button id="k8" onClick={clickmultiButton8}>我是第8個按鍵</button>
      output[9]=<button id="k9" onClick={clickmultiButton9}>我是第9個按鍵</button>
  return output;
} 
function clickmultiButton(){
document.getElementById('k').innerHTML='第0個按鈕被按'}
function clickmultiButton1(){
document.getElementById('k1').innerHTML='第1個按鈕被按'}
function clickmultiButton2(){
document.getElementById('k2').innerHTML='第2個按鈕被按'}
function clickmultiButton3(){
document.getElementById('k3').innerHTML='第3個按鈕被按'}
function clickmultiButton4(){
document.getElementById('k4').innerHTML='第4個按鈕被按'}
function clickmultiButton5(){
document.getElementById('k5').innerHTML='第5個按鈕被按'}
function clickmultiButton6(){
document.getElementById('k6').innerHTML='第6個按鈕被按'}
function clickmultiButton7(){
document.getElementById('k7').innerHTML='第7個按鈕被按'}
function clickmultiButton8(){
document.getElementById('k8').innerHTML='第8個按鈕被按'}
function clickmultiButton9(){
document.getElementById('k9').innerHTML='第9個按鈕被按'}
function App() { 
  return ( 
    <div className="App"> 
 { multiButton() }
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