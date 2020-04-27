import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import RandomPlanet from './components/Randomplanet/Randomplanet';
import ErrorButton from './components/ErrorButton/ErrorButton.js';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.js'
import PeoplePage from './components/PeoplePage/PeoplePage.js'
import SwapiService from './services/swapiService'

import {PersonDetails, PlanetDetails, StarshipDetails} from './components/swComponents/index'

import {Row} from './components/PeoplePage/PeoplePage.js'

import ItemDetails, {Record} from './components/ItemDetails/ItemDetails';
import { PersonList, StarshipList, PlanetList } from './components/swComponents';
//import ItemList from './components/ItemList/ItemList'

import { SwapiServiceProvider } from './components/swapiServiceContext/index.js'



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
        <SwapiServiceProvider value={this.swapiService}>
          <div className="App stardb-app">
            <Header/>
            {/* <RandomPlanet /> */}
            {/*<PeoplePage />*/}
            <PersonList />
            <PlanetList />
            <StarshipList />
              
            <PersonDetails itemId={11} />
            <PlanetDetails itemId={5} />
            <StarshipDetails itemId={9} />
              
            {/*} <Row left={ personDetails } right={ starshipDetails } />*/}
              
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    )
  }
}

