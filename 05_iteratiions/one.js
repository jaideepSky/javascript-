// for

for (let i = 0; i < 10; i++) {
    const element = i;
// console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop : ${i}`);
    
    for (let j = 0; j <= 10 ; j++) {
        // console.log(`inner loop : ${i} and inner loop : ${j}`);
 
        // console.log(i + '*' + j + '=' + i*j);
    }
}

const myArray = ["flash" , "batman" , "superman"]
// console.log(myArray.length);
for (let i = 0; i < myArray.length ; i++) {
    const element = myArray[i];
    // console.log(element);
    
}

//  break and continue 

// for (let i = 1; i <= 20; i++) {
//     const element = i;
//     if (i===5) {
//         console.log("detected 5");
//         break
        
//     }
//     console.log(`value is ${i}`);
    
    
// }

for (let i = 1; i <= 20; i++) {
    const element = i;
    if (i===5) {
        console.log("detected 5");
        continue
        
    }
    console.log(`value is ${i}`);
    
    
}