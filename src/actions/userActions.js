export const loginUser = (user) => { 
    return(dispatch) => {
        dispatch({type: 'LOGGING_IN_USER'});
        fetch('https://ori-tarot-api.herokuapp.com/login', {
            method: 'POST',
            body: JSON.stringify({user}),
            headers:{
                'Content-Type':'application/json'
                }
            })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.logged_in){
                   return dispatch({type: 'LOGIN_SUCCESSFUL', payload: resp})
                } 
                return dispatch({type: 'LOGIN_FAILED', payload: resp})
            })
    }
}

export const logoutUser = () => { 
    return(dispatch) => {
        dispatch({type: 'LOGGING_OUT_USER'});
        fetch('https://ori-tarot-api.herokuapp.com/logout', {
            method: 'DELETE'
        })
            .then(() => {return dispatch({type: 'LOG_OUT_USER'})})
    }
}

export const createUserAccount = (user) => {
    return (dispatch) => {
        dispatch({type: 'CREATING_USER_ACCOUNT'});
        fetch('https://ori-tarot-api.herokuapp.com/users', {
            method: 'POST',
            body: JSON.stringify({user}),
            headers:{
                'Content-Type':'application/json'
            }
        })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.status === 'created') {
                    return dispatch({type: 'ACCOUNT_CREATED', payload: resp})
                }
                return dispatch({type: 'ACCOUNT_CREATION_FAILED', payload: resp})
            })
    }
}

export const updateUserAccount = (user) => {
    return (dispatch) => {
        dispatch({type: 'UPDATING_USER_ACCOUNT'});
        fetch(`https://ori-tarot-api.herokuapp.com/users/${user.id}`, {
            method: 'PUT',
            body: JSON.stringify({user}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.status === 'updated') {
                return dispatch({type: 'ACCOUNT_UPDATED', payload: resp})
            }
            return dispatch({type: 'ACCOUNT_UPDATE_FAILED', payload: resp})
        })
    }
}

export const deleteUserAccount = (userId) => {
    return (dispatch) => {
        dispatch({type: 'DELETING_USER_ACCOUNT'});

        fetch('https://ori-tarot-api.herokuapp.com/logout', {
            method: 'DELETE'
        })
            .then(() => {

                fetch(`https://ori-tarot-api.herokuapp.com/users/${userId}`, {
                    method: 'DELETE'
                })
                .then(resp => resp.json())
                .then(resp => {
                    if (resp.status === 'deleted') {
                        return dispatch({type: 'ACCOUNT_DELETED'})
                    }
                })

            })
    }
}

export const fetchUserArcana = (userId) => {
    return (dispatch) => {
        dispatch({type:'LOADING_METRICS'});
        fetch(`https://ori-tarot-api.herokuapp.com/user_arcana_percentages/${userId}`)
            .then(resp => resp.json())
            .then(resp => { 
                dispatch({type:'ADD_USER_ARCANA', payload: resp})
            })
    }
}

export const fetchUserOrientations = (userId) => {
    return (dispatch) => {
        dispatch({type:'LOADING_METRICS'});
        fetch(`https://ori-tarot-api.herokuapp.com/user_orientation_percentages/${userId}`)
            .then(resp => resp.json())
            .then(resp => { 
                dispatch({type:'ADD_USER_ORIENTATIONS', payload: resp})
            })
    }
}

export const fetchHighUserArcana = (userId) => {
    return (dispatch) => {
        dispatch({type:'LOADING_METRICS'});
        fetch(`https://ori-tarot-api.herokuapp.com/user_highest_arcana_percentage/${userId}`)
            .then(resp => resp.json())
            .then(resp => {
                dispatch({type:'ADD_HIGH_ARCANA', payload: resp.highest})
            })
    }
}

export const fetchHighUserOrientation = (userId) => {
    return (dispatch) => {
        dispatch({type:'LOADING_METRICS'});
        fetch(`https://ori-tarot-api.herokuapp.com/user_highest_orientation_percentage/${userId}`)
            .then(resp => resp.json())
            .then(resp => {
                dispatch({type:'ADD_HIGH_ORIENTATION', payload: resp.highest})
            })
    }
}
 

export const fetchAllArcana = () => {
    return (dispatch) => {
        dispatch({type:'LOADING_METRICS'});
        fetch(`https://ori-tarot-api.herokuapp.com/all_arcana_percentages`)
            .then(resp => resp.json())
            .then(resp => { 
                dispatch({type:'ADD_ALL_ARCANA', payload: resp})
            })
    }
}

export const fetchAllOrientations = () => {
    return (dispatch) => {
        dispatch({type:'LOADING_METRICS'});
        fetch(`https://ori-tarot-api.herokuapp.com/all_orientation_percentages`)
            .then(resp => resp.json())
            .then(resp => { 
                dispatch({type:'ADD_ALL_ORIENTATIONS', payload: resp})
            })
    }
}

export const fetchHighArcanaForAllUsers = () => {
    
    return (dispatch) => {
        dispatch({type:'LOADING_METRICS'});
        fetch(`https://ori-tarot-api.herokuapp.com/all_highest_arcana_percentage`)
            .then(resp => resp.json())
            .then(resp => {
                dispatch({type:'ADD_ALL_HIGH_ARCANA', payload: resp.highest})
            })
    }
}


export const fetchHighOrientationForAllUsers = () => {
    return (dispatch) => {
        dispatch({type:'LOADING_METRICS'});
        fetch(`https://ori-tarot-api.herokuapp.com/all_highest_orientation_percentage`)
            .then(resp => resp.json())
            .then(resp => {
                dispatch({type:'ADD_ALL_HIGH_ORIENTATION', payload: resp.highest})
            })
    }
}