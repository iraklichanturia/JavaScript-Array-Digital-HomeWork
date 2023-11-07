// 4) Შექმენით მასივი რომელშიც იქნება შენახული რიცხვები 2, 121, 4341, 242, 562,
// 43, 182, 55, 32, 98, 326 , გადაიარეთ მასივზე ციკლის მეშვეობით და დაბეჭდეთ
// კონსოლ ული რიცხვის გამოყოფების რაოდენობა.

let arr = [2, 121, 4341, 242, 562, 43, 182, 55, 32, 98, 326];
let counter = 0;
for (let i = 0; i < arr.length; i++) {
  let divisors = [];
  for (let j = 1; j <= arr[i]; j++) {
    if (arr[i] % j === 0) {
      counter++;
      divisors.push(j);
    }
  }
  console.log(`Divisors of ${arr[i]}: ${divisors.join(", ")}`);
}

console.log('Sum of all divisors is: ', counter);




// let arr = [2, 121, 4341, 242, 562, 43, 182, 55, 32, 98, 326];
// let counter = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j <=arr[i]; j++) {
//     if (arr[i] % j == 0) {
//       counter++;
//       console.log(arr[i]);
//     }
//   }
// }
// console.log(counter)

// let arr = [2, 121, 4341, 242, 562, 43, 182, 55, 32, 98, 326];
// let counter = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 1; j <= arr[i]; j++) {
//     if (arr[i] % j === 0) {
//       counter++;
//       console.log(arr[i]);
//     }
//   }
// }


