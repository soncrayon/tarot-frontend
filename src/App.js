import React, { Component } from 'react';
import { connect } from 'react-redux'
import CardDrawAndReadingDisplay from './containers/cardDrawAndReadingDisplay'
// import DailyCards from './containers/dailyCards'
import UserReadings from './containers/userReadings'
import { fetchCards, fetchReadings } from './actions/cardActions'
import { postReading } from './actions/cardActions'
import HomePage from './components/homePage';



import AppHeader from './components/appHeader'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

class App extends Component {   
  
  componentDidMount (){
    this.props.fetchCards()
    this.props.fetchReadings()
  }
  
  render() {
    return (
      <div className="App">
       

      <Router>
      <div className="top_level">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tarot_board">Tarot Board</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/card_for_the_month">Card of the Month</Link>
            </li>
            <li>
              <Link to="/user_readings">User Readings</Link>
            </li>
          </ul>
        </nav>

       
        <Switch>

          <Route path="/about">
            <p>Here's some random about text. About component will go here.</p>
          </Route>

          <Route path="/card_for_the_month">
            <p>I will put the card for the month here. Probably drawn at random. Card of Month component here.</p>
          </Route>

          <Route path="/user_readings">
            <UserReadings readings={this.props.readings.readings}/>          
          </Route>
          
          <Route path="/tarot_board">
            <AppHeader /> 
            <CardDrawAndReadingDisplay cards={this.props.cards.cards} postReading={this.props.postReading} deleteCard={this.deleteCard}/> 
          </Route>
{/* need to move the below out of the overall router.  Look up how to build a welcome page. */}
          <Route path="/">
            <HomePage /> 
          </Route>

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
