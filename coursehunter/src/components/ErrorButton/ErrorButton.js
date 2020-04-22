import React, {Component} from 'react'
import styled from 'styled-components';

const ButtonError = styled.button`
	color: black;
	margin: 0.5rem;
	font-weight: bold;
`

export default class ErrorButton extends Component {
	state = {
		renderError: false
	}

	render() {
		if (this.state.renderError) {
			this.foo.bar = 0
		}

		return (
			<ButtonError className = "error-button btn btn-danger btn-lg"
				onClick={() => this.setState({renderError:true})}>Throw error
			</ButtonError>
		)
	}
}