export const users = (state = {
    isLoggingIn: false,
    isLoggedIn: false,
    login_errors: null,
    signup_errors: null,
    update_errors: null,
    deleted: false,
    user: null,
    metricsLoading: false,
    metrics: {
        user_arcana: {},
        high_arcana: {},
        high_orientation: {},
        all_arcana: {},
        all_high_arcana: {},
        user_orientations: {},
        all_orientations: {},
        all_high_orientation: {}
    }
}, action) => { 
    let user = typeof action.payload !== "undefined" ? action.payload.user : null
    let login_errors = typeof action.payload !== "undefined" ? action.payload.login_errors : null
    let signup_errors = typeof action.payload !== "undefined" ? action.payload.signup_errors : null
    let update_errors = typeof action.payload !== "undefined" ? action.payload.update_errors : null
    const storeStates = {
        'CREATING_USER_ACCOUNT': state,
        'ACCOUNT_CREATED': {...state, isLoggedIn: true, signup_errors: null, user: user},
        'ACCOUNT_CREATION_FAILED': {...state, signup_errors: signup_errors, user: null},
        'UPDATING_USER_ACCOUNT': state,
        'ACCOUNT_UPDATED': {...state, update_errors: null, user: user},
        'ACCOUNT_UPDATE_FAILED': {...state, update_errors: update_errors},
        'DELETING_USER_ACCOUNT': state,
        'ACCOUNT_DELETED': {...state, isLoggedIn: false, user: null, deleted: true}, 
        'LOGGING_IN_USER': {...state, isLoggingIn: true},
        'LOGGING_OUT_USER': state,
        'LOGIN_SUCCESSFUL': {...state, isLoggingIn: false, isLoggedIn: true, login_errors: null, user: user},
        'LOGIN_FAILED': {...state, isLoggedIn: false, login_errors: login_errors},
        'LOG_OUT_USER': {...state, isLoggedIn: false, user: null},
        'LOADING_METRICS': {...state, metricsLoading: true},
        'ADD_USER_ARCANA': {...state, metricsLoading: false, metrics: {...state.metrics, user_arcana: action.payload}},
        'ADD_HIGH_ARCANA': {...state, metricsLoading: false, metrics: {...state.metrics, high_arcana: action.payload}},
        'ADD_HIGH_ORIENTATION': {...state, metricsLoading: false, metrics: {...state.metrics, high_orientation: action.payload}},
        'ADD_ALL_ARCANA': {...state, metricsLoading: false, metrics: {...state.metrics, all_arcana: action.payload}},
        'ADD_ALL_HIGH_ARCANA': {...state, metricsLoading: false, metrics: {...state.metrics, all_high_arcana: action.payload}},
        'ADD_USER_ORIENTATIONS': {...state, metricsLoading: false, metrics: {...state.metrics, user_orientations: action.payload}},
        'ADD_ALL_ORIENTATIONS': {...state, metricsLoading: false, metrics: {...state.metrics, all_orientations: action.payload}},
        'ADD_ALL_HIGH_ORIENTATION': {...state, metricsLoading: false, metrics: {...state.metrics, all_high_orientation: action.payload}}
    }
    return typeof storeStates[action.type] !== "undefined" ? storeStates[action.type] : state 
}
