import React from 'react'
import { fetchCards } from '../actions/cardActions';
import {connect} from 'react-redux'

// Remove connect and fetchCards from this and try passing it down through props instead.
// First try to figure out why this is not working. 



const DrawCardButton = (props) => {
    return (
        <div>
            <button onClick={fetchCards()}>Draw Card</button>
        </div>
    )
}

export default connect(null, {fetchCards})(DrawCardButton) 