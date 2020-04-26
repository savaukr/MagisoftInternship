import React, {Component} from 'react'
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

const withData = (View, getData) => {
    return class extends Component {
        state = {
            data:null,
            error:false
        }  
        componentDidMount() {
            getData()
                .then((data) => {
                    this.setState({ data, error:false })
                })
                .catch(this.setState({error:true}))
        }
        render() {
            const {data, error} = this.state;
            if (!data) {
                return <Spinner />
            }
            if (error === true) {
                return (
                <ErrorIndicator/>
                )
            }
            return <View {...this.props} data={data}/>
        }
    }
}

export default withData