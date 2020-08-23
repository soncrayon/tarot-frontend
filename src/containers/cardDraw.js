import React, { Component } from 'react';
import CardContainer from './cardContainer'
import { getCardOrientation } from '../actions/getCardOrientation'
import SessionCard from '../components/sessionCard'


// STATUS 1AUG2020 -- Need to figure out how to post a card with all attributes to the backend and return the Id to state so 
// that if a user decides to delete it, the id can pass back to the backend. 
// need to figure out how to associate a reading once all three cards are drawn
// set error boundary for less than 3 cards drawn--only execute reading function if a condition of three cards being in
// state is satisfied and display an error message otherwise "You must choose all three cards"

class CardDraw extends Component {
    
   constructor (props) {
    super(props);
    this.state = this.initialState;
    // this.drawnCardIds = [];
   }

   get initialState() {

        let cardAttributes = {
            card_name: '', 
            card_full_meaning: '',
            card_upright: '',
            card_image: '',
            card_orientation: '',
            card_id: '',
            reading_id: ''
        }
       return {
           reading: {
                past: {
                    period: 'past',
                    ...cardAttributes
                },

                present: {
                    period: 'present',
                    ...cardAttributes
                },

                future: {
                    period: 'future',
                    ...cardAttributes
                }
            }
       }
   }

//    addCardToBackend = (period) => { 
//     switch (period) {
//         case 'past': return this.props.addCard(this.state.reading.past)
//         case 'present': return this.props.addCard(this.state.reading.present)
//         case 'future': return this.props.addCard(this.state.reading.future)
//         default: return this.state
//     }
    
    
//    }

   updateStateWithDrawnCard = (newCardAtrributes) => {
    if (newCardAtrributes.period === 'past') {
        return this.setState({
            ...this.state,
            reading: {
            ...this.state.reading, 
                past: { ...newCardAtrributes }
            }   
         })
    } else if (newCardAtrributes.period === 'present') {
        return this.setState({
            ...this.state,
            reading: {
            ...this.state.reading, 
                present: { ...newCardAtrributes }
            }   
         })
    } else {
        return this.setState({
            ...this.state,
            reading: {
            ...this.state.reading, 
                future: { ...newCardAtrributes }
            }   
         })
    }        
}

   setCardOrientation = () => {
    return getCardOrientation()
    }
   
   setCardAttributes = (drawnCard, period) => {
       let newCardAtrributes = {
        period: period, 
        card_name: drawnCard.name,
        card_full_meaning: drawnCard.full_meaning,
        card_upright: drawnCard.upright,
        card_reversed: drawnCard.reversed,
        card_image: drawnCard.image,
        card_orientation: this.setCardOrientation(),
        card_id: drawnCard.id,
        reading_id: ''
     }
     this.updateStateWithDrawnCard(newCardAtrributes)
   }
   
    drawCard = (period) => {
        let drawnCard = this.getCard()
        this.setCardAttributes(drawnCard, period)
    }

    getCard = () => {
        let drawnCard

        let drawnCardIds = Object.entries(this.state.reading).map(([period, value]) => {
            return value.card_id
        })
    
        do {
            console.log(drawnCardIds)
            drawnCard = this.props.cards[Math.floor(Math.random() * this.props.cards.length)]
        } while (drawnCardIds.indexOf(drawnCard.id) !== -1)
        return drawnCard
    }

    deleteCard = (period) => {

        switch(period) {

            case 'past': 
            
            return this.setState({
                ...this.state,
                reading: {
                    ...this.state.reading, 
                    past: this.initialState.reading.past
                }
            })

            case 'present':

            return this.setState({
                ...this.state,
                reading: {
                    ...this.state.reading, 
                    present: this.initialState.reading.present
                }
            })

            case 'future':

            return this.setState({
                ...this.state,
                reading: {
                    ...this.state.reading, 
                    future: this.initialState.reading.future
                }
            })

            default: return this.state
        }
       
    }

    clearAllCards = () => {
        this.setState(this.initialState)
    }

    successfulSubmit = () => {
        alert('You have successfully submitted your reading.  Click readings in the menu to view.')
    }
    
    render(){

        return (
        <div className="CardDraw">
            <p>First, draw the governing card for your session.</p>
            
            <SessionCard card={this.state.reading.past} drawCard={this.drawCard} deleteCard={this.deleteCard}/> 

            <p>Draw your cards.</p>
        
            <h2>Past</h2> 
            <br></br>
           <CardContainer card={this.state.reading.past} drawCard={this.drawCard} deleteCard={this.deleteCard}/> 

           <h2>Present</h2>
           <br></br>
           <CardContainer card={this.state.reading.present} drawCard={this.drawCard} deleteCard={this.deleteCard}/>

           <h2>Future</h2> 
           <br></br>
           <CardContainer card={this.state.reading.future} drawCard={this.drawCard} deleteCard={this.deleteCard}/> 

            <button onClick={
                
                async ()=> {
                await this.props.postReading(this.state.reading)
                this.clearAllCards()
                this.successfulSubmit()
                } 
                
            }>Save This Reading</button>

            <button onClick={this.clearAllCards}>Refresh</button>
        </div>
        )
    }
}

export default CardDraw