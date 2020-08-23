import React, { Component } from "react"
import { withRouter } from 'react-router-dom'
import CardContainer from '../containers/cardContainer'

class SessionCard extends Component {

    redirectToLogin = () => {
        this.props.history.push('/')
    }
    
    UNSAFE_componentWillMount(){
        return this.props.loggedInStatus ? null : this.redirectToLogin()
    }

    render(){
        return (
            <div>
                <CardContainer card={this.props.card} drawCard={this.props.drawCard} deleteCard={this.props.deleteCard}/> 

            </div>
        )
    }
}

export default withRouter(SessionCard)

