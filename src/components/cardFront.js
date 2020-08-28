import React from 'react'

const CardFront = (props) => {
   
        if (props.card.orientation === 'upright'){
               
               return (
                    <div className="card_front">
                        <img 
                        className="upright" 
                        src={props.card.image} 
                        alt='card'
                        onClick={props.handleClick(props.card.period, props.card.orientation, "card_front")}
                        ></img> 
                    </div>
                ) 

            } else if (props.card.orientation === 'reversed') {
                
                return (
                    <div className="card_front">
                        <img 
                        className="reversed" 
                        style={{transform: 'rotate(180deg)'}} 
                        src={props.card.image} 
                        alt='card'
                        onClick={props.handleClick(props.card.period, props.card.orientation, "card_front")}
                        ></img> 
                    </div>
                )

            }
            return null 
}

export default CardFront