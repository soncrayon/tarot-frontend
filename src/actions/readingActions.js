export const postReading = (readingObj) => { 
    return (dispatch) => {
        dispatch({type:'SAVING_READING'});
        fetch('https://ori-tarot-api.herokuapp.com/readings', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({reading: {user_id: readingObj.past.user_id}})
        })
        .then(resp => resp.json())
        .then(resp => {
            let updatedReadingObj = Object.assign({}, readingObj, {reading_id: resp.id})
            fetch('https://ori-tarot-api.herokuapp.com/cards', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({card: {...updatedReadingObj}})
            })
            .then(resp => resp.json())
            .then(resp => {
                dispatch({type:'READING_SAVED', payload: resp})
            })
        })
    }
}

export const deleteReading = (reading) => { 
    return (dispatch) => {
        dispatch({type: 'DELETING_READING'});
            fetch(`https://ori-tarot-api.herokuapp.com/readings/${reading.id}`, {
                method: 'DELETE'
            })
            .then(resp => resp.json())
            .then(resp => {
                dispatch({type: 'READING_DELETED', payload: resp})
            })
    }
}

export const fetchReadings = (userId) => {
    return (dispatch) => {
        dispatch({type:'LOADING_READINGS'});
        fetch(`https://ori-tarot-api.herokuapp.com/loggedin_user_readings/${userId}`)
            .then(resp => resp.json())
            .then(resp => {
                dispatch({type:'ADD_READINGS', payload: resp})
            })
    }
}