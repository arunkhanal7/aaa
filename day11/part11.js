// set timeout and set interval

// **set timeout allows us to run a function once after the interval of time

// let a = setTimeout(() => {
//     document.write("hello");
// }, 2000);

// clearTimeout(a);  //this clearls the timeout and stop it from execution


//** set timeout with functions and argument */
// const add = (a,b)=>{
//     console.log("the sum is :"+ (a+b));
//     a+b;
// }
// setTimeout(add,2000,2,3);


//set interval: run after this second and tyo time paxi feri run hunxa yo process chalirahanxa
//  let a =setInterval(() => {
//     alert("hi I am set interval")
// }, 3000);
// clearInterval(a) // it stops the execution

//events

//onclick
// let a = document.getElementsByClassName("btn")[0];
// a.onclick =()=>{
//     console.log("button is clicked")
// }

// add event listener and remove event listener

// let btn = document.getElementsByClassName("btn")[0];

// btn.addEventListener('click',function(e){
//     alert("hello world 1")
// })
// btn.addEventListener('click',function(e){
//     alert("hello world 2");
// })

// to use remove event listener we need to declare function on other variable by this only we can use this 

// let btn = document.getElementsByClassName("btn")[0];

// let a = prompt("enter the number")
// let x =()=>{
//     alert("hello world 1")
// }
// let y=()=>{
//     alert("hello world 2")
// }
//  btn.addEventListener('click',x);
//  btn.addEventListener('click',y);

//  if (a=='1') {
//     btn.removeEventListener('click',y)
    
//  }

//event object like e , e.target


// let btn = document.getElementsByClassName("btn")[0];
// let x =(e)=>{
//         alert("hello world 1")
//         console.log(e)
//         console.log(e.target)
//     } 
//     btn.addEventListener('click',x);



