import React from "react";

/** Components */
import MainLayout from '../components/layout/MainLayout';
import HotelTerraceImage from '../components/ui/HotelTerraceImage';
import ContentHomePage from '../components/ui/ContentHomePage';

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
        </MainLayout>
    );
}

export default IndexPage
