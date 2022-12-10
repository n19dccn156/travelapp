const modifyModalFood =(data)=>{
    return  {
        type:"modify",
        payload: data
    }
}
const modifyOrder =(type,data)=>{
    return{
       type:type,
       payload:data
    }
}
const modifyDetailOrder=(type,data)=>{
    return{
        type:type,
        payload:data
     }
}
export {modifyModalFood,modifyOrder,modifyDetailOrder};