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

// maybe have the below actions in a separate readingActions file???

export const postReading = (readingObj) => { 
    return (dispatch) => {
        dispatch({type:'LOADING_CARDS'});
        fetch('http://localhost:3000/cards', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({card: {...readingObj}})
        })
    }
}

// need to pass the below a new function from a new readingsReducer 

export const fetchReadings = () => {
    return (dispatch) => {
        dispatch({type:'LOADING_READINGS'});
        fetch('http://localhost:3000/readings')
            .then(resp => resp.json())
            .then(readingsObj => {
                dispatch({type:'ADD_READINGS', readings: readingsObj})
            })
    }
}





