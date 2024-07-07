//  two types of data 


// 1. Primitive datatypes
 // 7 types : String , Number , Boolean , Null , Undefined  , Symbol , BigInt

 const score = 100
 const scorevalue = 100.3
 const isLogedIn = false
 const outsideTemp = null
 let userEmail ; 
 const id = Symbol('134')
 const anotherid = Symbol('134')
 console.log(id === anotherid);


 // 2. Non primitive or referance datatypes
 //  Arrays , Objects , Functions

 //JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime.

 const heros = ["Jett","Omen"];//--> array

 let myObj = {
    name : "jaideep",
    age : 19 ,

 }
 // Objects



const myfunction= function(){
    console.log("hello");
 } //
// function



console.log(typeof score );  // number
console.log(typeof scorevalue ); // number
console.log(typeof isLogedIn ); // boolean
console.log(typeof outsideTemp ); // object  
console.log(typeof userEmail ); // undefined
console.log(typeof id ); // symbol
console.log(typeof anotherid ); // symbol 
console.log(typeof  myfunction); // function
console.log(typeof  heros); // object



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


// Stack Memory uses in Primitive datatype

// Heap Memory uses in  Non Primitive datatype


// When we use  Stack memory we have the copy  of original value
// When we use  Heap memory we have the referance   of original value

let myName = " jaideep"

let anotherName = myName
anotherName = " jaggu"
console.log(myName);
console.log(anotherName);

// Eg of a stack 



let userOne = {
   email : "abc@gmail.com",
   upi : "jand@jbl",
}
let userTwo = userOne
userTwo.email = "jaideeep.com"

console.log(userOne.email);
console.log(userTwo.email);

// Eg of a Heap 