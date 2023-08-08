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


//promise 
//simple example

// let p = new Promise((resolve,reject)=>{
//     let a= 1+1;
//     if(a==2){
//         resolve('Success')
//     }
//     else{
//         reject('failed')
//     }
// })
// p.then((message)=>{
//     console.log('This is in the then '+ message)
// }).catch((message)=>{
//     console.log('This is iin the catch'+ message)
// })

//promises can be consumed by .then and .catch methods


// promise then() method is invoked when promise is either resolved or rejected
// Parameters: It takes two functions as parameters.

//     The first function is executed if the promise is resolved and a result is received.
//     The second function is executed if the promise is rejected and an error is received. (It is optional and there is a better way to handle error using .catch() method

// Syntax:

// .then(function(result){
//         //handle success
// }, function(error){
//         //handle error
// })

//Example 2: This example shows how the then method handles when a promise is resolved

// let promise = new Promise(function(resolve,reject){
//     resolve('Success')
// })
// promise.then(function(successmess){
//     console.log(successmess)
// },function(errormess){
//     console.log(errormess)
// });

//Example 3: This example shows the condition when a rejected promise is handled by second function of then method

// let promise = new Promise(function(resolve,reject){
//     reject('Promise Rejected')
// })
// promise.then((message)=>{
//     console.log(message);
// },(errormessage)=>{
//     console.log(errormessage);
// })



// 2. Promise catch() Method: It is invoked when a promise is either rejected or some error has occurred in execution. It is used as an Error Handler whenever at any step there is a chance of getting an error.

// Parameters: It takes one function as a parameter.

//     Function to handle errors or promise rejections.(.catch() method internally calls .then(null, errorHandler), i.e. .catch() is just a shorthand for .then(null, errorHandler) )

// Syntax:

// .catch(function(error){
//         //handle error
//     })

//Examples 4: This example shows the catch method handling the reject function of promise.

// let promise = new Promise ((resolve,reject)=>{
//     reject('Promise is rejected')
// })
// promise.then((successmessage)=>{
//     console.log(successmessage);
// })
// .catch((errormessage)=>{
//     console.log(errormessage);
// })

// https://blog.yogeshchavan.dev/the-most-important-thing-you-dont-know-about-promises yo herda hunxa ek taal
