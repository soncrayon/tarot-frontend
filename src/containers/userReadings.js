import React, { Component } from 'react';
import Reading from '../components/Reading'
// import { withRouter } from 'react-router-dom'

class UserReadings extends Component {

    state = {
        full_reading_splash_classname: "full_reading_display_splash_hidden",
        background_for_splash_classname: "background_for_splash_hidden",
        // might need a showReading container for the below component
        reading_to_show: ''
    }
    
    // redirectToLogin = () => {
    //     this.props.history.push('/')
    // }
    
    displayFullReading = () => {
        document.getElementsByClassName("App")[0].className = "full_reading_display_background"
        document.querySelector(".app_nav").className = "app_nav_hidden"
        this.setState({
            full_reading_splash_classname: "full_reading_display_splash",
            background_for_splash_classname: "background_for_splash"
        })
    }

    closeFullReading = () => {
        document.getElementsByClassName("full_reading_display_background")[0].className = "App"
        document.querySelector(".app_nav_hidden").className = "app_nav"
        this.setState({
            full_reading_splash_classname: "full_reading_display_splash_hidden",
            background_for_splash_classname: "background_for_splash_hidden"
        })
    }
    
    // UNSAFE_componentWillMount(){
    //     return this.props.loggedInStatus ? null : this.redirectToLogin()
    // }
  
    render(){
        return (
            <div className="user_readings_component">
                <h2>Your Saved Readings</h2>
                <div className="user_readings_list">
                    {this.props.readings.filter(reading => reading.cards[0].user_id === this.props.user.id ).map((reading) => {
                        return <Reading reading={reading} displayFullReading={this.displayFullReading}/>
                        }
                    )}
                </div>
                <div className={this.state.background_for_splash_classname}>
                </div>
                <div className={this.state.full_reading_splash_classname}>
                        {/* need to pass the below the right props--may need a showReading container??? */}
                        {/* <Reading /> */}
                        <button onClick={() => this.closeFullReading()}>x</button>
                        <p>Need to grab the id of the clicked reading to display the three cards--need card component???</p>
                        <p>Need a second function/splash to display card details both here and on the Home page where the full description can be shown.</p>
                        <button>Delete Reading</button>
                        <p>The above button needs to delete the reading and also update the readings component to remove it.</p>
                        <p>Checked the saved readings for this function.  Might be able to modularize and re-use.</p>
                </div>
             
            </div>
        )
    }
}

// THIS WAS ENVELOPED IN withRouter(UserReadings)
export default UserReadings