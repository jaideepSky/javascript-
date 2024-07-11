const marvelHero = [ "thor" , "ironman" , "spiderman"]
const dcHero = [ "superman" , "flash" , "batman"] 

// marvelHero.push(dcHero)
// console.log(marvelHero);
// console.log(marvelHero[3][1]);

// const allHero = marvelHero.concat(dcHero)
// console.log(allHero);

const allNewHero = [...marvelHero, ...dcHero]
// console.log(allNewHero);

const anotherArray = [ 1,2,3,[4,5,6] ,7,[6,7,[4,5]]]

const realAnotherArray =  anotherArray.flat(Infinity)
// console.log(realAnotherArray);



console.log(Array.isArray("jaideep"))
console.log(Array.from("jaideep"))
console.log(Array.from({name : "jaideep"})) // interrsting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 ,score2 , score3));