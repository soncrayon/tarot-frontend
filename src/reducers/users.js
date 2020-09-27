export const users = (state = {
    isLoggedIn: false,
    login_errors: null,
    signup_errors: null,
    user: null,
    metrics: {
        user_arcana: {},
        all_arcana: {},
        user_orientations: {},
        all_orientations: {}
    }
}, action) => { 
    let user = typeof action.payload !== "undefined" ? action.payload.user : null
    let login_errors = typeof action.payload !== "undefined" ? action.payload.login_errors : null
    let signup_errors = typeof action.payload !== "undefined" ? action.payload.signup_errors : null
    const storeStates = {
        'CREATING_USER_ACCOUNT': {...state},
        'ACCOUNT_CREATED': {...state, isLoggedIn: true, signup_errors: null, user: user},
        'ACCOUNT_CREATION_FAILED': {...state, signup_errors: signup_errors, user: null},
        'UPDATING_USER_ACCOUNT': {...state},
        'ACCOUNT_UPDATED': {...state, user: user},
        'DELETING_USER_ACCOUNT': {...state},
        'ACCOUNT_DELETED': {...state, isLoggedIn: false, user: null}, 
        'LOGGING_IN_USER': {...state},
        'LOGGING_OUT_USER': {...state},
        'LOGIN_SUCCESSFUL': {...state, isLoggedIn: true, login_errors: null, user: user},
        'LOGIN_FAILED': {...state, isLoggedIn: false, login_errors: login_errors},
        'LOG_OUT_USER': {...state, isLoggedIn: false, user: null},
        'LOADING_METRICS': {...state},
        'ADD_USER_ARCANA': {...state, metrics: {...state.metrics, user_arcana: action.payload}},
        'ADD_ALL_ARCANA': {...state, metrics: {...state.metrics, all_arcana: action.payload}},
        'ADD_USER_ORIENTATIONS': {...state, metrics: {...state.metrics, user_orientations: action.payload}},
        'ADD_ALL_ORIENTATIONS': {...state, metrics: {...state.metrics, all_orientations: action.payload}}
    }
    return typeof storeStates[action.type] !== "undefined" ? storeStates[action.type] : state 
}
