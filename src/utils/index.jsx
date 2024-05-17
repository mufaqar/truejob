export const GetWordStr = (str, count) =>{
     return str?.split(/\s+/).slice(0, count).join(" ");
}

//captalized first letter of each words
export const capitalizedFirstLetter = (str) =>{
     let words = str?.split(" ");
     let capitalizedWords = words?.map(word => word.charAt(0).toUpperCase() + word.slice(1));
     let result = capitalizedWords?.join(" ");
     return result

}