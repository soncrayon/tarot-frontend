import React, { Component } from 'react';

class ReadingThumbnail extends Component {

    getCardImageOrientation = () => {
        if (this.props.reading.cards[0].orientation === "reversed") {
            return {transform: 'rotate(180deg)'}
        }
       return {}
    }

    render(){
        return (
            <div className="reading_thumbnail">
                <img 
                src={this.props.reading.cards[0].image} 
                alt="reading_pic" 
                style={this.getCardImageOrientation()} 
                onClick={() => this.props.displayFullReading(this.props.reading)} 
                />
                <h3>{this.props.reading.date_time_created}</h3>
            </div>
        )
    }
}

export default ReadingThumbnail