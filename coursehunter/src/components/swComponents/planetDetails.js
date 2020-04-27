import React from 'react';
import ItemDetails, {Record} from '../ItemDetails/ItemDetails'
import { SwapiServiceConsumer } from '../swapiServiceContext/index.js'

const PlanetDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPlanet, getPlanetImage}) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData = { getPlanet }
                            getImageUrl = {getPlanetImage}>
                            <Record field="population" label="Population:" />
                            <Record field="lengtrotationPeriod" label="Rotation Period:" />
                            <Record field="diametr" label="Diametr:" />
                        </ItemDetails>
                    )
                }
             }
        </SwapiServiceConsumer>
        
    )
};

export default PlanetDetails;