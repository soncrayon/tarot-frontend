import React, { Component } from 'react';
import Card from '../components/Card'

class CardContainer extends Component {

    render(){
        let cardOrientationMeaning; 
        if (this.props.card.orientation === "upright") {
            cardOrientationMeaning = this.props.card.upright_meaning
        } else if (this.props.card.orientation === "reversed") {
            cardOrientationMeaning = this.props.card.reversed_meaning
        }

        return (
            <div className="CardContainer">
                <div>
                    <Card card={this.props.card} card_refresh={this.props.card_refresh} drawCard={this.props.drawCard} deleteCard={this.props.deleteCard}/>
                </div>

                <h3>{this.props.card.name}</h3>
                <p>{this.props.card.orientation}</p>
                <p>{cardOrientationMeaning}</p>
            </div>
        )
    }
}

export default CardContainer

