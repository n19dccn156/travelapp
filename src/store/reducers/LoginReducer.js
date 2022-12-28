const loginReducer = (state=false, action) => {
    switch(action.type) {
        case "login":
            return true
            break
        case "logout":
            return false
            break
        default:
            return state
            break
    }
    return state
}

export default loginReducer