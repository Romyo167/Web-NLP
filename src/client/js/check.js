

function checkForURL (url) {
    let regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    if(regex.test(url)){
         return true
     }
     return false
}
export {checkForURL}