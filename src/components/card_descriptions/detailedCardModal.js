import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DetailedCardModal = (props) => {
    
    return props.card ? (
        <div className="modal_container">

            <div className="detailed_card_modal">
                
            <button onClick={() => props.closeDetailedCard()} className="close_modal"><FontAwesomeIcon icon="times" />  CLOSE</button>
            
            <h2>{props.card.name}</h2> 

                <div className="detailed_card">
                
                        <img src={props.card.image} alt="card_image" /> 
                        <p><em>Full Meaning:</em></p>
                        <p>{props.card.full_meaning}</p>
                        <p><em>Upright Meaning:</em></p>
                        <p>{props.card.upright}</p>
                        <p><em>Reversed Meaning:</em></p>
                        <p>{props.card.reversed}</p>
                
                </div>

            </div>

        </div>
           
        ) : null 
}

export default DetailedCardModal