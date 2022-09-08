import React from 'react';
import ReactDOM from 'react-dom/client';
//для того, чтобы роутинг был доступен, необход.импорт.компонент BrowserRouter, он как провайдер
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*Сделали роутинг внутри App*/}
    <BrowserRouter> 
      <App />
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
