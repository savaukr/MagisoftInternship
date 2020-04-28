import React from 'react';
import ItemDetails, {Record} from '../ItemDetails/ItemDetails'
import { withSwapiService } from '../HocHelpers/index.js'

import { SwapiServiceConsumer } from '../swapiServiceContext/index.js'

const PlanetDetails = ({ itemId, swapiService }) => {
    const { getPlanet, getPlanetImage } = swapiService
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
};

export default withSwapiService(PlanetDetails);