// 25AUG2020 -- need to spend some time figuring out whether any of this code can be extracted out into separate components
// This is a very long containiner component. 

// click even on any card only changes the last one. 

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
            },
            card_refresh: false
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
                },
            })

            case 'present':

            return this.setState({
                ...this.state,
                reading: {
                    ...this.state.reading, 
                    present: this.initialState.reading.present
                },
            })

            case 'future':

            return this.setState({
                ...this.state,
                reading: {
                    ...this.state.reading, 
                    future: this.initialState.reading.future
                },
            })

            default: return this.state
        }
    }

    clearAllCards = () => {
        this.setState({...this.initialState, card_refresh: prevState => !prevState.card_refresh})
    }

    successfulSubmit = () => {
        alert('You have successfully submitted your reading.  Click readings in the menu to view.')
    }

    updateStateWithNewReading = () => {
        this.setState(this.props.fetchReadings())
    }

    updateAppAfterReadingSubmission = () => {
        this.clearAllCards()
        this.successfulSubmit()
        this.updateStateWithNewReading()
    }

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

            <button onClick={this.saveReading}>Save This Reading</button>
                
            <button onClick={this.clearAllCards}>Refresh</button>
            </div>
        </div>
        )
     
    }   
}

export default CardDraw
