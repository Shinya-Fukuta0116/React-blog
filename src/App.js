import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TopBar from './TopBar/TopBar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <TopBar />
      <Home />
    </>
  );
}

export default App;
