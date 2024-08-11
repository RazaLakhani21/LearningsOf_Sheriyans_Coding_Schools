// Higher Order Fncs ✅
// Constructor fncs ✅
// First Class Fncs ✅
//  new keyword ✅
// iife ✅
// prototype ✅
//  prototypal inheritance ✅ 
//  this, call, apply, bind. ✅
//  pure & impure fncs ✅
//  closures


// Higher Order Function -> aisa func jo accept karle ek aur fnc ya fir wo return karder ek aur funciton 
// Example of Higher Order Function:-
// var arr = [1,3,4,2,5,7];

// arr.forEach(function(val){
//     console.log("Hello value",val);
// })

// Constructor Function -> 
// Normal Function jisme "this" ka istemal ho and aap fnc ko call karte waqt "new" keyword ka use kare 
// For E.g.
// function saanchaOfBuiscuit(){
//     this.width = 12;
//     this.height = 22;
//     this.color = "brown";
//     this.taste = "Sugarry";
// }
// var bis1 = new saanchaOfBuiscuit();
// var bis2 = new saanchaOfBuiscuit();
// var bis3 = new saanchaOfBuiscuit();

// Why do we Use Constructor Fucntion => jab aapke paas aisa koi moka ho ke aapko ek jaisi properties waale bahut saare elements banane hain us waqt aap constructor function ko use kr skte ho.
//For E.g.

// function circularButton(color){
//     this.radius = 2;
//     this.color = color;
//     this.icon = false;
//     this.pressable = true;
// }

// var button1 = new circularButton("Blue");
// var button2 = new circularButton("Blue");
// var button3 = new circularButton("Blue");
// var button4 = new circularButton("Red");
// var button5 = new circularButton("Red");
// var button6 = new circularButton("Red");


// First Class Functions
//A language is said to have first class functions when the functions in that Language are Treated as Normal Values or Like Variables, You can save them, You can pass them as Arguments to Another Functions.
// For E.g.
// setTimeout(function(){

// },2000)


// New Keyword => "new" keyword always creates a blank object for the constructor function which is getting called Just after new keyword.

// iife => immediately invoked function expression
// iife hain function ko turant chalane ki kala, is tareeke se ki hum log koi private variable bana paaye
// var ans = (function(){
//     var privateVal = 12;

//     return{
//         getter : function(){
//             console.log(privateVal);
//         },
//         setter: function(Val){
//             privateVal = Val;
//         }
//     }
// })()

// Prototype => Every created objects gets a property called "prototype" which means whenever you create an object it gets prototype property automatically.
// It is basically built-in functions made by the creator of javascript to help the developers

// Prototypal Inheritance => For E.g.

// var human = {
//     canFly: false,
//     canTalk: true,
//     canWalk: true,
//     haveEmotions: true,
//     hasFourLegs: false,
// }

// var sheriyansStudent = {
//     canMakeAmazingWebsites: true,
//     canMakeAwesomeAnimations: true,
//     canMakeClassAwwwardWebsites: true
// }

// sheriyansStudent.__proto__ = human;

// console.log(sheriyansStudent)

// sheriyansStudent.canFly //will return false

// This, Call, Apply, Bind

// this => this keyword is a special keyword in Javascript which changes it's value in different context.

//Global Scope:- jab bhi kuch likh rahe ho to check karo kya usmein kahi bhi koi function, object ya fir scope "{}" bana hain.
// jab bhi koi cheej inn {} ke andar nahi hoti wo Global scoped hoti hain jaise ki koi variable {} brackets ke bahar banaya hain wo Global Scoped hain

// in Global Scoped
// console.log(this); //will return "window".

// in Function Scoped
// function abcd() {
//     console.log(this) //will return "window".
// }

// in Method scoped => ek function jo Object ke andar ho use Method kehte hain.
// var obj = {
//     name: "harsh",
//     age: 24,
//     someMethod: function () { 
//         console.log(this); 
//     }
// }

// var button = document.querySelector("button");
// button.addEventListener("click",function(){
//     console.log(this);
//     console.log(this.style.color="red");
// })

// Call Apply Bind => agar tumhare paas koi function hain and koi object hain and tumhe fnc chalana hain aur by default jo "this" ki value window hain use window na rakh kar point karna hain kisi object ki taraf
// For E.g.

// function abcd(){
//     console.log(this);
// }

// var obj = {
//     age: 24
// }

// abcd(); // Output = window
// but now if I want to put "obj" instead of window for "this" keyword I will use Call.
// abcd.call(obj)

// Another example of call
// function efg(val,val2,val3){
//     console.log(this,val,val2,val3);
// }

// var obj = {
//     age: 24
// }

// efg.call(obj,1,2,3);

// Example for "Apply"
// function abcd(){
//         console.log(this);
//     }
    
//     var obj = {
//         age: 24
//     }
    
//     abcd.apply(obj,[1,2,3]);//apply says give parameters in 2 forms only (object and array(for parameters you have given in the function)).

// UseCase:- jab bhi aap ko ek function chalana hain jisme "this" ki value kuch aur hain lekin aapko "this" ki value kuch aur object rahe tab aap .apply .call .bind ka use karoge

// function abcd(){
//     console.log(this);
// }

// var obj = {
//     age: 24
// }

// abcd.bind(obj); // it does not give any output it binds two functions and retrun it, you need to save in a variable to get it.
// var bindedfnc = abcd.bind(obj);
// bindedfnc(); // Ye eventListeners ke waqt use hote hain

// Pure & Impure Functions => 1. Pure     2. Impure

// Pure function => It is any function which has these 2 features:
// i) it should always return same output for same input.
// ii)  it will never change/update the value of a Global Variable.

// function calc(a,b){
//     return a*b;
// }

// var ans1 = calc(1,2);

// Impure Functions
// Examples:-

var a = 12;
function calc(a,b){
    a = 24;
    return a*b;
}

var ans1 = calc(1,2);
