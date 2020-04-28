import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header'
import RandomPlanet from './components/Randomplanet/Randomplanet';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.js'
import Row from './components/Row/Row.js';

import {PeoplePage} from './components/Pages/'

import SwapiService from './services/swapiService'
import DummySwapiService from './services/swapiService'

import {PersonDetails, PlanetDetails, StarshipDetails,
          PersonList, StarshipList, PlanetList
        } from './components/swComponents/'

import { SwapiServiceProvider } from './components/swapiServiceContext/'

export default class App extends Component {
  
  state = {
    showRandomPlanet: true,
    selectedPerson:2,
    swapiService: new SwapiService()
  }
  
  componentDidCatch() {
    this.setState({hasError: true});
  }
  
  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }
  onServiceChange = ({swapiService}) => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ?
                          DummySwapiService : SwapiService;
    })
    console.log('Service is changed');
  }

  render() {   
    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null 
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="App stardb-app">
            <Header onServiceChange={this.onServiceChange}/>
            {/*planet*/}
            <PeoplePage />
            <Row left={<PersonList />} right={<PersonDetails itemId={11} />} />
            <Row left={<PlanetList />} right={<PlanetDetails itemId={5} />} />
            <Row left={<StarshipList />} right={<StarshipDetails itemId={9} />             } />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    )
  }
}

