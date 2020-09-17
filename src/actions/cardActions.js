export const fetchCards = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_CARDS'});
        fetch('https://tarot.howlcode.com/api/v1/cards')
        .then(resp => resp.json())
        .then(resp => {
            dispatch({type: 'ADD_CARDS', payload: resp})
        })
    }
}

export const deleteCard = (cards) => {
    return (dispatch) => {
        dispatch({type: 'DELETING_CARDS'});
        fetch(`http://localhost:3001/cards/${cards[0].id},${cards[1].id},${cards[2].id}`, {
            method: 'DELETE'
        })
    }
}







