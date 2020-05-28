import React from 'react';

/** Dependencies */
import Image from 'gatsby-image';

/** Component */
const BriefRoomInformation = ({ room }) => {

    /** Destructuring data object */
    const { id, title, slug, content, image } = room;

    return (
        <li>
            <Image 
                fluid={ image .fluid } 
                alt={ title }
            />
            <div>
                <h3>{ title }</h3>
                <p>{ content }</p>
            </div>
        </li>
    );
}

export default BriefRoomInformation;