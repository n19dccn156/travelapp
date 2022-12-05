const StateInfo ={
    name:"",
    price:"",
    imgUrl:"",
}
function DataReducer(state=StateInfo,action){
    switch (action.type){
        case "modify":
            return {
                ...state,
                name: action.payload.name,
                price: action.payload.price,
                imgUrl: action.payload.imgUrl,
            }
            default: return state;
    }
}
export default DataReducer;