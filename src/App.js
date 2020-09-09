// 6SEP2020 -- COMPONENT UPDATES THE GOVERNING CARD EVERYTIME THE COMPONENT UPDATES -- CAN WE TAKE ADVANTAGE OF SHOULDCOMPONENTUPDATE TO STOP THIS 
// NEED TO DO SOMETHING ABOUT THE DOUBLED UP KEYS FOR reading.reading and card.card
// UPDATE ABOUT COMPONENT SO THAT ITS A SPLASH AND NOT A PAGE IN THE APP B/C IT WILL BE ACCESSED W/O LOGIN

import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faCaretDown, faCaretUp, faTimes} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import UserReadings from './containers/userReadings'
import { fetchCards } from './actions/cardActions'
import { fetchReadings , postReading, deleteReading } from './actions/readingActions'
import LoginPage from './components/loginPage';
import LoginWrapper from './components/loginWrapper'
import LandingPageWrapper from './components/landingPageWrapper'
import Signup from './components/signupPage'
import About from './components/About'
import Home from './containers/home'
import AppTitle from './components/appTitle'
import UserAccountMenu from './components/userAccountMenu'
import DetailedCardContainer from './containers/detailedCardsContainer';


// using a library component from FontAwesome to hold icons for the applications components
library.add(faBars, faCaretDown, faCaretUp, faTimes)

class App extends Component {   
  
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  }

  handleLogin = (data) => {
    this.setState({
      ...this.state,
      isLoggedIn: true,
      user: data.user
    })
  }
 
  handleLogout = () => {
      this.setState({
      ...this.state,
      isLoggedIn: false,
      user: {}
      })

    axios.delete('http://localhost:3001/logout', {withCredentials: true})
    .then(response => {
      console.log()
    })
    .catch(error => console.log(error))
    }

    loginStatus = () => {
      axios.get('http://localhost:3001/logged_in', 
     {withCredentials: true})
      .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response)
        } else {
          this.handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
    }

    redirectToLogin = () => {
      this.props.history.push('/')
    }
 
  componentDidMount (){
      this.loginStatus() 
      this.props.fetchCards()
      this.props.fetchReadings()
    }
 
  render() {
    
    return (
    <div className="top_level">

    <Router>

      <div className="App">
   
        <div className="app_nav">

          <AppTitle />
          
          <div className="menu_container">
              <div className="nav_item"> <Link to="/home">HOME</Link> </div>
              <div className="nav_item"> <Link to="/user_readings">YOUR READINGS</Link> </div>
              <div className="nav_item"> <Link to="/card_descriptions">CARD DESCRIPTIONS</Link></div>
              <div className="nav_item"> <Link to="/about">ABOUT</Link> </div>
              <div className="nav_item"> <Link to="/">LOGOUT</Link> </div>
          </div>
      
          <UserAccountMenu first_name={this.state.user.first_name}/>

        </div>
      
        
        <Switch>
    
          <Route
          path='/about'
          render={(props) => (
              <About {...props} />           
          )}
          />

          <Route
          path='/card_descriptions'
          render={(props) => (
            <LoginWrapper loggedInStatus={this.state.isLoggedIn}>
              <DetailedCardContainer {...props} cards={this.props.cards.cards} />           
            </LoginWrapper>
          )}
          />
          
          <Route
          path='/home'
          render={(props) => (
            <LoginWrapper loggedInStatus={this.state.isLoggedIn}>
              <Home 
                {...props}
                user={this.state.user}
                cards={this.props.cards.cards} 
                postReading={this.props.postReading} 
                fetchReadings={this.props.fetchReadings}
                deleteCard={this.deleteCard}
              />
            </LoginWrapper>
          )}
          />
          
          <Route
          path='/user_readings'
          render={(props) => (
            <LoginWrapper loggedInStatus={this.state.isLoggedIn}>
              <UserReadings 
                {...props}
                user={this.state.user}
                readings={this.props.readings.readings}
              />
            </LoginWrapper>
          )}
          />
          
          <Route
          path='/create_account'
          render={(props) => (
            <LandingPageWrapper {...props}>
              <Signup {...props} handleLogin={this.handleLogin} />
            </LandingPageWrapper>
          )}
          />

          <Route
          path='/'
          render={(props) => (
            <LandingPageWrapper {...props}>
              <LoginPage {...props} handleLogin={this.handleLogin} />
            </LandingPageWrapper>
          
          )}
          />

        </Switch>

        </div>
    </Router>

    </div>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
    readings: state.readings,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCards: () => dispatch(fetchCards()),
  fetchReadings: () => dispatch(fetchReadings()), 
  postReading: readingObject => dispatch(postReading(readingObject)),
  deleteReading: readingObject => dispatch(deleteReading(readingObject))
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
