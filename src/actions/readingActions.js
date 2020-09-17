export const postReading = (readingObj) => { 
    return (dispatch) => {
        dispatch({type:'SAVING_READING'});
        fetch('http://localhost:3001/cards', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({card: {...readingObj}})
        })
    }
}

export const deleteReading = (readingId) => { 
    return (dispatch) => {
        dispatch({type: 'DELETING_READING'});
        fetch(`http://localhost:3001/readings/${readingId}`, {
            method: 'DELETE'
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

// export const postReading = (readingObj) => { 
//     return (dispatch) => {
//         dispatch({type:'LOADING_CARDS'});
//         fetch('http://localhost:3001/cards', {
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({card: {...readingObj}})
//         })
//     }
// }

// export const deleteReading = (readingId) => { 
//     return (dispatch) => {
//         dispatch({type: 'LOADING_READINGS'});
//         fetch(`http://localhost:3001/readings/${readingId}`, {
//             method: 'DELETE'
//         })
//     }
// }

// export const fetchReadings = (userId) => {
//     return (dispatch) => {
//         dispatch({type:'LOADING_READINGS'});
//         fetch(`http://localhost:3001/loggedin_user_readings/${userId}`)
//             .then(resp => resp.json())
//             .then(readingsJSONResponse => { 
//                 dispatch({type:'ADD_READINGS', readings: readingsJSONResponse})
//             })
//     }
// }