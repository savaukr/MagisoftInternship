import React , {Component} from 'react';
import ItemList from '../ItemList/ItemList.js'
import { PersonList } from '../swComponents/index'
import ItemDetails, {Record} from '../ItemDetails/ItemDetails.js'
//import ErrorIndicator from '../ErrorIndicator/ErrorIndicator.js'
import SwapiService from '../../services/swapiService.js';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.js'

export const Row = ({left, right}) => {
	return (
		<div className="row mb2">
          <div className="col-md-6">
          	{left}
          </div>
          <div className="col-md-6">
            {right}
          </div>
        </div>
	)
}

export default class PeoplePage extends Component {
	swapiService = new SwapiService()
	state= {
		selectedItem: 3,
	}
	
	onItemSelected = (selectedItem) => {
	    this.setState({selectedItem});
  	}
  	render() {
	    const {getAllPeople, getPerson, getPersonImage} = this.swapiService
        const itemList = (
  			<ItemList 
            	getData={getAllPeople}
            	onItemSelected={this.onItemSelected}
            >{(i) => 
            		`n: ${i.name} (g: ${i.gender}, by: ${i.birthYear} )` }
			</ItemList>			
		);
		const personList  = (
			<PersonList onItemSelected={this.onItemSelected}>
				{(i) => 
					`n: ${i.name} (g: ${i.gender}, by: ${i.birthYear} )`}
			</PersonList> 
		)
		const itemDetails = (
			<ErrorBoundary>
				 <ItemDetails
					itemId={this.state.selectedItem}
					getData = { getPerson }
					getImageUrl = {getPersonImage}>
					<Record field="gender" label="Gender:" />
        			<Record field="eyeColor" label="Eye Color:" />
				</ItemDetails>
			</ErrorBoundary>
		);
  		return (
  			<ErrorBoundary>
				<Row left={personList}  right={itemDetails} />
  				{/*<Row left={itemList}  right={itemDetails} />*/}
  			</ErrorBoundary>
  		)
  	}
}