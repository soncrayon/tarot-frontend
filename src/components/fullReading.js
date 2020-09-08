import React, { Component } from 'react';

class FullReading extends Component {

    cardToDisplay = (period) => {

        

        let availableCards = {
            past: this.props.reading.cards[0],
            present: this.props.reading.cards[1],
            future: this.props.reading.cards[2]
        }    
        
        let cardToUse = availableCards[period]
        
        let availableOrientationDescriptions = {
            upright: this.cardToUse.upright_meaning,
            reversed: this.cardToUse.reversed_meaning
        }

        let cardOrientationDescription = availableOrientationDescriptions[cardToUse.orientation]
        debugger
            return (
                    <p>{cardToUse.period}</p>,
                    <img src={cardToUse.image} alt="past_card_image"></img>,
                    <p>{cardToUse.orientation}</p>,
                    <p>{cardOrientationDescription}</p>
            )
       }
    
    render(){
        debugger
        return this.props.cards ? (
            <div className="full_reading">

                <div className="fr_past_card">
                   {this.cardToDisplay("past")}
                </div>

                <div className="fr_present_card">
                    {this.cardToDisplay("present")}
                </div>

                <div className="fr_future_card">
                    {this.cardToDisplay("future")}
                </div>

            </div>
        ) : null 
    }
}

export default FullReading