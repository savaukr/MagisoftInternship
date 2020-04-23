import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import RandomPlanet from './components/Randomplanet/Randomplanet';
import ErrorButton from './components/ErrorButton/ErrorButton.js';
import ErrorIndicator from './components/ErrorIndicator/ErrorIndicator.js'
import PeoplePage from './components/PeoplePage/PeoplePage.js'
import SwapiService from './services/swapiService'

import PersonDetails from './components/PersonDetails/PersonDetails';
import ItemList from './components/ItemList/ItemList'



export default class App extends Component {
  swapiService = new SwapiService();
  state = {
    showRandomPlanet: true,
    hasError:false,
    selectedPerson:2
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
        
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList 
              getData= {this.swapiService.getAllPlanets}
              onItemSelected={this.onPersonSelected}
              renderItem = {(item) => (<span>{item.name + ' '}<button>!</button></span>) }
            />
          </div>
          <div className="col-md-6">
              <PersonDetails personId={this.state.selectedPerson}/>
          </div>
	      </div>

        <div className="row mb2">
            <div className="col-md-6">
              <ItemList 
                getData= {this.swapiService.getAllStarships}
                onItemSelected={this.onPersonSelected}
                renderItem = {(item) => item.name }
              />
            </div>
            <div className="col-md-6">
                <PersonDetails personId={this.state.selectedPerson}/>
            </div>
        </div>
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

