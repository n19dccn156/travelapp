const renderReducer = (state=false, action) => {
    
    switch(action.type) {
        case "reset":
            return !state
        default: return state
    }
}

export default renderReducer