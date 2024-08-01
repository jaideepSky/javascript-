// for of

const arr = [1 , 2 , 3 , 4 , 5]

for (const  num of arr) {

    // console.log(num);
}

const greeting = "Hello World"
for (const greet of greeting) {
    // console.log(`Each character is ${greet}`);
    
}

// Maps

const map = new Map()
map.set("IN","India") 
map.set("USA","United States Of America") 
map.set("FR","France") 
map.set("IN","India") 

// console.log(map);

for (const [key , value] of map) {
    console.log(key,":-",value);
    
}

const myObject = {
    game1 : "NFS",
    game2 : "spiderman",
}

// for (const [key , value] of myObject) {
//     console.log(key,":-",value);
 
    
// }