import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePageComponent from './components/HomePageComponent';
import DesignSystem from './components/design-components/DesignSystem';

function App() {
  return (
    <Router>

      <Routes>
        <Route path='/' Component={HomePageComponent} />
        <Route path='/styling' Component={DesignSystem} />
      </Routes>

      <script src="index.pack.js"></script>
    </Router >
  );
}

export default App;
