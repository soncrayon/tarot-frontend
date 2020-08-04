const readings = (state = {readings: [], loading:false}, action) => {
    switch (action.type) {
       
        case 'LOADING_READINGS':
            return {
                ...state, 
                readings: [...state.readings],
                loading:true
            }
        
        case 'ADD_READINGS':
           return {
                ...state,
                readings: action.readings,
                loading:false
            }

        default:
            return state
    }

}

export default readings