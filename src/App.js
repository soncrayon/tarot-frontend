import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import CardDrawAndReadingDisplay from './containers/cardDrawAndReadingDisplay'
import UserReadings from './containers/userReadings'
import { fetchCards, fetchReadings } from './actions/cardActions'
import { postReading } from './actions/cardActions'
import LoginPage from './components/loginPage';
import Signup from './components/signupPage'
import About from './components/About'

// is there a way to change the url and browser tab title to match the app? 

import AppHeader from './components/appHeader'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


class App extends Component {   
  
  // How does adding this constructor affect the work the reducer is doing? app state? 
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  }

  componentDidMount (){
    this.loginStatus() 
    this.props.fetchCards()
    this.props.fetchReadings()
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
      this.setState({
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
  
  render() {
    return (
      <div className="App">
      <div className="top_level">

      <Router>

      
        <nav>
          <ul>
            <li> <Link to="create_account">Create Account</Link></li>
            <li> <Link to="/home">Home</Link> </li>
            <li> <Link to="/about">About</Link> </li>
            <li> <Link to="/user_readings">User Readings</Link> </li>
            <li> <Link to="/" onClick={this.handleLogout}>Logout</Link> </li>
          </ul>
        </nav>
   

       
        <Switch>
   
        <Route path="/home">
            <AppHeader first_name={this.state.user.first_name}/> 
            <CardDrawAndReadingDisplay 
            cards={this.props.cards.cards} 
            postReading={this.props.postReading} 
            deleteCard={this.deleteCard}
            loggedInStatus={this.state.isLoggedIn}
            /> 
          </Route>  
          
        <Route path="/about">
            <About 
            loggedInStatus={this.state.isLoggedIn}
            /> 
          </Route>
        
        <Route path="/user_readings">
            <UserReadings 
            readings={this.props.readings.readings}
            loggedInStatus={this.state.isLoggedIn}
            />          
          </Route>
          
          <Route path="/create_account">
            <Signup 
            handleLogin={this.handleLogin}
            /> 
          </Route>

          <Route path="/">
            <LoginPage 
            handleLogin={this.handleLogin}
            /> 
          </Route>

        </Switch>
    
    </Router>

    </div>
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
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
