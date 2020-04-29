import React, {Component} from 'react'
import { StarshipList, StarshipDetails } from '../swComponents/index'
import SwapiService from '../../services/swapiService.js';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.js'
import Row from '../Row/Row.js'


export default class StarshipsPage extends Component {
	swapiService = new SwapiService()
	state= {
		selectedItem: 2,
	}
	
	onItemSelected = (selectedItem) => {
	    this.setState({selectedItem});
  	}
  	render() {
	    const {selectedItem} = this.state
  		return (
  			<ErrorBoundary>
				<Row 
					left={<StarshipList onItemSelected = {this.onItemSelected}/>}
					right={<StarshipDetails itemId={ selectedItem }/>}
				/>
  			</ErrorBoundary>
  		)
  	}
}