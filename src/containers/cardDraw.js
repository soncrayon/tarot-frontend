// 6SEP2020 NEED TO ENSURE USERS CAN'T SAVE A READING WITH JUST ONE OR TWO CARDS

import React, { Component } from 'react';
import CardContainer from './cardContainer'
import { getCardOrientation } from '../actions/getCardOrientation'

class CardDraw extends Component {
    
   constructor (props) {
    super(props);
    this.state = this.initialState;
   }

//  this getter function sets the initial attributes for all the cards which are just empty strings at this point
//  it also adds a card_refresh key to add more control in re-displaying the cardBack component when cards are refreshed 
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
            },
            card_refresh: false
       }
   }

// once the new attributes are derived from the new card picked at random, state is updated with that information
   updateStateWithDrawnCard = (newCardAtrributes) => {
    
    const updatedCardState = {

            past: () => { return this.setState({
                ...this.state,
                reading: {
                ...this.state.reading, 
                    past: { ...newCardAtrributes }
                }   
            })},

            present: () => { return this.setState({
                ...this.state,
                reading: {
                ...this.state.reading, 
                    present: { ...newCardAtrributes }
                }   
            })},

            future: () => { return this.setState({
                ...this.state,
                reading: {
                ...this.state.reading, 
                    future: { ...newCardAtrributes }
                }   
            })}

        }

    return updatedCardState[newCardAtrributes.period]() || this.state 

    }
   
    // set newCardAttributes object from drawnCard object to match api variables to application attributes; pass object to update state function
   setCardAttributes = (drawnCard, period) => {
       let newCardAtrributes = {
        period: period, 
        name: drawnCard.name,
        full_meaning: drawnCard.full_meaning,
        upright_meaning: drawnCard.upright,
        reversed_meaning: drawnCard.reversed,
        image: drawnCard.image,
        orientation: getCardOrientation(),
        id: drawnCard.id,
        reading_id: '',
        user_id: this.props.user.id
     }
     this.updateStateWithDrawnCard(newCardAtrributes)
   }

   
//    set an array to hold card ids to check for duplication 

   setCardDeduplicationArray = () => {
        return Object.entries(this.state.reading).map(([period, value]) => {
            return value.id
        })
   }

//  pick a card at random from card objects in redux store; check the id to ensure that the card does not match a card that was already drawn 
    drawCard = (period) => {
        let drawnCard

        do {
            drawnCard = this.props.cards[Math.floor(Math.random() * this.props.cards.length)]
        } while (this.setCardDeduplicationArray().indexOf(drawnCard.id) !== -1)
        
        
        this.setCardAttributes(drawnCard, period)
    }
   
    // this function will choose the appropriate card based on the passed-in period and reset it to its initial state 
    deleteCard = (period) => {

        const resetCardState = {
            
                past: () => { return this.setState({
                    ...this.state,
                    reading: {
                        ...this.state.reading, 
                        past: this.initialState.reading.past
                    }
                })},

                present: () => { return this.setState({
                    ...this.state,
                    reading: {
                        ...this.state.reading, 
                        present: this.initialState.reading.present
                    }
                })},

                future: () => { return this.setState({
                    ...this.state,
                    reading: {
                        ...this.state.reading, 
                        future: this.initialState.reading.future
                    }
                })}
            }

        return resetCardState[period]() || this.state 

    }

// fetch updated readings
// this forces an update to state so that new readings are reflected immediately in the app 
    updateStateWithNewReading = () => {
        this.setState(this.props.fetchReadings(this.props.user.id))
    }

// clear card spread 
    clearAllCards = () => {
        this.setState({...this.initialState, card_refresh: prevState => !prevState.card_refresh})
        this.updateStateWithNewReading()
    }

// notify user of successful submission 
    updateAppAfterReadingSubmission = () => {
        alert('You have successfully submitted your reading.  Click readings in the menu to view.')
        this.clearAllCards()
    }

// post the reading to the backend 
    saveReading = async () => {
        await this.props.postReading(this.state.reading)
        this.updateAppAfterReadingSubmission()
    }
  
    render(){
        return (
        <div className="CardDraw">   

        <p>Draw your cards. Click each card below to reveal your reading.</p>
            
            <div className="card_row">
          
                <div className="card_container">
                    <h2>Past</h2> 
                    <CardContainer 
                    card={this.state.reading.past} 
                    drawCard={this.drawCard} 
                    deleteCard={this.deleteCard}
                    card_refresh={this.state.card_refresh}
                    /> 
                </div>

                <div className="card_container">
                    <h2>Present</h2>
                    <CardContainer 
                    card={this.state.reading.present} 
                    drawCard={this.drawCard} 
                    deleteCard={this.deleteCard}
                    card_refresh={this.state.card_refresh}
                    />
                </div>

                <div className="card_container">
                    <h2>Future</h2> 
                    <CardContainer 
                    card={this.state.reading.future} 
                    drawCard={this.drawCard} 
                    deleteCard={this.deleteCard}
                    card_refresh={this.state.card_refresh}
                    /> 
                </div>

           </div>
           <div className="game_functions">

            <button className="save_reading_button" onClick={this.saveReading}>SAVE READING</button>
                
            <button className="clear_card_button" onClick={this.clearAllCards}>REFRESH</button>
            </div>
        </div>
        )
     
    }   
}

export default CardDraw
