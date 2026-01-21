let sentence = "I am a comma separated sentence.";
let words2 = sentence.split("");
console.log(words2);

// Q1. find out the occurance of "r" in the given string.

let str = "tu meri me tera me teri tu mera";
let line = str.split("r");
console.log(line);

//synchronous function : we can move to other

//Regular function//
function demo(){
    console.log("demo")
}
demo()

function sample(a,b){
    return a+b;
}    
console.log(sample(5,10))

//Arrow function//
// advantage: doesn't need return and function keyword and it will perform asynchronously.
//const test=(c,d)=> c+d;
//console.log(test(4,6))   

// const test = (c,d)=>{
//     return c+d
// };
// console.log(test(4,6))

// let arr = [1,2,3,4,5]
// let res = arr.map(function(x)){
//     return x+2
// }
// console.log


