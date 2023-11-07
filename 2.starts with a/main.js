// 2) Შექმენით მასივი რომელშიც ჩაწერთ თქვენი მეგობრების სახელებს და
// დაბეჭდეთ console-ში ყველა ის სახელი რომელიც იწყება სიმბოლო a- ზე.
let nameArray = ["Giorgi" , "aleqsanda", "alantriste", "alkapone", "baduri"];
for (let i = 0; i < nameArray.length; i++) {
  if (nameArray[i].charAt(0).toLowerCase() === "a") {
    console.log(`names which start on a is ${nameArray[i]}`);
  }
}