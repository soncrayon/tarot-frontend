import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class FullReadingModal extends Component {

    getCardImageOrientation = (card) => {
        if (this.props.reading.cards.filter(cardToCompare => card.id === cardToCompare.id)[0].orientation === "reversed") {
            return {transform: 'rotate(180deg)'}
        }
       return {}
    }

    render(){
        return this.props.reading.cards ? (
        <div className="modal_container">

            <div className="full_reading_modal">
                
            <button onClick={() => this.props.closeFullReading()} className="close_modal"><FontAwesomeIcon icon="times" />  CLOSE</button>
            
            <h2>{this.props.reading.date_time_created}</h2> 

                <div className="full_reading">
                    {this.props.reading.cards.map(card => {
                        let cardOrientationMeaning; 
                        if (card.orientation === "upright") {
                            cardOrientationMeaning = card.upright_meaning
                        } else if (card.orientation === "reversed") {
                            cardOrientationMeaning = card.reversed_meaning
                        }
                        return (
                            <div className="full_reading_card">
                                <h3>{card.period}</h3>
                                <img src={card.image} alt="card_image" style={this.getCardImageOrientation(card)} /> 
                                <p>{card.name}</p>
                                <p>{card.orientation}</p>
                                <p>{cardOrientationMeaning}</p>
                            </div>
                        )
                    })}

                </div>

                    <button onClick={() => this.props.deleteReading()} className="delete_button">DELETE READING</button>
                        
               

            </div>

        </div>
           
        ) : null 
    }
}

export default FullReadingModal