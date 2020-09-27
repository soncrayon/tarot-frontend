import React from 'react'

export const CardFront = (props) => {

    const cardDisplay = {
        upright: <div className="card_front">
                        <img 
                        className="upright" 
                        src={props.card.image} 
                        alt='card'
                        onClick={props.handleClick(props.card.period, props.card.orientation, "card_front")}
                        ></img> 
                    </div>,

        reversed: <div className="card_front">
                        <img 
                        className="reversed" 
                        style={{transform: 'rotate(180deg)'}} 
                        src={props.card.image} 
                        alt='card'
                        onClick={props.handleClick(props.card.period, props.card.orientation, "card_front")}
                        ></img> 
                    </div>
    }
   
    return cardDisplay[props.card.orientation] || null 
}

