export const postReading = (readingObj) => { 
    return (dispatch) => {
        dispatch({type:'LOADING_CARDS'});
        fetch('http://localhost:3001/cards', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({card: {...readingObj}})
        })
    }
}

export const deleteReading = (readingObj) => { 
    debugger
    return (dispatch) => {
        dispatch({type:'LOADING_CARDS'});
        fetch('http://localhost:3001/cards', {
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({card: {...readingObj}})
        })
    }
}

// need to set the userReadings to only display readings for the currently logged in user. 

export const fetchReadings = () => {
    return (dispatch) => {
        dispatch({type:'LOADING_READINGS'});
        fetch('http://localhost:3001/readings')
            .then(resp => resp.json())
            .then(readingsJSONResponse => { 
                dispatch({type:'ADD_READINGS', readings: readingsJSONResponse})
            })
    }
}