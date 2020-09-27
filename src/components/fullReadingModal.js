import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FullReadingCard } from './fullReadingCard'

class FullReadingModal extends Component {

    getCardImageOrientation = (card) => {
        if (this.props.reading.cards.filter(cardToCompare => card.id === cardToCompare.id)[0].orientation === "reversed") {
            return {transform: 'rotate(180deg)'}
        }
       return {}
    }

    closeModalAndNotifyUser = () => {
        this.props.closeFullReading()
        alert("You have successfully deleted that reading.")
    }
  
    deleteReading = (reading) => {
        this.props.deleteReading(reading)
        this.closeModalAndNotifyUser()
    }
 
    render(){
        return this.props.reading.cards ? (
        <div className="modal_container">

            <div className="full_reading_modal">
                
            <button onClick={() => this.props.closeFullReading()} className="close_modal"><FontAwesomeIcon icon="times" />  CLOSE</button>
            
            <h2>{this.props.reading.date_time_created}</h2> 

                <div className="full_reading">
                    {this.props.reading.cards.map((card, index) => {
                        return <FullReadingCard key={index} card={card} getCardImageOrientation={this.getCardImageOrientation}/>
                    })}

                </div>

                <button onClick={() => this.deleteReading(this.props.reading)} className="delete_button">DELETE READING</button>
                        
               

            </div>

        </div>
           
        ) : null 
    }
}

export default FullReadingModal