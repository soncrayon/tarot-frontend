import React, { Component } from "react"
import { withRouter } from 'react-router-dom'

class About extends Component {

    redirectToLogin = () => {
        this.props.history.push('/')
    }
    
    UNSAFE_componentWillMount(){
        return this.props.loggedInStatus ? null : this.redirectToLogin()
    }

    render(){
        return (
            <div className="about_text">
                <p>ORI Tarot is a tarot card application that allows you to create simple "3-card" readings.
                    Simply choose a card for your past, present, and future.  If you want to keep your readings,
                    you can save them to your accout to review later.  The app also provides a governing card for
                    each session.  
                    
                    Tarot card reading is more of an art than a science for those looking 
                    for deeper meaning in the cards.  Not everything can be taken at face value.  For me, I wanted 
                    to create this app because I enjoy it--I hope you do to!</p>  
            </div>
        )
    }
}

export default withRouter(About)