import React, { Component } from 'react';
import ReadingThumbnail from '../components/readingThumbnail'
import FullReadingModal from '../components/fullReadingModal';

class UserReadings extends Component {

    state = {
        view: null,
        showFullReading: false, 
        readingToShow: {}
    }
    
    displayFullReading = (readingToShow) => {
        this.setState({
            view: {position: "fixed"},
            showFullReading: true, 
            readingToShow: readingToShow
        })
    }

    closeFullReading = () => {
        this.setState({
            ...this.state, 
            view: null,
            showFullReading: false 
        })
    }

    render(){
        return (
            <div className="user_readings_component" style={this.state.view}>

                <h2>Your Saved Readings</h2>

                <div className="user_readings_list">
                    {this.props.readings.filter(reading => reading.cards[0].user_id === this.props.user.id ).map((reading, index) => {
                        return <ReadingThumbnail key={index} reading={reading} displayFullReading={this.displayFullReading}/>
                        }
                    )}
                </div>
                
                {this.state.showFullReading ? <FullReadingModal reading={this.state.readingToShow} closeFullReading={this.closeFullReading}/> : null }

            </div>
        )
    }
}

export default UserReadings