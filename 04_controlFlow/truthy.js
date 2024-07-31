const userEmail = "jaideep@singh.ai"
if(userEmail){
    console.log("got user email");

}
else{
    console.log("Dont't have user email");
}


const emptyobject = {

}
if(Object.keys(emptyobject).length === 0){
    console.log("Object is empty");

}

// Nullish Coalescing operator (??) : null undefined 

// let val1 
// // val1 = 5 ?? 10
// // val1 = null ?? 10
// val1 = undefined ?? 17
// console.log(val1);

//Terniary Operator
// condition ? true : false