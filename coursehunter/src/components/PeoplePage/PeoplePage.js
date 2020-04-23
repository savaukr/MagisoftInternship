import React , {Component} from 'react';
import ItemList from '../ItemList/ItemList.js'
import PersonDetails from '../PersonDetails/PersonDetails.js'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator.js'
import SwapiService from '../../services/swapiService.js';

const Row = ({left, right}) => {
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
		selectedPerson: 3,
		hasError: false
	}
	componentDidCatch(/*error, info*/) {
		this.setState({hasError: true});
	}
	onPersonSelected = (selectedPerson) => {
	    this.setState({selectedPerson});
  	}
  	render() {
  		if (this.state.hasError) {
  			return <ErrorIndicator/>
  		}
  		const itemList = (
  			<ItemList 
            	getData={this.swapiService.getAllPeople}
            	onItemSelected={this.onPersonSelected}
            	renderItem = {({name, gender, birthYear}) => 
            		`n: ${name} (g: ${gender}, by: ${birthYear} )` } />
        );
		const personDetails = (
			<PersonDetails personId={this.state.selectedPerson} />
		);
  		return (
  			<Row left={itemList}  right={personDetails} />
  		)
  	}
}