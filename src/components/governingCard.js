import React from 'react';

const GoverningCard = (props) => {
    
    return (
        <div>
            <h3>Governing Card for this Drawing</h3>
            <img src={props.card.image} alt="session_card_image"/>
            <p>{props.card.name}</p>
            <p>{props.card.full_meaning}</p>
        </div>
    )
}

export default GoverningCard