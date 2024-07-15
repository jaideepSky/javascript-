function sayMyName (){
    console.log("j");
    console.log("a");
    console.log("i");
    console.log("d");
    console.log("e");
    console.log("e");
    console.log("p");
}

// sayMyName()

// function add(num1,num2){
// console.log(num1+num2);

// }
function add(num1,num2){
// let result = num1 + num2
// return result   

return num1+num2

}
const result = add(3,5)
// console.log( "reult is :" , result);

function loginUserMessage (username = "sam"){
    if(!username ){
        console.log("pls enter the valid username");
            return
    }
return `${username} just logged in`
}
console.log(loginUserMessage("jaideep"));


function calculateCartPrice (val1,val2,...num1){

    return num1


}

console.log(calculateCartPrice(200 ,400 ,500));

const user = {
    username : "jaideep",
    price : 199,
}

function handleObject (anyObject){
console.log(`UserName is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username : " sam",
    price : 399 ,
})

const myNewArray = [ 200 , 400 , 100 , 600]
function returnSecondaryValue(getArray){
return getArray[2]
}
console.log(returnSecondaryValue(myNewArray));