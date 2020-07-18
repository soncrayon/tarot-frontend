import React, { Component } from 'react';
import CardList from './cardList';

class CardDraw extends Component {
    render(){

        return (
        <div className="CardDraw">
            <p>Draw your cards.</p>
            <CardList cards={this.props.cards}/>
            <button>Save to Your Readings</button>
            <button>Refresh</button>
        </div>
        )
    }
}

export default CardDraw