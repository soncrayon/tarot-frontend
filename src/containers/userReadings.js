import React, { Component } from 'react';
import Reading from './Reading'

class UserReadings extends Component {
    
    render(){
        return (
            <div className="UserReadings">
                <h3>Your Saved Readings</h3>
                {this.props.readings.map((reading) => {
                    return <Reading reading={reading}/>
                     }
                )}
            </div>
        )
    }
}

export default UserReadings