const loginReducer = (state=false, action) => {
    switch(action.type) {
        case "login":
            return action.payload
            break;
        default:
            return state;
    }
}

export default loginReducer