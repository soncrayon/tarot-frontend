import React, { Component } from 'react';
import Reading from './Reading'
import { withRouter } from 'react-router-dom'

class UserReadings extends Component {

    redirectToLogin = () => {
        this.props.history.push('/')
    }
    
    componentWillMount(){
        return this.props.loggedInStatus ? null : this.redirectToLogin()
    }

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

export default withRouter(UserReadings)