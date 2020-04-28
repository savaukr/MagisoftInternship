import React, {Component} from 'react'
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

const withData = (View) => {
    return class extends Component {
        state = {
            data:null,
            error:false
        }  

        update() {
            this.props.getData()
                .then((data) => {
                    this.setState({ data, error:false })
                })
                .catch(this.setState({error:true}))
        }
        componentDidMount() {
            this.update();
        }
        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.update();
            }
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