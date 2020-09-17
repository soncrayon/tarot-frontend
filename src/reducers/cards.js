export const cards = (state = [], action) => {
    const storeStates = {
        'LOADING_CARDS': state,
        'ADD_CARDS': action.payload
    }
    return typeof storeStates[action.type] !== "undefined" ? storeStates[action.type] : state 
}

