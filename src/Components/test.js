

const url = "http://localhost:8000/login";

async function httpReq(userID){
   const response = await fetch(url,{
        mode : "no-cors",
        cache: 'no-cache',
        credentials: 'same-origin',
        method : "POST",
        body : JSON.stringify(userID),
        headers : {
            'Content-Type': 'application/json',
        }
    })
    return await response.text();
}
    
    


export { httpReq }

