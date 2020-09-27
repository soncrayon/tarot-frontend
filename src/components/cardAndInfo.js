import React from 'react';
import Card from './Card'

export const CardAndInfo = (props) => {
    
    let cardOrientationMeaning; 
        if (props.card.orientation === "upright") {
            cardOrientationMeaning = props.card.upright_meaning
        } else if (props.card.orientation === "reversed") {
            cardOrientationMeaning = props.card.reversed_meaning
        }

    return (
             <div className="card_container">

                <div className="card_image">
                    <Card card={props.card} card_refresh={props.card_refresh} drawCard={props.drawCard} deleteCard={props.deleteCard}/>
                </div>

                <div className="card_info">
                    <h3>{props.card.name}</h3>
                    <p>{props.card.orientation}</p>
                    <p>{cardOrientationMeaning}</p>
                </div>

            </div>
    )
}


