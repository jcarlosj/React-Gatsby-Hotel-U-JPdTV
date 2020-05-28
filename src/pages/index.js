import React from "react";

/** Dependencies */
import { css } from '@emotion/core';

/** Components */
import MainLayout from '../components/layout/MainLayout';
import HotelTerraceImage from '../components/ui/HotelTerraceImage';
import ContentHomePage from '../components/ui/ContentHomePage';
import BriefRoomInformation from '../components/ui/BriefRoomInformation';

/** Hooks */
import useRooms from '../hooks/useRooms';

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
                `}
            >Nuestras habitaciones</h2>
            <ul>
                { rooms .map( room => (
                    <BriefRoomInformation 
                        key={ room .id }
                        room={ room }
                    />
                ))}
            </ul>

        </MainLayout>
    );
}

export default IndexPage
