import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import { Mainpage } from './pages/Mainpage'
import { Teams } from './pages/Teams'
import { Leaques } from './pages/Leaques'
import { Notfoundpage } from './pages/Notfoundpage'


const App = () => {
  return (
    <div className="App">

      <header>
        <div className="container">
          
          <Link to="/" className='text'> <div className="mainpage">Главная страница</div> </Link>
          
          {/*<a href="/leaques">Лиги</a>*   чтобы стр не перезагруж каждый раз, пишем Link*/}
          <Link to="/leaques" className='text'> <div className="leaquespage">Лиги</div> </Link>

          <Link to="/teams" className='text'> <div className="teamspage">Команды</div> </Link>
          
        </div>
      </header>

    {/*Для роутинга*/}
    <Routes>
      {/*Есть роут на опред.адрес*/}
      <Route path="/" element={<Mainpage />}/>
      <Route path="/teams" element={<Teams />}/>
      <Route path="/leaques" element={<Leaques />}/>
      {/*если ничего не найдено*/}
      <Route path="*" element={<Notfoundpage/>}/>
    </Routes>


    </div>
  );
}

export default App;
