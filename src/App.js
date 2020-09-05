import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import UserReadings from './containers/userReadings'
import { fetchCards } from './actions/cardActions'
import { fetchReadings , postReading } from './actions/readingActions'
import LoginPage from './components/loginPage';
import LoginWrapper from './components/loginWrapper'
import Signup from './components/signupPage'
import About from './components/About'
import Home from './containers/home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


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
        <nav>
            <ul>
              <li> <Link to="/home">Home</Link> </li>
              <li> <Link to="/about">About</Link> </li>
              <li> <Link to="/user_readings">User Readings</Link> </li>
              <li> <Link to="/" onClick={this.handleLogout}>Logout</Link> </li>
            </ul>
          </nav>
      </div>
      
       
        <Switch>
    
          <Route
          path='/about'
          render={(props) => (
            <LoginWrapper loggedInStatus={this.state.isLoggedIn}>
              <About 
                {...props}
              />
            </LoginWrapper>
           
          )}
          />
          
          <Route
          path='/home'
          render={(props) => (
            <Home 
              {...props}
              user={this.state.user}
              cards={this.props.cards.cards} 
              postReading={this.props.postReading} 
              fetchReadings={this.props.fetchReadings}
              deleteCard={this.deleteCard}
              loggedInStatus={this.state.isLoggedIn}
            />
          )}
          />
          
          <Route
          path='/user_readings'
          render={(props) => (
            <UserReadings 
              {...props}
              user={this.state.user}
              readings={this.props.readings.readings}
              loggedInStatus={this.state.isLoggedIn}
            />
          )}
          />
          
          <Route
          path='/create_account'
          render={(props) => (
            <Signup 
              {...props}
              handleLogin={this.handleLogin}
            />
          )}
          />

          <Route
          path='/'
          render={(props) => (
            <LoginPage 
              {...props}
              handleLogin={this.handleLogin}
            />
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
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
