import React from 'react';
import ItemDetails, {Record} from '../ItemDetails/ItemDetails'
import { withSwapiService } from '../HocHelpers/index.js'

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props} >
            <Record field="population" label="Population:" />
            <Record field="lengtrotationPeriod" label="Rotation Period:" />
            <Record field="diametr" label="Diametr:" />
        </ItemDetails>
    )
}
const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
}

export default withSwapiService(PlanetDetails, mapMethodsToProps);