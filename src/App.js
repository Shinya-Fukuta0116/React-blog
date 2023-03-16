import React from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/Write/Write';
import Settings from './pages/settings/Settings';



function App() {
  return (
    <>
      <TopBar />
      <Settings />
    </>
  );
}

export default App;
