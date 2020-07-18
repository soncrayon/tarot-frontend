import React, { Component } from 'react';
import {connect} from 'react-redux'
import CardDrawAndReadingDisplay from './containers/cardDrawAndReadingDisplay'
import DailyCards from './containers/dailyCards'

// using the below as a placeholder 
import DailyCard from './containers/dailyCard'
import AppHeader from './components/appHeader'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

class App extends Component {   
  
  render() {
    return (
      <div className="App">
       

      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
          {/* the below are just placeholders; need to put this navigation at the top for an about page; card of the month page? */}
            <p>Here's some random about text.</p>
          </Route>
          <Route path="/users">
            <DailyCard />
          </Route>
          <Route path="/">
            {/* Here is the meat of the app which shown on the home tab */}
            <AppHeader /> 
            <CardDrawAndReadingDisplay cards={this.props.cards} /> 
            <DailyCards /> 

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
    loading: state.loading
  }
}

export default connect(mapStateToProps)(App)
