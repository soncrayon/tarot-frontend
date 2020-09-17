import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faCaretDown, faCaretUp, faTimes, faStar, faSlash, faTrophy, faLocationArrow, faCrown, faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { fetchCards, deleteCard } from './actions/cardActions'
import { fetchReadings, postReading, deleteReading } from './actions/readingActions'
import { fetchUserSuits, fetchAllSuits, fetchUserOrientations, fetchAllOrientations, loginUser, logoutUser } from './actions/userActions'
import LoginPage from './components/login/loginPage';
import LoggedInWrapper from './components/loggedInWrapper'
import LoginPageWrapper from './components/loginPageWrapper'
import Signup from './components/signup/signupPage'
import AppTitle from './components/appTitle'
import Home from './containers/home/home'
import UserReadings from './containers/user_readings/userReadings'
import CardDescriptions from './containers/card_descriptions/cardDescriptions';
import About from './components/about/About'
import UserAccountMenu from './components/user_account_menu/userAccountMenu'
import Trends from './containers/trends/trends'
import AccountSettings from './components/user_account_menu/update_account/accountSettings'

// using a library component from FontAwesome to hold icons for the applications components
library.add(faBars, faCaretDown, faCaretUp, faTimes, faStar, faSlash, faTrophy, faLocationArrow, faCrown, faArrowUp, faArrowDown)

class App extends Component {   

  constructor() {
    super();
    this.state = { 
      user_account_menu_display: {display: 'none'}
     };
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
      
          {this.props.user ? <UserAccountMenu user={this.props.user} toggleUserAccountMenu={this.toggleUserAccountMenu}/> : null} 

        </div>

        <div className="user_account_menu_options" style={this.state.user_account_menu_display}>
            <div><Link to="/trends" onClick={() => this.toggleUserAccountMenu()}>YOUR TRENDS</Link></div>
            <div><Link to="/account_settings" onClick={() => this.toggleUserAccountMenu()}>ACCOUNT SETTINGS</Link></div>
        </div>
      
        
        <Switch>
    
          <Route
          path='/about'
          render={(props) => (
            <LoggedInWrapper loggedInStatus={this.props.isLoggedIn}>
              <About {...props} />           
            </LoggedInWrapper>
          )}
          />

          <Route
          path='/card_descriptions'
          render={(props) => (
            <LoggedInWrapper loggedInStatus={this.props.isLoggedIn}>
              <CardDescriptions {...props} cards={this.props.cards} />           
            </LoggedInWrapper>
          )}
          />
          
          <Route
          path='/home'
          render={(props) => (
            <LoggedInWrapper loggedInStatus={this.props.isLoggedIn}>
              <Home 
                {...props}
                user={this.props.user}
                cards={this.props.cards} 
                postReading={this.props.postReading} 
                fetchReadings ={this.props.fetchReadings}
                deleteCard={this.deleteCard}
              />
            </LoggedInWrapper>
          )}
          />
          
          <Route
          path='/user_readings'
          render={(props) => (
            <LoggedInWrapper loggedInStatus={this.props.isLoggedIn}>
              <UserReadings 
              {...props} 
              user={this.props.user} 
              readings={this.props.readings} 
              fetchReadings={this.props.fetchReadings} 
              deleteReading={this.props.deleteReading} 
              deleteCard={this.props.deleteCard} 
              />
            </LoggedInWrapper>
          )}
          />

          <Route
          path='/account_settings'
          render={(props) => (
            <LoggedInWrapper loggedInStatus={this.props.isLoggedIn}>
              <AccountSettings {...props} user={this.props.user}
              updateUserAfterAccountSettingsEdit = {this.updateUserAfterAccountSettingsEdit}
              />           
            </LoggedInWrapper>
          )}
          />

          <Route
          path='/trends'
          render={(props) => (
            <LoggedInWrapper loggedInStatus={this.props.isLoggedIn}>
              <Trends {...props} 
              user={this.props.user}
              fetchUserSuits = {this.props.fetchUserSuits}
              fetchUserOrientations = {this.props.fetchUserOrientations}
              fetchAllSuits = {this.props.fetchAllSuits}
              fetchAllOrientations = {this.props.fetchAllOrientations}
              allSuits = {this.props.metrics.all_suits}
              allOrientations = {this.props.metrics.all_orientations}
              />           
            </LoggedInWrapper>         
          )}
          />
          
          <Route
          path='/create_account'
          render={(props) => (
            <LoginPageWrapper {...props}>
              <Signup {...props} handleLogin={this.handleLogin} />
            </LoginPageWrapper>
          )}
          />

          <Route
          path='/'
          render={(props) => (
            <LoginPageWrapper {...props}>
              <LoginPage {...props} 
              handleLogin={this.handleLogin} 
              loggedInStatus={this.props.isLoggedIn} 
              user={this.props.user} errors={this.props.errors} 
              fetchReadings={this.props.fetchReadings} 
              loginUser={this.props.loginUser}/>
            </LoginPageWrapper>
          
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
    user: state.users.user, 
    isLoggedIn: state.users.isLoggedIn,
    errors: state.users.errors,
    metrics: state.users.metrics 
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user)),
  logoutUser: () => dispatch(logoutUser()),
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
