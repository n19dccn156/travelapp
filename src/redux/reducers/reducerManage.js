function ManageDishReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_LIST_DISH":
      return [...action.payload];
    case "INSERT_LIST_DISH":
      return [...state, action.payload];
    default:
      return [...state];
  }
}
function ModalDishManage(state={},action){
  switch (action.type) {
    case "INSERT_DISH":
      return {...action.payload};
    default:
      return {...state};
  }
}
function visibleModalDish(state={isVisible:false},action){
   return {
    ...state,
    isVisible: !state.isVisible
   }
}
export { ManageDishReducer,ModalDishManage,visibleModalDish};
