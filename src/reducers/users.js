export const users = (state = {
    isLoggedIn: false,
    errors: null,
    user: null,
    metrics: {
        user_suits: {},
        all_suits: {},
        user_orientations: {},
        all_orientations: {}
    }
}, action) => { 
    console.log(action)
    let user = typeof action.payload !== "undefined" ? action.payload.user : null
    let errors = typeof action.payload !== "undefined" ? action.payload.errors : null
    const storeStates = {
        'LOGGING_IN_USER': {...state},
        'LOGGING_OUT_USER': {...state},
        'LOGIN_SUCCESSFUL': {...state, isLoggedIn: true, errors: null, user: user},
        'LOGIN_FAILED': {...state, isLoggedIn: false, errors: errors},
        'LOG_OUT_USER': {...state, isLoggedIn: false, user: null},
        'LOADING_METRICS': {...state},
        'ADD_USER_SUITS': {...state, metrics: {...state.metrics, user_suits: action.payload}},
        'ADD_ALL_SUITS': {...state, metrics: {...state.metrics, all_suits: action.payload}},
        'ADD_USER_ORIENTATIONS': {...state, metrics: {...state.metrics, user_orientations: action.payload}},
        'ADD_ALL_ORIENTATIONS': {...state, metrics: {...state.metrics, all_orientations: action.payload}}
    }
    return typeof storeStates[action.type] !== "undefined" ? storeStates[action.type] : state 
}
