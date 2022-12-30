const loginReducer = (state = false, action) => {
    switch (action.type) {
        case 'login':
            return action.payload;
            break;
        case 'logout':
            return (state = false);
            break;
        default:
            return state;
    }
};

export default loginReducer;
