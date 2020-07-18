import React, { Component } from 'react';
import CardDraw from './cardDraw'
import UserReadings from './userReadings'

class CardDrawAndReadingDisplay extends Component {
    render(){
        return (
            <div className="CardDrawAndReadingDisplay" >
                <CardDraw  cards={this.props.cards} />
                <UserReadings  />
            </div>
        )
    }
}

export default CardDrawAndReadingDisplay