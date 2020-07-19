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


