import uuid from 'react-native-uuid';
const InfoModal={
    name:"",
    price:"",
    imgUrl:"",
}
const ListOrder = {};
const ListDetailOrder=[];
function createOrder(data){
    return {
        location: data.location,
        dateNow:{},
        dateStart:'2022-12-08',
        id:uuid.v4(),
        idFood:data.idFood,
        idUser:'7055dcb1-67ce-4c5f-bf51-03863f7e5778',
        phone:'0341254325',
        note:data.note? data.note:"",
        comment:data.comment? data.comment:""
    }
}
function createDetailOrder(data){
    return {
        idDish: data.idDish,
        idOrder: data.idOrder,
        number: data.number,
        price: data.price,
        imgUrl: data.imgUrl,
        name: data.name
    }
};
function ModalReducer(state=InfoModal,action){
    switch (action.type){
        case "modify":
            return {
                ...state,
                id:action.payload.Id,
                idFood: action.payload.idFood,
                name: action.payload.name,
                price: action.payload.price,
                imgUrl: action.payload.imgUrl
            }
        default:
            return state;
            break;
    }
};
function OrderReducer(state=ListOrder,action){
    let data= action.payload;
    switch (action.type) {
        case 'create':
            return {...state,
                dateNow:{},
                dateStart:'2022-12-08',
                id:uuid.v4(),
                idFood:data.idFood,
                idUser:'7055dcb1-67ce-4c5f-bf51-03863f7e5778',
                note:data.note,
                phone:'0341254325',
                location: data.location,
                note:data.note? data.note:"",
                comment:data.comment? data.comment:""}
        case 'delete':
            return {}
        default:
            return state;
    }
} 
function OrderDetailReducer(state=ListDetailOrder,action){
    switch (action.type) {
        case 'createDetail':
            return [...state,action.payload];
        case 'deleteDetail':
           return [state]
        default:
            return state;
    }
}
export {ModalReducer,OrderReducer,createOrder,createDetailOrder,OrderDetailReducer};