import store from "../../../redux/store";
const listOrder = store.getState().order;
const listDetailOrder = store.getState().detailOrder;

function removeDuplicate(arr=listOrder){
    if(arr.length>1)
    for(var i= 0 ; i< arr.length; i++)
     for(let j =i+1; j<arr.length;i++){
        console.log(i)
        if(arr[i].idFoodlocaleCompare(arr[j].idFood))
        arr.splice(j,1);
     } 
     return arr;
}
export default removeDuplicate;