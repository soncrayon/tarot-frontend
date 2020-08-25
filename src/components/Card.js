import React from 'react'

export const Card = props => {
        if (props.card.orientation === 'upright'){
            return (
                <div className="card_front">
                    <div className="card_title">
                        <h3>{props.card.name}</h3>
                    </div>
                    <div>
                    <img className="upright" src={props.card.image} alt='card'></img> 
                    {/* <h4>Description:</h4>
                    <p>{props.card.full_meaning}</p>
                    <h4>Card Orientation is UPRIGHT, that indicates:</h4>
                    <p>{props.card.upright_meaning}</p> */}
                    </div> 
                </div>
            ) 
        } else if (props.card.orientation === 'reversed') {
            return (
                <div className="card_front">
                    <div className="card_title">
                        <h3>{props.card.name}</h3>
                    </div>
                    <div>
                    <img className="reversed" style={{transform: 'rotate(180deg)'}} src={props.card.image} alt='card'></img> 
                    {/* <h4>Description:</h4>
                    <p>{props.card.full_meaning}</p>
                    <h4>Card Orientation is REVERSED, that indicates:</h4>
                    <p>{props.card.reversed_meaning}</p> */}
                    </div>
                </div>
            )
        } 
        return (
           <div className="card_back"> 
               {/* look up how to set image source in react app -- this is not rendering */}
               <img src='/art-deco-black-elisabeth-fredriksson.jpg' alt="card back art"></img>
           </div>
        )
       
     
}

// revise this to take advantage of switch/case since I'm using more than two 
