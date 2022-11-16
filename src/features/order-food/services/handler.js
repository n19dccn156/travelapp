function RenderLongText(text){
  // if(text.length>13) 
  // text= `${text.substring(0,13)} 
  //    ${text.substring(14,text.length)}`;
  return text.length< 13 ?`${text}`:`${text.substring(0,12)}...`;
}
export {RenderLongText};