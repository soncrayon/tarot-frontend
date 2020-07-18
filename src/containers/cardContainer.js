import React, { Component } from 'react';
import CardImage from '../components/cardImage'
import CardDrawButton from '../components/drawCardButton'

class CardContainer extends Component {
    render(){
        return (
            <div className="CardContainer">
                <CardImage />
                <CardDrawButton /> 
                {/* Below is the delete card button but also need to make sure that the above card draw button
                deletes the card if there is already a card present and replaces it with another (maybe a put or patch function) */}
                <button>Delete Card</button>
            </div>
        )
    }
}

export default CardContainer