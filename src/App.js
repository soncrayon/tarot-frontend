import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faCaretDown, faCaretUp, faTimes, faStar, faSlash, faTrophy, faLocationArrow, faCrown, faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { fetchCards } from './actions/cardActions'
import { fetchReadings, postReading, deleteReading } from './actions/readingActions'
import { fetchUserArcana, fetchAllArcana, fetchUserOrientations, fetchAllOrientations, loginUser, logoutUser, createUserAccount, deleteUserAccount, updateUserAccount } from './actions/userActions'
import LoginPage from './components/loginPage';
import LoggedInWrapper from './components/loggedInWrapper'
import LoginPageWrapper from './components/loginPageWrapper'
import Signup from './components/signupPage'
import { AppTitle } from './components/appTitle'
import Home from './components/home'
import UserReadings from './components/userReadings'
import CardDescriptionLists from './components/cardDescriptionLists';
import { About } from './components/About'
import UserAccountMenu from './components/userAccountMenu'
import Trends from './components/trends'
import AccountSettings from './components/accountSettings'

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

    logOutAndClear = () => {
      this.setState({
        ...this.state,
        user_account_menu_display: {display: 'none'}
      })
      this.props.logoutUser()
    }

    deleteAndClear = (userId) => {
      this.setState({
        ...this.state,
        user_account_menu_display: {display: 'none'}
      })
      if (window.confirm('Are you sure you want to delete your account?')) {
        this.props.deleteUserAccount(userId)
      }
    }
 
  componentDidMount (){
      this.props.fetchCards()
      this.props.fetchAllArcana()
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
            <div className="nav_item"> <Link to="/" onClick={() => this.logOutAndClear()}>LOGOUT</Link> </div>
          </div>

          {this.props.user ? <UserAccountMenu user={this.props.user} toggleUserAccountMenu={this.toggleUserAccountMenu}/> : null} 

        </div>

        <div className="user_account_menu_options" style={this.state.user_account_menu_display}>
            <div><Link to="/trends" onClick={() => this.toggleUserAccountMenu()}>YOUR TRENDS</Link></div>
            <div><Link to="/account_settings" onClick={() => this.toggleUserAccountMenu()}>ACCOUNT SETTINGS</Link></div>
            {this.props.user ?   <div><Link to="/" onClick={() => this.deleteAndClear(this.props.user.id)}>DELETE ACCOUNT</Link></div> : null}
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
              <CardDescriptionLists {...props} cards={this.props.cards} />           
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
              />
            </LoggedInWrapper>
          )}
          />

          <Route
          path='/account_settings'
          render={(props) => (
            <LoggedInWrapper loggedInStatus={this.props.isLoggedIn}>
              <AccountSettings {...props} 
              user={this.props.user}
              updateUserAfterAccountSettingsEdit = {this.updateUserAfterAccountSettingsEdit}
              updateUserAccount = {this.props.updateUserAccount}
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
              fetchUserArcana = {this.props.fetchUserArcana}
              fetchUserOrientations = {this.props.fetchUserOrientations}
              fetchAllArcana = {this.props.fetchAllArcana}
              fetchAllOrientations = {this.props.fetchAllOrientations}
              allArcana = {this.props.metrics.all_arcana}
              allOrientations = {this.props.metrics.all_orientations}
              />           
            </LoggedInWrapper>         
          )}
          />
          
          <Route
          path='/create_account'
          render={(props) => (
            <LoginPageWrapper {...props}>
              <Signup {...props} 
              createUserAccount={this.props.createUserAccount}
              user={this.props.user}
              errors={this.props.signup_errors}
              loggedInStatus={this.props.isLoggedIn}
              />
            </LoginPageWrapper>
          )}
          />

          <Route
          path='/'
          render={(props) => (
            <LoginPageWrapper {...props}>
              <LoginPage {...props} 
              loggedInStatus={this.props.isLoggedIn} 
              user={this.props.user} 
              errors={this.props.login_errors} 
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
    login_errors: state.users.login_errors,
    signup_errors: state.users.signup_errors,
    metrics: state.users.metrics 
  }
}

const mapDispatchToProps = dispatch => ({
  createUserAccount: user => dispatch(createUserAccount(user)),
  updateUserAccount: user => dispatch(updateUserAccount(user)),
  deleteUserAccount: userId => dispatch(deleteUserAccount(userId)),
  loginUser: user => dispatch(loginUser(user)),
  logoutUser: () => dispatch(logoutUser()),
  fetchCards: () => dispatch(fetchCards()),
  fetchReadings: userId => dispatch(fetchReadings(userId)), 
  postReading: readingObject => dispatch(postReading(readingObject)),
  deleteReading: readingObject => dispatch(deleteReading(readingObject)),
  fetchUserArcana: userId => dispatch(fetchUserArcana(userId)),
  fetchAllArcana: () => dispatch(fetchAllArcana()),
  fetchUserOrientations: userId => dispatch(fetchUserOrientations(userId)),
  fetchAllOrientations: () => dispatch(fetchAllOrientations())
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
