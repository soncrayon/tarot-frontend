import React, { Component } from 'react';
import Reading from './Reading'

class UserReadings extends Component {
    render(){
        return (
            <div className="UserReadings">
                <h3>Your Saved Readings</h3>
                <Reading />
                {/* In the above will need to make a call to the backend to pull all saved readings and
                render a Reading component for each one of them passing props. */}
            </div>
        )
    }
}

export default UserReadings