import React , {Component} from 'react';
import ItemList from '../ItemList/ItemList.js'
import ItemDetails from '../ItemDetails/ItemDetails.js'
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
  		
  		/*if (this.state.hasError) {
  			return <ErrorIndicator/>
  		}*/
  		/*
  		const itemList = (
  			<ItemList 
            	getData={this.swapiService.getAllPeople}
            	onItemSelected={this.onPersonSelected}
            	renderItem = {({name, gender, birthYear}) => 
            		`n: ${name} (g: ${gender}, by: ${birthYear} )` } />
        );
       */
       const itemList = (
  			<ItemList 
            	getData={this.swapiService.getAllPeople}
            	onItemSelected={this.onItemSelected}
            >{(i) => 
            		`n: ${i.name} (g: ${i.gender}, by: ${i.birthYear} )` }
            </ItemList>
        );
		const itemDetails = (
			<ErrorBoundary>
				<ItemDetails 
					itemId={this.state.selectedItem}
					getData = { this.swapiService.getPerson }
        			getImageUrl = {this.swapiService.getPersonImage}
				/>
			</ErrorBoundary>
		);
  		return (
  			<ErrorBoundary>
  				<Row left={itemList}  right={itemDetails} />
  			</ErrorBoundary>
  		)
  	}
}