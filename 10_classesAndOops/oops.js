const user = {
    username : "jaideep",
    loginCount : 7 ,
    signIn : true ,
    getUserDetails : function(){
        //console.log("Got user details from database ");
       // console.log(`Username: ${this.username}`);
        //console.log(this);
        
        
        
    }
}
//console.log(user.username);
//console.log(user.getUserDetails());

//console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username =   username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    // return this 

}

const userOne = new  User("jaideep" , 12 ,true)
// const userTwo=   User("ChaiAurCode" , 17 ,false)
console.log(userOne);
// console.log(userTwo);





