import React from "react";

/** Dependencies */
import { css } from '@emotion/core';
import styled from '@emotion/styled';

/** Components */
import MainLayout from '../components/layout/MainLayout';
import HotelTerraceImage from '../components/ui/HotelTerraceImage';
import ContentHomePage from '../components/ui/ContentHomePage';
import BriefRoomInformation from '../components/ui/BriefRoomInformation';

/** Hooks */
import useRooms from '../hooks/useRooms';

/** Style Components */
const UlRooms = styled .ul `
    margin: 2rem auto;
    max-with: 1200px;
    width: 95%;

    @media ( min-width: 768px ) {
        display: grid;
        grid-template-columns: repeat( 3, 1fr );
        column-gap: 3rem;
    }
`;

/** Component */
const IndexPage = ( props ) => {

    const rooms = useRooms();
    console .log( 'IndexPage > rooms', rooms );

    return(
        <MainLayout>
            <HotelTerraceImage />
            <ContentHomePage />
            
            <h2
                css={ css `
                    font-size: 3rem;
                    margin-top: 5rem;
                    text-align: center;
                    text-transform: uppercase;
                `}
            >Nuestras habitaciones</h2>
            <UlRooms>
                { rooms .map( room => (
                    <BriefRoomInformation 
                        
                        room={ room }
                    />
                ))}
            </UlRooms>

        </MainLayout>
    );
}

export default IndexPage
