import React from "react";

/** Components */
import MainLayout from '../components/layout/MainLayout';
import HotelTerraceImage from '../components/ui/HotelTerraceImage';
import ContentHomePage from '../components/ui/ContentHomePage';

/** Component */
const IndexPage = ( props ) => (
    <MainLayout>
        <HotelTerraceImage />
        <ContentHomePage />
    </MainLayout>
)

export default IndexPage
