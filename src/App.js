import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchCards } from './actions/cardActions';
// import CardList from './containers/cardList'
import CardDraw from './containers/cardDraw'
import UserReadings from './containers/userReadings'
import DailyCards from './containers/dailyCards'
import AppHeader from './components/appHeader'

class App extends Component {   

  componentDidMount() {
    this.props.fetchCards()
  }
  
  render() {
    return (
      <div className="App">
        <AppHeader /> 
        <CardDraw class="CardDraw" cards={this.props.cards}/>
        <UserReadings class="UserReadings" />
        <DailyCards class="DailyCards"/> 
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

const mapDispatchToProps = dispatch => {
  return {
    fetchCards: () => dispatch(fetchCards())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
