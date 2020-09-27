import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class LoginPageWrapper extends Component {
    
    redirectToApp = () => {
        this.props.history.push('/home')
    }
    
    UNSAFE_componentWillMount() {
        return this.props.loggedInStatus ? this.redirectToApp() : null
    }

    componentDidMount(){
        document.querySelector('.app_nav').style.display = "none";
    }

    componentWillUnmount(){
        document.querySelector('.app_nav').style.display = "flex";
    }
    
    render(){
        return (
            <div className="wrapper">
                {this.props.children}
            </div>
        ) 
    }
}

export default withRouter(LoginPageWrapper)  