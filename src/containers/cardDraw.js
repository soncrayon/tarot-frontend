import React, { Component } from 'react';
import CardContainer from './cardContainer'

class CardDraw extends Component {
    
   constructor (props) {
    super(props);
    this.state = this.initialState;
    this.drawnCards = [];
   }

//    Look up what other things "get" functions like the below do

   get initialState() {
       return {
            past: {
                period: 'past',
                card_name: '', 
                card_full_meaning: '',
                card_upright: '',
                card_image: '',
                card_orientation: ''
            },

            present: {
                period: 'present',
                card_name: '', 
                card_full_meaning: '',
                card_upright: '',
                card_image: '',
                card_orientation: ''
            },

            future: {
                period: 'future',
                card_name: '', 
                card_full_meaning: '',
                card_upright: '',
                card_image: '',
                card_orientation: ''
            }
       }
   }

    getCardOrientation = () => {
        return ['upright', 'reversed'][Math.round(Math.random())]
    }

    drawCard = (period) => {

        let drawnCard = this.getCard()
         
        this.drawnCards.push(drawnCard)
        
        let cardOrientation = this.getCardOrientation()

        switch(period) {

            case 'past': 

            return this.setState({
                ...this.state,
                past: {
                    period: 'past', 
                    card_name: drawnCard.name,
                    card_full_meaning: drawnCard.full_meaning,
                    card_upright: drawnCard.upright,
                    card_reversed: drawnCard.reversed,
                    card_image: drawnCard.image,
                    card_orientation: cardOrientation
                    }
                 })

            case 'present':

            return this.setState({
                ...this.state,
                present: {
                    period: 'present',
                    card_name: drawnCard.name,
                    card_full_meaning: drawnCard.full_meaning,
                    card_upright: drawnCard.upright,
                    card_reversed: drawnCard.reversed,
                    card_image: drawnCard.image,
                    card_orientation: cardOrientation
                    }
                 })

            case 'future':

            return this.setState({
                ...this.state,
                future: {
                    period: 'future',
                    card_name: drawnCard.name,
                    card_full_meaning: drawnCard.full_meaning,
                    card_upright: drawnCard.upright,
                    card_reversed: drawnCard.reversed,
                    card_image: drawnCard.image,
                    card_orientation: cardOrientation
                    }
                 }) 

            default: return this.state
        }
    }

    getCard = () => {
        let drawnCard = this.props.cards[Math.floor(Math.random() * this.props.cards.length)]
        if (this.drawnCards.find(card => card = drawnCard)) {
           return this.props.cards[Math.floor(Math.random() * this.props.cards.length)]
        }
        return drawnCard  
    }

    deleteCard = (period) => {

        switch(period) {

            case 'past': 

            return this.setState({
                ...this.state,
                past: this.initialState.past
            })

            case 'present':

            return this.setState({
                ...this.state,
                present: this.initialState.present
            })

            case 'future':

            return this.setState({
                ...this.state,
                future: this.initialState.future 
            })

            default: return this.state
        }
       
    }

    clearAllCards = () => {
        this.setState(this.initialState)
    }
    
    render(){

        return (
        <div className="CardDraw">
            <p>Draw your cards.</p>
            

            <h2>Past</h2> 
            <br></br>
           <CardContainer card={this.state.past} drawCard={this.drawCard} deleteCard={this.deleteCard}/> 

           <h2>Present</h2>
           <br></br>
           <CardContainer card={this.state.present} drawCard={this.drawCard} deleteCard={this.deleteCard}/>

           <h2>Future</h2> 
           <br></br>
           <CardContainer card={this.state.future} drawCard={this.drawCard} deleteCard={this.deleteCard}/> 

            <button>Save This Reading</button>
            <button onClick={this.clearAllCards}>Refresh</button>
        </div>
        )
    }
}

export default CardDraw