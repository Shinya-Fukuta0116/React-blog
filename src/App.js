import React from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/Write/Write';


function App() {
  return (
    <>
      <TopBar />
      <Write />
    </>
  );
}

export default App;
