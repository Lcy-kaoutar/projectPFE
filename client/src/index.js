import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import Router from './Router';

import { AuthContextProvider } from './context/AuthContext';


 //import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


