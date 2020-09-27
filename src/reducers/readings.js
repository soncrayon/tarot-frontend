export const readings = (state = [], action) => {
    const storeStates = {
        'LOADING_READINGS': state,
        'ADD_READINGS': action.payload,
        'SAVING_READINGS': state,
        'READING_SAVED': action.payload,
        'DELETING_READING': state,
        'READING_DELETED': action.payload
    }
    
    return typeof storeStates[action.type] !== "undefined" ? storeStates[action.type] : state 
}
