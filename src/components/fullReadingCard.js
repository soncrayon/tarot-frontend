import React from 'react'

export const FullReadingCard = (props) => {
    
    let cardOrientationMeaning; 
    if (props.card.orientation === "upright") {
        cardOrientationMeaning = props.card.upright_meaning
    } else if (props.card.orientation === "reversed") {
        cardOrientationMeaning = props.card.reversed_meaning
    }

    return (
        <div className="full_reading_card">
            <h3>{props.card.period}</h3>
            <img src={props.card.image} alt="card_image" style={props.getCardImageOrientation(props.card)} /> 
            <p>{props.card.name}</p>
            <p>{props.card.orientation}</p>
            <p>{cardOrientationMeaning}</p>
        </div>
    )
}