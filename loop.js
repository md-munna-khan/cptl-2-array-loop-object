// aki kaj ke  bar bar kora k loop bole

// console.log("munna vai")
// console.log("munna vai")
// console.log("munna vai")
// console.log("munna vai")
// console.log("munna vai")


// for (starting value ,end condition,increament or decreament){ }


// for(let i = 1; i<=50; i++){
//     console.log('munna vai',i)
// }
// const flowers =[ 'golap', 'sapla', 'joba', 'beli','geda'];
// console.log(flowers [0])

// for(let i =0; i <4; i++){
//     console.log(flowers[i])
// }

// for( let i = flowers.length-1; i>=0; i--){
//     console.log(flowers[i])
// }

/**
 * while(condition){
 * tasks
 * 
 * looping increament or decreament
 * }
 */

// let i = 0;
// while(i < flowers.length){
//     console.log(flowers[i])
//     i++;
// }
//  let i = flowers.length-1;
//  while(i>=0){
//     console.log(flowers[i])
//     1--;
//  }


// for of loop
// const flowers =[ 'golap', 'sapla', 'joba', 'beli','geda'];

// for(let item of flowers. reverse()){
//     console.log(item)
// }


// for(let i = 1; i<=5; i++){
//     console.log('hello from i',i)
//     for(let j = 1; j<=5; j++){
//         console.log('hello from j',i)
//     }
// }



const x =[1,2,3,4,5,6,7];

for(let i = 0; i<x.length; i++){
    
    // if(x[i]=== 5 ){
    //     break;
    // }
    
    if(x[i]=== 5 ){
        continue; //pash katiye cole jete hobe
    }
    console.log(x[i])
}

