import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import RandomPlanet from './components/Randomplanet/Randomplanet';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.js'
import {PeoplePage, PlanetsPage, StarshipsPage} from './components/Pages/'
import SwapiService from './services/swapiService'
import DummySwapiService from './services/swapiService'

import { SwapiServiceProvider } from './components/swapiServiceContext/'

export default class App extends Component {
  
  state = {
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
      return {swapiService: Service}
    })
    console.log('Service is changed');
  }

  render() {   
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="App stardb-app">
            <Header onServiceChange={this.onServiceChange}/>
            {/*<RandomPlanet/>*/}
            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    )
  }
}

