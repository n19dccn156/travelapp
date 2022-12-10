function RenderLongText(text,option){
  for ( var i=17;i<text.length;i++)
  {
     if(text[i]==' ')
     break
  }
  if(option==1)
     return i<15 ?`${text}`:`${text.substring(0,15)}...`;
  else 
  {
    return i<13 ?`${text}`:
     text.substring(0,i)+'\n'+text.substring(i+1,text.length);
  }

}
function IsObjectEmpty(value) {
   return (
     Object.prototype.toString.call(value) === '[object Object]' &&
     JSON.stringify(value) === '{}'
   );
 }
export {RenderLongText,IsObjectEmpty};