import React, {Component} from 'react';
import './personDetails.css'
import SwapiService from '../../services/swapiService';
import Spinner from '../Spinner/Spinner'
import ErrorButton from '../ErrorButton/ErrorButton.js'

export default class PersonDetails extends Component {
    swapiService = new SwapiService();
    state = {
        person: null,
        loading: true
    }
    componentDidMount () {
        this.updatePerson();
    }
    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }
    updatePerson (){
        const { personId }  = this.props;
        if (!personId) {
            return;
        }
        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({person, loading:false})
            })
            
    }
    render() {
        if (this.state.loading) {return <Spinner />}
        if (!this.state.person) {
            return <span>Select a person from a list</span>
        }
        const {id, name, gender, birthYear, eyeColor } = this.state.person;
        return (
            <div className="person-details card">
               <img className="person-image"
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}  alt="person detail"/>
                <div className="card-body">
                    <h4>{`${name} : ${id}`}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender:</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth year:</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye color:</span>
                            <span>{eyeColor}</span>
                        </li>
                        <ErrorButton/>
                    </ul>
                </div>
            </div>
        )
    }
}
