import React, { Component } from 'react';
import Reading from './Reading'
import { connect } from 'react-redux'
import { fetchReadings } from '../actions/cardActions'

// Think about whether this component really needs to be connected to the store 

class UserReadings extends Component {
    
    render(){
        return (
            <div className="UserReadings">
                <h3>Your Saved Readings</h3>
                <Reading readings={this.props.readings}/>
                {/* In the above will need to make a call to the backend to pull all saved readings and
                render a Reading component for each one of them passing props. */}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchReadings: () => dispatch(fetchReadings())
  })

export default connect(null, mapDispatchToProps) (UserReadings)