
function ReducerListOrder(state = [], action) {
  switch (action.type) {
    case "ADD_LIST_ORDER":
      return [...state,...action.payload];
    case "MODIFY_LIST_ORDER":
      const data = {...action.payload};
      const newSate = state.filter(element=>{
         return element.id!=data.id
      })
      return [...newSate, {...data }];
    case 'DELETE_LIST_ORDER':
      return[]
    default:
      return state;
      break;
  }
}
function ReducerListCategory(state = [], action) {
  switch (action.type) {
    case "ADD_LIST_CATEGORY":
      return [...action.payload];
      break;
    case "MODIFY_LIST_CATEGORY":
      const data = action.payload.data;
      const index = action.payload.index;
      return [...state, { ...state[index], ...data }];
    default:
      return [...state];
      break;
  }
}
function ReducerState(state = "XACNHAN", action) {
  switch (action.type) {
    case "MODIFY":
      return action.payload;
      break;
    default:
      return state;
      break;
  }
}
export { ReducerListCategory, ReducerListOrder, ReducerState };
