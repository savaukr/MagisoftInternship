
import React, {Component} from 'react'
import { PersonList, PersonDetails } from '../swComponents/index'
import SwapiService from '../../services/swapiService.js';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.js'
import Row from '../Row/Row.js'


export default class PeoplePage extends Component {
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
					left={<PersonList onItemSelected = {this.onItemSelected}/>}
					right={<PersonDetails itemId={ selectedItem }/>}
				/>
  			</ErrorBoundary>
  		)
  	}
}