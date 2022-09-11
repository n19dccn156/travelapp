function RenderLongText(text: string): string{
  return text.length< 35 ?`${text}`:`${text.substring(0,32)}...`;
}
export {RenderLongText};