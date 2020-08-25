import React, { Component } from 'react';
import CardContainer from './cardContainer'
import { getCardOrientation } from '../actions/getCardOrientation'

class CardDraw extends Component {
    
   constructor (props) {
    super(props);
    this.state = this.initialState;
   }

   get initialState() {

        let cardAttributes = {
            name: '', 
            full_meaning: '',
            upright_meaning: '',
            image: '',
            orientation: '',
            id: '',
            reading_id: '',
            user_id:''
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
    //    do I need this function at all -- can I just rely on getCardOrientation in the below set attributes 
    // since a value is being returned from that function??? 
    return getCardOrientation()
    }
   
   setCardAttributes = (drawnCard, period) => {
       let newCardAtrributes = {
        period: period, 
        name: drawnCard.name,
        full_meaning: drawnCard.full_meaning,
        upright_meaning: drawnCard.upright,
        reversed_meaning: drawnCard.reversed,
        image: drawnCard.image,
        orientation: this.setCardOrientation(),
        id: drawnCard.id,
        reading_id: '',
        user_id: this.props.user.id
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
            return value.id
        })
    
        do {
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
            <div className="card_row">
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
           </div>
           <div className="game_functions">

            <button onClick={
                
                async ()=> {
                await this.props.postReading(this.state.reading)
                this.props.fetchReadings()
                this.clearAllCards()
                this.successfulSubmit()
                } 
                
            }>Save This Reading</button>

            <button onClick={this.clearAllCards}>Refresh</button>
            </div>
        </div>
        )
    }
}

export default CardDraw

// the submit reading click needs to set off a cascade of functions:
// first needs to validate thate there is actually data in the past, present, future keys (!== ''  or something similar)
// (on the above point, can I replace the empty strings with null -- then use that to verify)
// if that conditions is satisfied then post the reading
// await post reading, then fetch readings (throw a console log or debugger in fetch readings in reading actions to make sure it's being hit every time)
// await fetch readings, then post successful submit
// then clear all cards 