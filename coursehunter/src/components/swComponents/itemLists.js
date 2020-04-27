import React from 'react'
import ItemList from '../ItemList/ItemList'
import { withData } from '../HocHelpers/index'
import SwapiService from '../../services/swapiService'

const swapiService = new SwapiService();
const { getAllPeople, getAllStarships, getAllPlanets } = swapiService;

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

const PersonList = withData( 
						withChildFunction( ItemList, personFunc),
						getAllPeople );
const PlanetList = withData( 
						withChildFunction( ItemList, planetFunc),
						getAllPlanets );
const StarshipList = withData( 
						withChildFunction( ItemList, starshipFunc),
						getAllStarships );

export {
    PersonList,
    PlanetList,
    StarshipList
}