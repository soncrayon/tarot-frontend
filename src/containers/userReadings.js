import React, { Component } from 'react';
import ReadingThumbnail from '../components/readingThumbnail'
import FullReading from '../components/fullReading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class UserReadings extends Component {

    state = {
        full_reading_splash_classname: "full_reading_display_splash_hidden",
        background_for_splash_classname: "background_for_splash_hidden",
        readingToShow: {}
    }
    
    displayFullReading = (readingToShow) => {
        document.querySelector(".App").className = "full_reading_display_background"
        document.querySelector(".app_nav").className = "app_nav_hidden"
        this.setState({
            full_reading_splash_classname: "full_reading_display_splash",
            background_for_splash_classname: "background_for_splash",
            readingToShow: readingToShow
        })
    }

    closeFullReading = () => {
        document.querySelector(".full_reading_display_background").className = "App"
        document.querySelector(".app_nav_hidden").className = "app_nav"
        this.setState({
            full_reading_splash_classname: "full_reading_display_splash_hidden",
            background_for_splash_classname: "background_for_splash_hidden"
        })
    }
    
    render(){
        return (
            <div className="user_readings_component">
                <h2>Your Saved Readings</h2>
                <div className="user_readings_list">
                    {this.props.readings.filter(reading => reading.cards[0].user_id === this.props.user.id ).map((reading) => {
                        return <ReadingThumbnail reading={reading} displayFullReading={this.displayFullReading}/>
                        }
                    )}
                </div>
                <div className={this.state.background_for_splash_classname}>
                </div>
                <div className={this.state.full_reading_splash_classname}>
                        <button onClick={() => this.closeFullReading()}><FontAwesomeIcon icon="times" /></button>
                       
                       <FullReading reading={this.state.readingToShow}/> 
                        
                        {/* <p>Need a second function/splash to display card details both here and on the Home page where the full description can be shown.</p> */}
                        <button>Delete Reading</button>
                        <p>The above button needs to delete the reading and also update the readings component to remove it.</p>
                        <p>Checked the saved readings for this function.  Might be able to modularize and re-use.</p>
                </div>
             
            </div>
        )
    }
}

export default UserReadings