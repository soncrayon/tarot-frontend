export const postUser = (readingObj) => { 
//    try to transition the axios material from axios to use the store (not sure if it will work so keep axios material commented out)
    console.log('finish this')
}

export const deleteUser = (readingId) => { 
    console.log('finish this')
}

export const fetchUserSuits = (userId) => {
    return (dispatch) => {
        dispatch({type:'LOADING_METRICS'});
        fetch(`http://localhost:3001/user_suit_percentages/${userId}`)
            .then(resp => resp.json())
            .then(metricsJSONResponse => { 
                dispatch({type:'ADD_USER_SUITS', metrics: metricsJSONResponse})
            })
    }
}

export const fetchUserOrientations = (userId) => {
    return (dispatch) => {
        dispatch({type:'LOADING_METRICS'});
        fetch(`http://localhost:3001/user_orientation_percentages/${userId}`)
            .then(resp => resp.json())
            .then(metricsJSONResponse => { 
                dispatch({type:'ADD_USER_ORIENTATIONS', metrics: metricsJSONResponse})
            })
    }
}


export const fetchAllSuits = () => {
    return (dispatch) => {
        dispatch({type:'LOADING_METRICS'});
        fetch(`http://localhost:3001/all_suit_percentages`)
            .then(resp => resp.json())
            .then(metricsJSONResponse => { 
                dispatch({type:'ADD_ALL_SUITS', metrics: metricsJSONResponse})
            })
    }
}

export const fetchAllOrientations = () => {
    return (dispatch) => {
        dispatch({type:'LOADING_METRICS'});
        fetch(`http://localhost:3001/all_orientation_percentages`)
            .then(resp => resp.json())
            .then(metricsJSONResponse => { 
                dispatch({type:'ADD_ALL_ORIENTATIONS', metrics: metricsJSONResponse})
            })
    }
}