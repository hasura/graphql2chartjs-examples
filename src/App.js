import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Router from './components/Router';

const App = () => {
  let currentPath = '';
  if (typeof window) {
    currentPath = window.location.pathname;
  }
  return (
    <div>
      <NavBar />
      <Router path={currentPath}/>
    </div>
  )
}

export default App;
