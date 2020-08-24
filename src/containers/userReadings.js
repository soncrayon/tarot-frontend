import React, { Component } from 'react';
import Reading from './Reading'
import { fetchReadings } from '../actions/readingActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class UserReadings extends Component {

    state = {
        readings: this.props.readings || [] 
    }
    
    redirectToLogin = () => {
        this.props.history.push('/')
    }
    
    componentWillMount(){
        return this.props.loggedInStatus ? null : this.redirectToLogin()
    }

    componentDidMount(){
        this.props.fetchReadings()
    }

    render(){
        return (
            <div className="UserReadings">
                <h3>Your Saved Readings</h3>
                {this.state.readings.filter(reading => reading.cards[0].user_id === this.props.user.id ).map((reading) => {
                    return <Reading reading={reading}/>
                     }
                )}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchReadings: () => dispatch(fetchReadings()), 
  })

export default connect(null, mapDispatchToProps)(withRouter(UserReadings))