import React, {Component} from 'react'
import './itemList.css';
//import SwapiService from '../../services/swapiService';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

export default class ItemList extends Component {
    //swapiService = new SwapiService();
    state = {
        itemList:null,
        error:false
    }
    
    componentDidMount() {
        const { getData } = this.props
        //this.swapiService.getAllPeople()
        getData()
            .then((itemList) => {
                this.setState({ itemList, error:false })
            })
            .catch(this.setState({error:true}))
    }
    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item
            const label  = this.props.children(item);
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id) }>
                  {label}
                </li>
            )
        })
    }
    render() {
        const {itemList, error} = this.state;
        if (!itemList) {
            return <Spinner />
        }
        if (error === true) {
            return (
             <ErrorIndicator/>
             )
        }
        const items = this.renderItems(itemList);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        ) 
    }
}