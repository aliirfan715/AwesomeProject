
export const getSentenceCase = (text:string)=>{
    return text.charAt(0).toUpperCase()+text.substring(1,text.length)
}