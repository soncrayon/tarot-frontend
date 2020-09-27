export const postReading = (readingObj) => { 
    return (dispatch) => {
        dispatch({type:'SAVING_READING'});
        fetch('http://localhost:3001/readings', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({reading: {user_id: readingObj.past.user_id}})
        })
        .then(resp => resp.json())
        .then(resp => {
            let updatedReadingObj = Object.assign({}, readingObj, {reading_id: resp.id})
            fetch('http://localhost:3001/cards', {
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
            fetch(`http://localhost:3001/readings/${reading.id}`, {
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
        fetch(`http://localhost:3001/loggedin_user_readings/${userId}`)
            .then(resp => resp.json())
            .then(resp => {
                dispatch({type:'ADD_READINGS', payload: resp})
            })
    }
}