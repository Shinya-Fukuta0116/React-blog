import React from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/Write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';



function App() {
  return (
    <>
      <TopBar />
      <Login />
    </>
  );
}

export default App;
