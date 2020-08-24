import React from 'react'

export const Card = props => {
        if (props.card.orientation === 'upright'){
            return (
                <div>
                    <h3>{props.card.name}</h3>
                    <img className="upright" src={props.card.image} alt='card'></img> 
                    <h4>Description:</h4>
                    <p>{props.card.full_meaning}</p>
                    <h4>Card Orientation is UPRIGHT, that indicates:</h4>
                    <p>{props.card.upright_meaning}</p>
                </div>
            ) 
        } else if (props.card.orientation === 'reversed') {
            return (
                <div>
                    <h3>{props.card.name}</h3>
                    <img className="reversed" style={{transform: 'rotate(180deg)'}} src={props.card.image} alt='card'></img> 
                    <h4>Description:</h4>
                    <p>{props.card.full_meaning}</p>
                    <h4>Card Orientation is REVERSED, that indicates:</h4>
                    <p>{props.card.reversed_meaning}</p>
                </div>
            )
        } 
        return (
            <p> Draw Your Card </p>
        )
       
     
}

// revise this to take advantage of switch/case since I'm using more than two 
