import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import RandomPlanet from './components/Randomplanet/Randomplanet';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.js'
import {PeoplePage, PlanetsPage, StarshipsPage, SecretPage, LoginPage} from './components/Pages/'
import {StarshipDetails} from './components/swComponents/'
import SwapiService from './services/swapiService'
import DummySwapiService from './services/swapiService'

import { SwapiServiceProvider } from './components/swapiServiceContext/'

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom' 

export default class App extends Component {
  
  state = {
    selectedPerson:2,
    swapiService: new SwapiService(),
    isLoggedIn: false
  }
  onLogin = () => {
    this.setState({
      isLoggedIn: true
    })
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
    const {isLoggedIn} = this.state
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="App stardb-app">
              <Header onServiceChange={this.onServiceChange}/ >
              <RandomPlanet updateInterval={120000} />
              <Switch>
                <Route path="/" exact render={ () => <h2>Welcome to StarDB</h2> }  />
                <Route path="/people/:id?"  component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" exact component={StarshipsPage} />
                <Route path="/starships/:id"
                       render= { ( {match} ) => {
                         const { id } = match.params;
                         return <StarshipDetails itemId={ id }/>
                       }}
                />
                 <Route path="/login" render= {() => (
                                       <LoginPage 
                                         isLoggedIn={ isLoggedIn }
                                         onLogin={ this.onLogin }
                                       />
                                      ) } />
                  <Route path="/secret" render={() => (
                                          <SecretPage 
                                            isLoggedIn={isLoggedIn}
                                          />
                                        ) } />
                  {/*<Redirect to=""/>*/}
                  <Route render={ () => <h2>Page not found</h2> } />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    )
  }
}

