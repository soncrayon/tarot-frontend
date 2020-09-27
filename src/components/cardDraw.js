import React, { Component } from 'react';
import { CardAndInfo } from './cardAndInfo'
import { getCardOrientation } from './getCardOrientation'

class CardDraw extends Component {
    
   constructor () {
    super();
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
        user_id: this.props.user.id
     }
     this.updateStateWithDrawnCard(newCardAtrributes)
   }

   setCardDeduplicationArray = () => {
        return Object.entries(this.state.reading).map(([period, value]) => {
            return value.id
        })
   }

    drawCard = (period) => {
        let drawnCard

        do {
            drawnCard = this.props.cards[Math.floor(Math.random() * this.props.cards.length)]
        } while (this.setCardDeduplicationArray().indexOf(drawnCard.id) !== -1)
        
        
        this.setCardAttributes(drawnCard, period)
    }
   
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

    updateStateWithNewReading = () => {
        this.setState(this.props.fetchReadings(this.props.user.id))
    }

    clearAllCards = () => {
        this.setState({...this.initialState, card_refresh: prevState => !prevState.card_refresh})
        this.updateStateWithNewReading()
    }

    updateAppAfterReadingSubmission = () => {
        alert('You have successfully submitted your reading.  Click readings in the menu to view.')
        this.clearAllCards()
    }

    saveReading =  () => {
        this.props.postReading(this.state.reading)
        this.updateAppAfterReadingSubmission()
    }

    validateCards = () => {
        return this.state.reading.past.name.length &&
        this.state.reading.present.name.length &&
        this.state.reading.future.name.length
    }
  
    render(){
        return (
        <div className="CardDraw">   
      
            <div className="card_row">
          
                <div className="card_container">
                    <h2>Past</h2> 
                    <CardAndInfo 
                    card={this.state.reading.past} 
                    drawCard={this.drawCard} 
                    deleteCard={this.deleteCard}
                    card_refresh={this.state.card_refresh}
                    /> 
                </div>

                <div className="card_container">
                    <h2>Present</h2>
                    <CardAndInfo 
                    card={this.state.reading.present} 
                    drawCard={this.drawCard} 
                    deleteCard={this.deleteCard}
                    card_refresh={this.state.card_refresh}
                    />
                </div>

                <div className="card_container">
                    <h2>Future</h2> 
                    <CardAndInfo 
                    card={this.state.reading.future} 
                    drawCard={this.drawCard} 
                    deleteCard={this.deleteCard}
                    card_refresh={this.state.card_refresh}
                    /> 
                </div>

           </div>
           <div className="game_functions">

            <button className="save_reading_button" onClick={this.saveReading} disabled={!this.validateCards()}>SAVE READING</button>
                
            <button className="clear_card_button" onClick={this.clearAllCards}>REFRESH</button>
            </div>
        </div>
        )
     
    }   
}

export default CardDraw
