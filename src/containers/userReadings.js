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

    componentWillMount(){
        this.props.fetchReadings(this.props.user.id)
      }

    render(){
        return (
            <div className="user_readings_component" style={this.state.view}>

                <h2>Your Saved Readings</h2>

                <div className="user_readings_list">
                    {this.props.readings[0] ? this.props.readings.map((reading, index) => {
                        return <ReadingThumbnail key={index} reading={reading} displayFullReading={this.displayFullReading}/>
                        }
                    ) : <p>You don't have any readings yet.  Click "Home" above and do your first one!</p>}
                </div>
                
                {this.state.showFullReading ? <FullReadingModal 
                user={this.props.user}
                reading={this.state.readingToShow} 
                fetchReadings={this.props.fetchReadings}
                closeFullReading={this.closeFullReading} 
                deleteReading={this.props.deleteReading}
                deleteCard={this.props.deleteCard}
                /> : null }

            </div>
        )
    }
}

export default UserReadings