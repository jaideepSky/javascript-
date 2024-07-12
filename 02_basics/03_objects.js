
// constructor --->  form  singleton 
// literal --> not form singleton


// object Literals

const mySym = Symbol("key1")

const jsUser = {
name : "jaideep",
"full name" : "jaideep singh",
[mySym] : "mykey1",
agre: 19,
location : "yamuna nagar",
email : "jaideepo@google.com",
isLogedIn : false ,
isLogInDays : ["monday" , " saturday"]



}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "jaideepchatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "jaideepchatgptMicrosoft.com"
// console.log(jsUser.email);

// console.log(jsUser);

jsUser.greeting  =  function(){
    console.log("hello js user");
}

jsUser.greeting2  =  function(){
    console.log(`hello js user ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());

