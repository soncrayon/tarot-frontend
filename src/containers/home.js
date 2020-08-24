import React, { Component } from 'react';
import AppHeader from '../components/appHeader'
import CardDrawAndReadingDisplay from './cardDrawAndReadingDisplay'
import { withRouter } from 'react-router-dom'

class Home extends Component {
    
    redirectToLogin = () => {
        this.props.history.push('/')
    }
    
    UNSAFE_componentWillMount(){
        return this.props.loggedInStatus ? null : this.redirectToLogin()
    }

    render(){
        return (
            <div className="Home">

                <AppHeader 
                first_name={this.props.user.first_name}
                />

                <CardDrawAndReadingDisplay 
                user={this.props.user}
                cards={this.props.cards} 
                postReading={this.props.postReading} 
                deleteCard={this.props.deleteCard}
                loggedInStatus={this.props.loggedInStatus}
                /> 

            </div>
        )
    }
}

export default withRouter(Home)