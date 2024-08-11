// Sync and Async Kya hota hain ?
// => Sync matlab ek ke baad dusra hoga, jab tak ek command khatam na ho, dusra shuru nahi hoga
// => Async matlab saare kaam ek saath shuru kardo, jiska answer pehle aa jaye uska jawab de dena

// Synchronours ka example
// task  a - 5
// task  b - 2
// task  c - 15
// task  d - 1
// output of waiting time will be:- 23seconds

// Asynchronous ka Example
// task  a - 5
// task  b - 2
// task  c - 15
// task  d - 1
// output of waiting time will be:- 15seconds, how? => All tasks were started Simultaneously and then completed in this order -> 1st.task d then 2nd.task b then 3rd.task a then 4th.task c

// Question:- kaise pata chalega ki tum async ya sync likh rhe ho ?
// Ans:- If you are using 
//  1.setTimeout
//  2.setInterval
//  3.Promises
//  4.Fetch
//  5.axios - it is a package to do API Call from the Third Party application
//  6.XMLHttpRequest
// "THEN YOU ARE WRITNG ASYNCHRONOUS CODE"

// async js hain kya ?
// =>async code ka main motive hota hain ki un cases mein jinmein hume pata nahi hain ki code ka answer kitni der mein aayega to jab bhi answer aa jaye uske answer ke respect mein koi particular code chala dena.
// For E.g. -> Facebook se photo laao aur jab photo aa jaye to use Show kardena.

// js is not asynchronous
// => async ka matlab hota hain do kaam ek sath hona.Lekin Js ek saath do kaam nahi karti, "Async ek dhoka hain"
// Event Loop -> Event loop checks the elements between Main Stack and Side Stack.It works the checking in loop

// async ki poori kahani -> Upar Bayan farmai hain

// single threading and multi threading
// Single threading matlab, Ek baar me ek hi kaam karna & Multi threading matlab, do ya usse jyada kaam ek hi saath karna

// callbacks => Functions
// Callback humesha ek function hota hain , Ye sirf tab chalta hain jab async code ka completion hojata hain
// Used for Sending the request to get the answer
// =>fetch
// =>axios
// =>promises
// =>setTimeout
// =>setInterval

// These are used to Show the Fetched/requested Answer
// => then catch
// => callbacks
// => async await

// promises
// For E.g. a code 
// then and catch (Explained with Promise)

// Code 1 -> Bahut Simple tha
// var ans = new Promise((res, rej)=>{
//     if (false) {
//         return res();
//     }
//     else {
//         return rej();
//     }
// })

// ans
//     .then(function () {
//         console.log("resolve Hogaya to chala diya gaya");
//     })
//     .catch(function() {
//         console.log("reject hogaya siitt isliye nahi chala");
//     })

// Code 2 -> User will ask for a number between 0-9 and if the number is below 5, resolve, if not then reject

// var anotherProm = new Promise((res,rej)=>{
//     var n = Math.floor(Math.random()*10);
//     console.log(n);
//     if(n<5){
//         return res();
//     }
//     else{
//         return rej();
//     }
// })

// anotherProm
// .then(function(){
//     console.log("Below = Resolved")
// })
// .catch(function(){
//     console.log("Above = Rejected")
// })

// Code 3 -> 
// 1.Sabse pehle ghar par aao
// 2.gate Khoo gate lagao
// 3.khana pakao khana khao
// 4.incognito mode chalao
// 5.Aur fir Sojao

// The Below Code is also called "Promise Chaining"
// var ans = new Promise((res, rej) => {
//     return res("Sabse pehle ghar par aao");
// })

// var p2 = ans.then(function (data) {
//     console.log(data);
//     return new Promise((res, rej) => {
//         return res("gate Kholo gate lagao");
//     })
// })

// var p3 = p2.then(function (data) {
//     console.log(data);
//     return new Promise((res, rej) => {
//         return res("khana pakao khana khao");
//     })
// })

// var p4 = p3.then(function (data) {
//     console.log(data)
//     return new Promise((res, rej) => {
//         return res("incognito mode chalao");
//     })
// })

// var p5 = p4.then(function (data) {
//     console.log(data);
//     return new Promise((res, rej) => {
//         return res("Aur fir Sojao");
//     })
// })

// p5.then(function (data) {
//     console.log(data)
// })

// try and catch
// async await
// => koi bhi esa function jisme aap async code likhenge us code ko chota karne ke liye, kyuki async code hain to aap promises ka istemal kar sakte hain, jab uska answer aayega aapko "then" lagana padega, uss "then" ko lagane se bachne ke liye, aap async await ka istemaal kar sakte hain.

// Below Funciton is Not an Async-Await Function, then we'll be using "then" keyword

// async function abcd() {
//   let raw = await fetch(`https://randomuser.me/api/`);
//     let ans = raw.json(); // ◀ will show Promise Pending ❌
//      let ans = await raw.json(); // This will work ✔
//     console.log(ans)
   
// }

//dekho jab bhi koi code async hain to tumhe uske liye wait karna padta hain kyuki hame nahi pata uska answer kab aayega.

// abcd();

// 5 use cases ekdum real world wale
// node
// fetch & axios
// settimeout
//setinterval

// [concept aside]
// concurrency => js mein sync code and async code dono ek sath process ho raha tha ye hain Concurrency. Examples the Main-Stack & Side-Stack.

 //and 

// parallelism => It focuses more on different Processors and to run processes on their CORES.

// throttling => Kisi code ke number of executions ko control karna.


// PRACTICING FROM PROMISE 😇

// var ans = new Promise((resolve, reject) => {
//  var n = Math.floor(Math.random()*10)

//  console.log(n);

//   if(n>5){
//     return resolve();
//     }
//   else{
//       return reject();
//     }
//   }
// )

// ans.then(function(){
//   console.log("Above");
// })
// .catch(function(){
//   console.log("Below");
// })


// var ans2 = new Promise((resolve, reject) => {
//   return resolve("Hello There !");
// })

// var p2 = ans2.then(function(data){
//   console.log(data);
//   return new Promise((resolve, reject) => {
//     return resolve("How you do ?");
//   })
// })

// var p3 = p2.then(function(data){
//   console.log(data);
//   return new Promise((resolve, reject) => {
//     return resolve("What did you do ?");
//   })
// })

// var p4 = p3.then(function(data){
//   console.log(data);
//   return new Promise((resolve, reject) => {
//     return resolve("Are You Alright !");
//   })
// })

// p4.then(function(data){
//   console.log(data);
// })

/* function abcd(){
  fetch(`https://randomuser.me/api/`)
 .then(function(raw){
  return raw.json();
 })
 .then(function(data){
  console.log(data);
 })
}

abcd();

*/ // 👆 without ASYNC & AWAIT 

// With Async & Await 👇

async function def(){
  let raw = await fetch(`https://randomuser.me/api/`)
  let data = raw.json();
  console.log(data);
}

def();