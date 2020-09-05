import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class LoginWrapper extends Component {
    
    redirectToLogin = () => {
        this.props.history.push('/')
    }

    UNSAFE_componentWillMount(){
        return this.props.loggedInStatus ? null : this.redirectToLogin()
    }
    
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(LoginWrapper)  