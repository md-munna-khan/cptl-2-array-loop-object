/**
 * for( starting value; end conditin;encreament or dercreament){ console.....
 * }
 */
// for loop
// for(let i = 0; i <=5; i++){
//     console.log("munna vai")
// }

// while loop
// let i = 0;
// while(  i  <=10){
// console.log("munna");
// i++
// }

// const flower =["golap","joba","shapla","beli"];
// console.log(flower.length)
// for (let i = 0;i <flower.length ; i++){
//     console.log(flower[i])
// }
// for (let i = flower.length -1; i>=0;i-- ){
//     console.log(flower[i])
// }


// const flower =["golap","joba","shapla","beli"];
// for(let i=0;  i<flower.length; i++){
//     console.log(flower[i])
// }


// reverse

// const flower =["golap","joba","shapla","beli"];
// for( let i= flower.length -1; i>=0; i--){
//     console.log(flower[i])
// }

/**
//  * // while (condition){
tasks

looping increament or decrement
}

 */

// while loop

// const flower =["golap","joba","shapla","beli"];
// let i = 0;
// while( i <flower.length){
// console.log(flower[i])
// i++
// }


// for of
const flowers =["golap","joba","shapla","beli"];
// for(let flower of flowers ){
// console.log(flower)
// }
// for (let item of flowers.reverse()){
//     console.log(item)
// }



//nested loop


// for( let i = 0; i<=5; i++){
//     console.log("hello from i", i)

//     for( let j = 0; j<=5; j++){
//         console.log("hello from j", j)
//     }
// }



const x = [1,2,3,4,5,6]

for(let i = 0; i<x.length; i++){
    // console.log(x[i])
    // if(x[i] ===5){
    //     break;
    // } 
    if(x[i] ===5){
        continue;
    }
    console.log(x[i])
}