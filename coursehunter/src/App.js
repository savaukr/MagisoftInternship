import React, { Component } from 'react';
import './App.css';
import ItemList from './components/ItemList/ItemList'
import Header from './components/Header/Header'
import RandomPlanet from './components/Randomplanet/Randomplanet';
import PersonDetails from './components/PersonDetails/PersonDetails';

export default class App extends Component {
  
  state = {
    showRandomPlanet: true,
    selectedPerson:1
  }
  // toggleRandomPlanet =() => {

  // }
  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }
  render() {
    return (
      <div className="App stardb-app">
        <Header/>
        <RandomPlanet />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-6">
              <PersonDetails personId={this.state.selectedPerson}/>
          </div>
        </div>
      </div>
    )
  }
}

