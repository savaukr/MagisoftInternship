import React, {Component} from 'react';
import './itemDetails.css'
import SwapiService from '../../services/swapiService';
import Spinner from '../Spinner/Spinner'
import ErrorButton from '../ErrorButton/ErrorButton.js'

const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}
export {Record}

export default class ItemDetails extends Component {
    swapiService = new SwapiService();
    state = {
        item: null,
        image:null,
        loading: true
    }
    componentDidMount () {
        this.updateItem();
    }
    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData ||
            this.props.getImageUrl !==  prevProps.getImageUrl ) {
            this.updateItem();
        }
    }
    updateItem (){
        const { itemId, getData, getImageUrl }  = this.props;
        if (!itemId) {
            return;
        }
        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    loading:false,
                    image:getImageUrl(item)
                })
            })
            
    }
    render() {
        const { item, image, loading } = this.state;
        if (loading) {return <Spinner />}
        if (!item) {
            return <span>Select a item from a list</span>
        }
        const {id, name, gender, birthYear, eyeColor } = item;
        return (
            <div className="item-details card">
               <img className="item-image"
                    src={image}  alt="person detail"/>
                <div className="card-body">
                    <h4>{`${name} : ${id}`}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child)=>{
                                return React.cloneElement(child, { item });
                            })
                          
                        }
                    </ul>
                    <ErrorButton/>
                </div>
            </div>
        )
    }
}
