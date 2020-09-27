import React from 'react'

export const CardBack = (props) => {
    return (
         <div className="card_back"> 
               <img 
               src={require ("../artwork/card_back.jpeg")} 
               alt="card back art"
               onClick={props.handleClick(props.card.period,"card_back")}
               ></img>
        </div>
    )
}

