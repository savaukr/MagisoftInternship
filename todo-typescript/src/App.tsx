import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Filters from './components/Filters/Filters';

function App() {
  return (
    <div className="todos-wrapper">
      <Header />
      <Filters />
    </div>
  );
}

export default App;
