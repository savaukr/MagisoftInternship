import React, {Component} from 'react'
import './itemList.css';
import SwapiService from '../../services/swapiService';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

export default class ItemList extends Component {
    swapiService = new SwapiService();
    state = {
        peopleList:null,
        error:false
    }
    
    componentDidMount() {
        this.swapiService.getAllPeople()
        .then((peopleList) => {
            this.setState({ peopleList, error:false })
        })
        .catch(this.setState({error:true}))
    }
    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id) }>
                  {name}
                </li>
            )
        })
    }
    render() {
        const {peopleList, error} = this.state;
        //console.log(error);
        if (!peopleList) {
            return <Spinner />
        }
        if (error === true) {
            return (
             <ErrorIndicator/>
             )
        }
        const items = this.renderItems(peopleList);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        ) 
    }
}