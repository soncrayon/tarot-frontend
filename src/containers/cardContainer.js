import React, { Component } from 'react';
import { Card } from '../components/Card'
import { DrawCardButton } from '../components/drawCardButton'
import { DeleteCardButton } from '../components/deleteCardButton';

class CardContainer extends Component {

    state = {
        card_name: '',
        card_full_meaning: '',
        card_upright: '',
        card_reversed: '',
        card_image: ''
    }

    reverseCard = () => {

    }

    drawCard = () => {
        let drawnCard = this.props.cards[Math.floor(Math.random() * this.props.cards.length)]
        return this.setState({
            ...this.state,
            card_name: drawnCard.name,
            card_full_meaning: drawnCard.full_meaning,
            card_upright: drawnCard.upright,
            card_image: drawnCard.image
        })
    }

    render(){
        return (
            <div className="CardContainer">
                {/* To get the card to flip, need to set a class on the CardImage component and change with the drawCard function or helper function -- reverseCard */}
                <Card card={this.state}/>
                <DrawCardButton drawCard={this.drawCard}/> 
                {/* Below is the delete card button but also need to make sure that the above card draw button
                deletes the card if there is already a card present and replaces it with another (maybe a put or patch function) */}
                <DeleteCardButton />
            </div>
        )
    }
}

export default CardContainer