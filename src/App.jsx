import './App.css'
import Router from './router';
import Header from './components/Header/Header';
import SideNav from './components/SideNav/SideNav';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

function App() {

  return (
    <div id="app">
      <Header />
      <SideNav />
      <main className="mainContainer">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </main>
    </div>
  )
}

export default App
