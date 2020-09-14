const users = (state = {metrics: {
    user_suits: {},
    all_suits: {},
    user_orientations: {},
    all_orientations: {}

}, loading:false}, action) => {

    switch (action.type) {
       
        case 'LOADING_METRICS':
            return {
                ...state, 
                metrics: {...state.metrics},
                loading:true
            }
        
            case 'ADD_USER_SUITS':
                return {
                        ...state,
                        metrics: {...state.metrics, user_suits: action.metrics},
                        loading:false
                    }

            case 'ADD_ALL_SUITS':
                return {
                        ...state,
                        metrics: {...state.metrics, all_suits: action.metrics},
                        loading:false
                    }

            case 'ADD_USER_ORIENTATIONS':
                return {
                        ...state,
                        metrics: {...state.metrics, user_orientations: action.metrics},
                        loading:false
                    }

            case 'ADD_ALL_ORIENTATIONS':
                return {
                     ...state,
                     metrics: {...state.metrics, all_orientations: action.metrics},
                     loading:false
                 }

        default:
            return state
    }

}

export default users