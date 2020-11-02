import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class LoginPageWrapper extends Component {
    
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