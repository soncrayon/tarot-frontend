import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class LoggedInWrapper extends Component {
    
    redirectToLogin = () => {
        this.props.history.push('/')
    }

    UNSAFE_componentWillMount(){
        return this.props.loggedInStatus ? null : this.redirectToLogin()
    }
    
    // check login status again in the render function to prevent app from reading undefined props (like cards) that haven't been fetched yet
    render(){
        return this.props.loggedInStatus ? 
         (
            <div className="wrapper">
                {this.props.children}
            </div>
        ) : null 
    }
}

export default withRouter(LoggedInWrapper)  