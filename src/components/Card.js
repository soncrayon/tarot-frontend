import React from 'react'

export const Card = props => {
        return (
            <div>
                <h3>{props.card.card_name}</h3>
                <img src={props.card.card_image} alt='card'></img> 
                <h4>Description:</h4>
                <p>{props.card.card_full_meaning}</p>
            </div>
        ) 
  
  
}

