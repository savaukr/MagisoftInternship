import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import FiltersContainer from './containers/FiltersContainer';


function App() {
  return (
    <div className="todos-wrapper">
      <Header />
      <FiltersContainer/>
    </div>
  );
}

export default App;
