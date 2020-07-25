import React from 'react'

// Remove connect and fetchCards from this and try passing it down through props instead.
// First try to figure out why this is not working. 



export const DeleteCardButton = props => {
    return (
        <div>
            <button onClick={() => props.deleteCard(props.period)}>Delete Card</button>
        </div>
    )
}

