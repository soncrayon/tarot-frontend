import React, { Component } from 'react';
import Reading from '../components/Reading'
import { withRouter } from 'react-router-dom'

class UserReadings extends Component {

    redirectToLogin = () => {
        this.props.history.push('/')
    }

    fadeOutBackground = () => {
        alert('need to work on this still')
    }
    
    displayFullReading = () => {
        this.fadeOutBackground()
    }
    
    UNSAFE_componentWillMount(){
        return this.props.loggedInStatus ? null : this.redirectToLogin()
    }
  
    render(){
        return (
            <div className="user_readings_component">
                <h3>Your Saved Readings</h3>
                <div className="user_readings_list">
                    {this.props.readings.filter(reading => reading.cards[0].user_id === this.props.user.id ).map((reading) => {
                        return <Reading reading={reading} displayFullReading={this.displayFullReading}/>
                        }
                    )}
                </div>
                <div className="full_reading_display">

                </div>
            
            </div>
        )
    }
}

export default withRouter(UserReadings)