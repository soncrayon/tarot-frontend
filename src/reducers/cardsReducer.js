const cardsReducer = (state = {cards: [], loading:false}, action) => {

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

        // going to need to remove songs from the users' lists 

        default:
            return state
    }

}

export default cardsReducer 