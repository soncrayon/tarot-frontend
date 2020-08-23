import React, { Component } from 'react';
import CardDraw from './cardDraw'
import { withRouter } from 'react-router-dom'

class CardDrawAndReadingDisplay extends Component {
    
    redirectToLogin = () => {
        this.props.history.push('/')
    }
    
    UNSAFE_componentWillMount(){
        return this.props.loggedInStatus ? null : this.redirectToLogin()
    }

    render(){
        return (
            <div className="CardDrawAndReadingDisplay" >
                <CardDraw cards={this.props.cards} postReading={this.props.postReading} addCard={this.props.addCard} deleteCard={this.props.deleteCard}/>
            </div>
        )
    }
}

export default withRouter(CardDrawAndReadingDisplay)