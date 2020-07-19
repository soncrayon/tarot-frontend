import React, { Component } from 'react';
import CardDraw from './cardDraw'

class CardDrawAndReadingDisplay extends Component {
    render(){
        return (
            <div className="CardDrawAndReadingDisplay" >
                <CardDraw  cards={this.props.cards} />
            </div>
        )
    }
}

export default CardDrawAndReadingDisplay