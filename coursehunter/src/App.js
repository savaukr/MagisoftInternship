import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import RandomPlanet from './components/Randomplanet/Randomplanet';
import ErrorButton from './components/ErrorButton/ErrorButton.js';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.js'
import PeoplePage from './components/PeoplePage/PeoplePage.js'
import SwapiService from './services/swapiService'

import {Row} from './components/PeoplePage/PeoplePage.js'

import ItemDetails, {Record} from './components/ItemDetails/ItemDetails';
import ItemList from './components/ItemList/ItemList'



export default class App extends Component {
  swapiService = new SwapiService();
  state = {
    showRandomPlanet: true,
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
    const {getPerson, getStarship, getPersonImage, getStarshipImage , getPlanetImage} = this.swapiService
    const personDetails = (
      <ItemDetails
         itemId={11}
         getData = { getPerson }
         getImageUrl = {getPersonImage}>
        <Record field="gender" label="Gender:" />
        <Record field="eyeColor" label="Eye Color:" />
      </ItemDetails>
    );
    const  starshipDetails = (
      <ItemDetails
        itemId={10}
        getData = { getStarship }
        getImageUrl = {getStarshipImage}>
        <Record field="model" label="Model:" />
        <Record field="length" label="Length:" />
        <Record field="costInCredits" label="Cost:" />
       </ItemDetails>
      
    )
    return (
      <ErrorBoundary>
        <div className="App stardb-app">
          <Header/>
         <PeoplePage /> 
       
 {/*
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
              <ItemDetails itemId={this.state.selectedItem}/>
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
                <ItemDetails itemId={this.state.selectedPerson}/>
            </div>
        </div>
     */}

          <Row left={ personDetails } right={ starshipDetails } />
          
        </div>
      </ErrorBoundary>
    )
  }
}

