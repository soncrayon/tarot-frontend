import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import './App.css';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import cardsReducer from './reducers/cardsReducer'

const store = createStore(cardsReducer, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


// 30Jun status--able to get the Tarot API to render all the traditional cards from the deck
// Need to plan app on paper and then make necessary adjustments to the code 