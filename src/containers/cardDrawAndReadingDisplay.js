import React, { Component } from 'react';
import CardDraw from './cardDraw'

class CardDrawAndReadingDisplay extends Component {
    render(){
        return (
            <div className="CardDrawAndReadingDisplay" >
                <CardDraw  cards={this.props.cards} postReading={this.props.postReading} addCard={this.props.addCard} deleteCard={this.props.deleteCard}/>
            </div>
        )
    }
}

export default CardDrawAndReadingDisplay