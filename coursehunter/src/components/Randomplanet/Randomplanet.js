import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './randomPlanet.css';
import SwapiService from '../../services/swapiService'
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

export default class RandomPlanet extends Component {

    static defaultProps = {
        updateInterval: 10000
    }
    static propTypes = {
     /*   updateInterval: (props, propName, componentName)=> {
            const value = props[propName];
            if (typeof value === 'number' && !isNaN(value)) {
                return null
            }
            return new TypeError(`${componentName}: ${propName} must be number!`)
        }*/
        updateInterval: PropTypes.number
    }

    swapiService = new SwapiService();

    state = {
        planet:{},
        loading: true
    }
   
    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading:false,
            error:false
        });
    }
    onError = (error) => {
        this.setState({
            error:true,
            loading:false 
        })
    }
    updatePlanet = () => {   
        const id = Math.floor(Math.random()*25)+9;
        //console.log("id=", id);
       //const id = 15;
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }
    componentDidMount() {
        const {updateInterval} = this.props
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
    }
    componentWillUnmount () {
        clearInterval(this.interval);
    }
     
    render() {
        const { planet, loading, error } = this.state;
        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const hasData = !(loading || error);
        const content = hasData ? <PlanetView planet={ planet }/> : null;
        return (
            <div className="random-planet jumbotron rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
}


const PlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter } = planet;
    return(
        <>
            <img className="planet-image"
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet"/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population:</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period:</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diametr:</span>
                        <span>{diameter}</span>
                    </li>

                </ul>
            </div>
        </>
    )
}