import * as React from 'react';
import './App.css'
import {Routes , Route } from 'react-router-dom'
import MainPage from './components/Pages/MainPage/MainPage.js'
import CardPage from './components/Pages/CardPage/CardPage.js'
import Login from './components/Authentification/Login/Login'
import Registration from './components/Authentification/Registration/Registration'
import Header from './components/Header/Header.js'

function App() {

  return (
    <div className="App">
       <Header />
       <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/anime/:id" element={<CardPage />} />
          <Route path="/log" element={<Login />} />
          <Route path="/reg" element={<Registration />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
