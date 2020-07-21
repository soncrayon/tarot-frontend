import React from 'react'

export const Card = props => {
        if (props.card.card_orientation === 'upright'){
            return (
                <div>
                    <h3>{props.card.card_name}</h3>
                    <img className="upright" src={props.card.card_image} alt='card'></img> 
                    <h4>Description:</h4>
                    <p>{props.card.card_full_meaning}</p>
                    <h4>Card Orientation is UPRIGHT, that indicates:</h4>
                    <p>{props.card.card_upright}</p>
                </div>
            ) 
        } else if (props.card.card_orientation === 'reversed') {
            return (
                <div>
                    <h3>{props.card.card_name}</h3>
                    <img className="reversed" src={props.card.card_image} alt='card'></img> 
                    <h4>Description:</h4>
                    <p>{props.card.card_full_meaning}</p>
                    <h4>Card Orientation is REVERSED, that indicates:</h4>
                    <p>{props.card.card_reversed}</p>
                </div>
            )
        } 
        return (
            <p> Draw Your Card </p>
        )
       
     
}

// revise this to take advantage of switch/case since I'm using more than two 
