// export const postUser = (readingObj) => { 
// //    try to transition the axios material from axios to use the store (not sure if it will work so keep axios material commented out)
//     console.log('finish this')
// }

export const loginUser = (user) => { 
    console.log(user)
    return(dispatch) => {
        dispatch({type: 'LOGGING_IN_USER'});
        fetch('http://localhost:3001/login', {
            method: 'POST',
            body: JSON.stringify({user}),
            headers:{
                'Content-Type':'application/json'
            },
            withCredentials: true
            })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.logged_in){
                   return dispatch({type: 'LOGIN_SUCCESSFUL', payload: resp})
                } 
                return dispatch({type: 'LOGIN_FAILED', payload: resp})
            })
            .catch(error => console.log(error))
    }
}

export const logoutUser = () => { 
    return(dispatch) => {
        dispatch({type: 'LOGGING_OUT_USER'});
        fetch('http://localhost:3001/logout', {
            method: 'DELETE',
            withCredentials: true
        })
            .then(resp => resp.json())
            .then(resp => {
                   return dispatch({type: 'LOG_OUT_USER'})
                })
            .catch(error => console.log(error))
    }
}

export const fetchUserSuits = (userId) => {
    return (dispatch) => {
        dispatch({type:'LOADING_METRICS'});
        fetch(`http://localhost:3001/user_suit_percentages/${userId}`)
            .then(resp => resp.json())
            .then(resp => { 
                dispatch({type:'ADD_USER_SUITS', payload: resp})
            })
    }
}

export const fetchUserOrientations = (userId) => {
    return (dispatch) => {
        dispatch({type:'LOADING_METRICS'});
        fetch(`http://localhost:3001/user_orientation_percentages/${userId}`)
            .then(resp => resp.json())
            .then(resp => { 
                dispatch({type:'ADD_USER_ORIENTATIONS', payload: resp})
            })
    }
}


export const fetchAllSuits = () => {
    return (dispatch) => {
        dispatch({type:'LOADING_METRICS'});
        fetch(`http://localhost:3001/all_suit_percentages`)
            .then(resp => resp.json())
            .then(resp => { 
                dispatch({type:'ADD_ALL_SUITS', payload: resp})
            })
    }
}

export const fetchAllOrientations = () => {
    return (dispatch) => {
        dispatch({type:'LOADING_METRICS'});
        fetch(`http://localhost:3001/all_orientation_percentages`)
            .then(resp => resp.json())
            .then(resp => { 
                dispatch({type:'ADD_ALL_ORIENTATIONS', payload: resp})
            })
    }
}