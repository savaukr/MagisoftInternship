import React from 'react'
import ItemList from '../ItemList/ItemList'
import { withData, withSwapiService, withChildFunction, compose } from '../HocHelpers/index'


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
const PersonList = compose(
						withSwapiService(mapPersonMethodsToProps),
						withData,
						withChildFunction(personFunc)
					)(ItemList);
const PlanetList = compose(
						withSwapiService(mapPlanetMethodsToProps),
						withData,
						withChildFunction(planetFunc)
					)(ItemList);
const StarshipList = compose(
						withSwapiService(mapStarshipMethodsToProps),
						withData,
						withChildFunction(starshipFunc)
					)(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
}