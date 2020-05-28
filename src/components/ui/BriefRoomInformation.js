import React from 'react';

const BriefRoomInformation = ({ room }) => {

    /** Destructuring data object */
    const { id, title, slug, content, image } = room;

    return (
        <li>
            <img 
                src={ image .fluid .src } 
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