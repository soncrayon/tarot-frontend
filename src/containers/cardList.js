import React, { Component } from 'react';

class CardList extends Component {
    render(){
        return (
        <div>
            {this.props.cards.map(card => <img key={card.id} alt={card.id} src={card.image} style={{height: "20em", width: "12em", padding:"2em"}}/>)}
        </div>
        )
    }
}

export default CardList