
import React from 'react'
import { withRouter } from 'react-router-dom'
import { PersonList, PersonDetails } from '../swComponents/index'

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.js'
import Row from '../Row/Row.js'


const  PeoplePage = ({history, match}) => { 	
	const { id } = match.params
	
	return (
		<ErrorBoundary>
		<Row 
			left={<PersonList onItemSelected = { (id) => {history.push(id)} }/>}
			right={<PersonDetails itemId={ id }/>}
		/>
		</ErrorBoundary>
	)
}

export default withRouter(PeoplePage)