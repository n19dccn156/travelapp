const renderReducer = (state=false, action) => {
    
    switch(action.type) {
        case "reset":
            return !state
        case "true":
            return true
        default: return state
    }
}

export default renderReducer