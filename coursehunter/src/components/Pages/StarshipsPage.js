import React from 'react'
import { StarshipList } from '../swComponents/index'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.js'
import { withRouter } from 'react-router-dom';

const  StarshipsPage = ({history}) => {
	return (
		<ErrorBoundary>
		<StarshipList onItemSelected = { (itemId) => {
			history.push(`${itemId}`)
		} } />
		</ErrorBoundary>
	)
}
export default withRouter(StarshipsPage)