import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Lifecycle from './m009/Lifecycle';
import UseEffect from './m010/UseEffect';

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
 */
/* ReactDOM.render(
  <Lifecycle />, document.getElementById('lifecycleDiv') // ohne Strict werden intervale nicht gecleart!  
) */

/* ReactDOM.render(
  <React.StrictMode>
    <Lifecycle />
  </React.StrictMode>, document.getElementById('lifecycleDiv')
)

let rootNode = document.getElementById('root')
setTimeout(() => ReactDOM.unmountComponentAtNode(rootNode as Element), 2000) // Fehler wegen setState in der Komponente
 */



ReactDOM.render(
  <React.StrictMode>
    <UseEffect />
  </React.StrictMode>, document.getElementById('useEffectDiv')
)

let useEffectDiv = document.getElementById('useEffectDiv')
setTimeout(() => ReactDOM.unmountComponentAtNode(useEffectDiv as Element), 2000) // Fehler wegen setState in der Komponente


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
