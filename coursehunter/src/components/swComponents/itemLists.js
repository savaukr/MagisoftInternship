import React from 'react'
import ItemList from '../ItemList/ItemList'
import { withData, withSwapiService } from '../HocHelpers/index'

const withChildFunction = (Wrapped, fn) => {
	return (props) => {
		return (
			<Wrapped {...props}>
				{fn}
			</Wrapped>
		)
	}
}
const personFunc = (i) => `${i.name} (g: ${i.gender}, by: ${i.birthYear} )`;
const planetFunc =  ({name}) => `name: ${name}` ;
const starshipFunc = ({name, model}) => <span>{name} (model: {model})</span>;

const mapPersonMethodsToProps = (swapiService)=> {
	return {
		getData: swapiService.getAllPeople
	}
};
const mapPlanetMethodsToProps = (swapiService)=> {
	return {
		getData: swapiService.getAllPlanets
	}
};
const mapStarshipMethodsToProps = (swapiService)=> {
	return {
		getData: swapiService.getAllStarships
	}
};
const PersonList = withSwapiService(
					withData( 
						withChildFunction( ItemList, personFunc)),
					mapPersonMethodsToProps);
const PlanetList = withSwapiService(
						withData( 
							withChildFunction( ItemList, planetFunc)),
						mapPlanetMethodsToProps);
const StarshipList = withSwapiService( 
						withData( 
							withChildFunction( ItemList, starshipFunc)),
						mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
}