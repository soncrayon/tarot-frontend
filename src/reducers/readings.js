export const readings = (state = [], action) => {
    const storeStates = {
        'LOADING_READINGS': state,
        'ADD_READINGS': action.payload,
        'SAVING_READINGS': state,
        'DELETING_READING': state
    }
    return typeof storeStates[action.type] !== "undefined" ? storeStates[action.type] : state 
}
