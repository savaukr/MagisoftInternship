import React, {Component} from 'react'
import { PlanetList, PlanetDetails } from '../swComponents/index'
import SwapiService from '../../services/swapiService.js';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.js'
import Row from '../Row/Row.js'


export default class PlanetsPage extends Component {
	swapiService = new SwapiService()
	state= {
		selectedItem: 1,
	}
	
	onItemSelected = (selectedItem) => {
	    this.setState({selectedItem});
  	}
  	render() {
	    const {selectedItem} = this.state
  		return (
  			<ErrorBoundary>
				<Row 
					left={<PlanetList onItemSelected = {this.onItemSelected}/>}
					right={<PlanetDetails itemId={ selectedItem }/>}
				/>
  			</ErrorBoundary>
  		)
  	}
}