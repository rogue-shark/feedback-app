import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//syntax: ReactDOM.render(what we want to render - HTML, where we want to put this for it to render)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//React 18
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
