const cards = (state = {cards: [], loading:false}, action) => {
    switch (action.type) {
       
        case 'LOADING_CARDS':
            return {
                ...state, 
                cards: [...state.cards],
                loading:true
            }
        
        case 'ADD_CARDS':
           return {
                ...state,
                cards: action.cards,
                loading:false
            }

        default:
            return state
    }

}

export default cards