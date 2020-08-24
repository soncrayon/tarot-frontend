import React, { Component } from 'react';
import CardDraw from './cardDraw'
import { withRouter } from 'react-router-dom'

class CardDrawAndReadingDisplay extends Component {
        
    render(){
        return (
            <div className="CardDrawAndReadingDisplay" >
                <CardDraw 
                user={this.props.user}
                cards={this.props.cards} 
                postReading={this.props.postReading} 
                addCard={this.props.addCard} 
                deleteCard={this.props.deleteCard}/>
            </div>
        )
    }
}

export default withRouter(CardDrawAndReadingDisplay)