// sum of array numbers
const  numbers = [1,2,3,4,5,6,7];
// let sum = 0;
// for(let item of numbers){
//     sum = sum+item
// }
// console.log(sum)
let evens =[]
// const x =6;
// console.log(x%2== 0)
for(let item of numbers){
    if( item % 2 ===1){
        evens.push(item)
    }
}
console.log(evens)