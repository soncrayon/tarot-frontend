export const fetchCards = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_CARDS'});
        fetch('https://tarot.howlcode.com/api/v1/cards')
        .then(resp => resp.json())
        .then(cardsJSONresponse => {
            dispatch({type: 'ADD_CARDS', cards: cardsJSONresponse})
        })
    }
}

export const deleteCard = (cards) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_CARDS'});
        fetch(`http://localhost:3001/cards/${cards[0].id},${cards[1].id},${cards[2].id}`, {
            method: 'DELETE'
        })
    }
}







