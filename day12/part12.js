//synchronus action: are the action that initiate and finish one by one line by line execute hunxa
// let a = prompt("what is your name");
// let b= prompt("what is your age");
// console.log('My name is'+ a+ 'I am'+b+'years of old');

//asynchronous action : are the action that we initiate now and they finishes later like settimeout

// in this examplae start run then set timeout  initiated which gets in background and end runs and after 3 second hello world run

// console.log("start")
// setTimeout(() => {
//     console.log("hello world")
// }, 3000);
// console.log("end")
 


// callback function :  passing function as a parameter to other function and call them inside the outer function . mainly used for asynchronous

//callback simple example
// const add= (num1,num2,callback)=>{
//     console.log(num1+num2);
//     callback();

// }
// function say(){
//     console.log("hello");
// }

// add(30,5,say);

// // and i want to use another function instead of say i can easily do it by this
// function wow(){
//     console.log("wow");
// }
// add(40,5,wow);

// // and anonymous function can also be used in callback like

// add(1,2,function(){
//     console.log("i am anonomous function");
// })


//callbacks another example

// function loadscript(src,callback){
//     let script = document.createElement("script");
//     script.src=src;
//     script.onload= function(){
//         console.log("loaded script with src:" + src);
//     }
//     callback();

//     document.body.appendChild(script);

// }
// function hello(){
//     alert('Hello');
// }
// function good(){
//     alert('good morning');
// }
// loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",hello);

//error handling also can be done 
