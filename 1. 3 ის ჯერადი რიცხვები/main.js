// 1) Შექმენით მასივი რომელშიც ჩაწერთ ყველა 3 ის ჯერად რიცხვს 0 დან 100-მდე.
let arr = [];
for (let i = 3; i < 100; i+=3){
    arr.push(i);
}

// let arr = [];
// for (let i = 3; i <= 100; i++) {
//   if (i % 3 == 0) {
//     arr.push(i);
//   }
// }
console.log(" 0 დან 100 მდე 3 ჯერადი რიცხვებია ", arr);