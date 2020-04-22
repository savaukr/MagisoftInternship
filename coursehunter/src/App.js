import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import RandomPlanet from './components/Randomplanet/Randomplanet';
//import PersonDetails from './components/PersonDetails/PersonDetails';
import ErrorButton from './components/ErrorButton/ErrorButton.js';
import ErrorIndicator from './components/ErrorIndicator/ErrorIndicator.js'
import PeoplePage from './components/PeoplePage/PeoplePage.js'

export default class App extends Component {
  
  state = {
    showRandomPlanet: true,
    hasError:false
  }
  // toggleRandomPlanet =() => {

  // }
  componentDidCatch() {
    console.log("componentdid catch in App");
    this.setState({hasError: true});
  }
  
  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {
    if (this.state.hasError) {
      return(<ErrorIndicator />)
    }
    return (
      <div className="App stardb-app">
        <Header/>
        <RandomPlanet />
        <ErrorButton />
        <PeoplePage />
        <PeoplePage />
        <PeoplePage />
        {
        // <div className="row mb2">
        //   <div className="col-md-6">
        //     <ItemList onItemSelected={this.onPersonSelected} />
        //   </div>
        //   <div className="col-md-6">
        //       <PersonDetails personId={this.state.selectedPerson}/>
        //   </div>
        // </div>
      }
      </div>
    )
  }
}

