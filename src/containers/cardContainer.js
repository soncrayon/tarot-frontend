import React, { Component } from 'react';
import { Card } from '../components/Card'
import { DrawCardButton } from '../components/drawCardButton'
import { DeleteCardButton } from '../components/deleteCardButton';

class CardContainer extends Component {

    render(){
        return (
            <div className="CardContainer">
                {/* To get the card to flip, need to set a class on the CardImage component and change with the drawCard function or helper function -- reverseCard */}
                <Card card={this.props.card} />
                <DrawCardButton period={this.props.card.period} drawCard={this.props.drawCard} addCard={this.props.addCard}/> 
                {/* Below is the delete card button but also need to make sure that the above card draw button
                deletes the card if there is already a card present and replaces it with another (maybe a put or patch function) */}
                <DeleteCardButton period={this.props.card.period} deleteCard={this.props.deleteCard} />
            </div>
        )
    }
}

export default CardContainer

