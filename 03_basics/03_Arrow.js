const user = {
    username : "jaideep",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username }, welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "jaideep"

//     console.log(this.username);
// } 
// chai()

//  const chai = function() {
//     let username = " jaideep"
//     console.log(this);
//  }
//  chai()
//  const chai = () => {
//     let username = " jaideep"
//     console.log(this);
//  }
//  chai()

//  const addTwo = (num1 , num2)=>{
//     return num1 + num2

//  }

//  console.log(addTwo(5 , 7));


//  const addTwo = (num1 , num2)=>  (num1 + num2)
 const addTwo = (num1 , num2)=> ( {username:"jaideep"})
 
 console.log(addTwo(5 , 7));

 