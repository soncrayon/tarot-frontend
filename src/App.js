import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faCaretDown, faCaretUp, faTimes, faStar, faSlash, faTrophy, faLocationArrow, faCrown, faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import UserReadings from './containers/userReadings'
import { fetchCards, deleteCard } from './actions/cardActions'
import { fetchReadings, postReading, deleteReading } from './actions/readingActions'
import { fetchUserSuits, fetchAllSuits, fetchUserOrientations, fetchAllOrientations } from './actions/userActions'
import LoginPage from './components/loginPage';
import LoginWrapper from './components/loginWrapper'
import LandingPageWrapper from './components/landingPageWrapper'
import Signup from './components/signupPage'
import About from './components/About'
import Home from './containers/home'
import AppTitle from './components/appTitle'
import UserAccountMenu from './components/userAccountMenu'
import DetailedCardContainer from './containers/detailedCardsContainer';
import Trends from './containers/trends'
import AccountSettings from './components/accountSettings'


// using a library component from FontAwesome to hold icons for the applications components
library.add(faBars, faCaretDown, faCaretUp, faTimes, faStar, faSlash, faTrophy, faLocationArrow, faCrown, faArrowUp, faArrowDown)

class App extends Component {   
  
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: null,
      user_account_menu_display: {display: 'none'}
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

    toggleUserAccountMenu = () => {
      this.state.user_account_menu_display.display === 'none' ?
      this.setState({
        ...this.state,
        user_account_menu_display: {display: 'flex'}
      }) :
      this.setState({
        ...this.state,
        user_account_menu_display: {display: 'none'}
      })
    }

    updateUserAfterAccountSettingsEdit = (data) => {
      this.setState({
        ...this.state,
        user: data
      })
    }
 
  componentDidMount (){
      this.loginStatus() 
      this.props.fetchCards()
      this.props.fetchAllSuits()
      this.props.fetchAllOrientations()
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
              <div className="nav_item"> <Link to="/" onClick={this.handleLogout}>LOGOUT</Link> </div>
          </div>
      
          {this.state.user ? <UserAccountMenu user={this.state.user} toggleUserAccountMenu={this.toggleUserAccountMenu}/> : null} 

        </div>

        <div className="user_account_menu_options" style={this.state.user_account_menu_display}>
            <div><Link to="/trends" onClick={() => this.toggleUserAccountMenu()}>YOUR TRENDS</Link></div>
            <div><Link to="/account_settings" onClick={() => this.toggleUserAccountMenu()}>ACCOUNT SETTINGS</Link></div>
        </div>
      
        
        <Switch>
    
          <Route
          path='/about'
          render={(props) => (
            <LoginWrapper loggedInStatus={this.state.isLoggedIn}>
              <About {...props} />           
            </LoginWrapper>
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
                fetchReadings ={this.props.fetchReadings}
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
              fetchReadings={this.props.fetchReadings} 
              deleteReading={this.props.deleteReading} 
              deleteCard={this.props.deleteCard} 
              />
            </LoginWrapper>
          )}
          />

          <Route
          path='/account_settings'
          render={(props) => (
            <LoginWrapper loggedInStatus={this.state.isLoggedIn}>
              <AccountSettings {...props} user={this.state.user}
              updateUserAfterAccountSettingsEdit = {this.updateUserAfterAccountSettingsEdit}
              />           
            </LoginWrapper>
          )}
          />

          <Route
          path='/trends'
          render={(props) => (
            <LoginWrapper loggedInStatus={this.state.isLoggedIn}>
              <Trends {...props} 
              user={this.state.user}
              fetchUserSuits = {this.props.fetchUserSuits}
              fetchUserOrientations = {this.props.fetchUserOrientations}
              fetchAllSuits = {this.props.fetchAllSuits}
              fetchAllOrientations = {this.props.fetchAllOrientations}
              allSuits = {this.props.users.metrics.all_suits}
              allOrientations = {this.props.users.metrics.all_orientations}
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
              <LoginPage {...props} handleLogin={this.handleLogin} user={this.state.user} fetchReadings={this.props.fetchReadings}/>
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
    users: state.users, 
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCards: () => dispatch(fetchCards()),
  deleteCard: cardObject => dispatch(deleteCard(cardObject)),
  fetchReadings: userId => dispatch(fetchReadings(userId)), 
  postReading: readingObject => dispatch(postReading(readingObject)),
  deleteReading: readingObject => dispatch(deleteReading(readingObject)),
  fetchUserSuits: userId => dispatch(fetchUserSuits(userId)),
  fetchAllSuits: () => dispatch(fetchAllSuits()),
  fetchUserOrientations: userId => dispatch(fetchUserOrientations(userId)),
  fetchAllOrientations: () => dispatch(fetchAllOrientations())
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
