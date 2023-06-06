export const GetWordStr = (str, count) =>{
     return str?.split(/\s+/).slice(0, count).join(" ");
}
