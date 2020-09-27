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







