import React from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';

function App() {
  return (
    <>
      <TopBar />
      <Single />
    </>
  );
}

export default App;
