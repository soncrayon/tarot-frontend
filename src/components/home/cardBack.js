import React from 'react'

const CardBack = (props) => {
    return (
         <div className="card_back"> 
               <img 
               src={require ("../../artwork/ORI_Tarot_background.png")} 
               alt="card back art"
               onClick={props.handleClick(props.card.period,"card_back")}
               ></img>
        </div>
    )
}

export default CardBack 