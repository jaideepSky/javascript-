 const promiseOne = new Promise(function(resolve , reject ){
// Do an async task 
//DB calls  , network

setTimeout(() => {
    console.log("Async task is complete");
    resolve()
    
}, 1000);
 })

 promiseOne.then(function(){
    console.log("Promise consumed");
    
 })

 new Promise(function(resolve , reject){

    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
 }).then(function(){
console.log("Async 2 resolved");



 })


 const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("jaideep singh");
        
        resolve({username:"chai" , email : "chai@gmail.com"})
    },3000)
 })

 promiseThree.then(function(user){
    console.log(user);
    

 })

 const promsieFour = new Promise((resolve , reject)=>{
setTimeout(function(){

        // let error = true
        let error = false
        if(!error){
            resolve({username:"jaideep" , password:"123"})

        }
        else{
            reject('ERROR: Something went wrong')
        }
},1000)
 })

promsieFour
.then((user)=>{
    console.log(user);

    return user.username
    

 })
 .then((username)=>{
    console.log(username);
    

 })
 .catch((error)=>{
        console.log(error);
        
 })
 
 .finally(()=>{
    console.log("The promise is  either rejected or resolved" );
    

 })
 
 const promiseFive = new Promise(function(resolve, reject){

    setTimeout(function(){
let error = false 
if(!error){

    resolve({username:"javascript" ,password:"123" })
}
else{
    reject('ERROR: JS went wrong')

}
    },1000)
 })

 async function consumePromiseFive() {
    // const response = await promiseFive
    // console.log(response);
    try {
        const response = await promiseFive
    console.log(response); 
    } catch (error) {
            console.log(error);
            
    }
    
 }
 consumePromiseFive()

//  async function getAllUser() {
//        try {
//         const response = await  fetch("https://api.github.com/users/jaideepSky")
//         // console.log(response);
//        const data = await response.json()
//        console.log(data);
    
       
//        } catch (error) {
//         console.log("E: ",error);
        
//        }
//  }
//  getAllUser()

fetch('https://api.github.com/users/jaideepSky')
.then(function(response){
    return response.json()

}).then((data)=>{
    console.log(data);
})


.catch((error)=>{
    console.log(error);
    
})
