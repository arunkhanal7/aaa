//this is how  async and await is used for promise 


// const arun= async ()=>{
//     let delhiWeather = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("27 Degree")
//         }, 2000);
//     })
//     let bangloreWeather = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("22 Degree")
//         }, 5000);
//     })
// console.log("welcome to the weather forecasting:") ;
// console.log("fetching Delhi Weather");
// let delhiW =await delhiWeather; 
// console.log('Delhi weather is :' + delhiW);
// console.log("fetching banglore Weather....")
// let bangW = await bangloreWeather;
// console.log("Banglore Weather is :"+ bangW);

// }
//  async function main1(){
//     let result= await arun();
    

//  }
//  main1()



//try catch block :The try statement allows you to define a block of code to be tested for errors while it is being executed.
// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
// The JavaScript statements try and catch come in pairs

// setTimeout(() => {
//     console.log("hacking started.....")
// }, 1000);
// try {
//     console.log(rabin);
// } catch (error) {
//     console.log(error);
// }

// setTimeout(() => {
//     console.log("starting rabin accout")
// }, 2000);
// setTimeout(() => {
//     console.log("hackiing completed.....")
// }, 3000);
// setTimeout(() => {
//     console.log("id and password is generated.....")
// }, 4000);


// if we use try catch in like this then it will not work because it test out once for settimeout and it goes
//for this we need to use try catch under the settimeout function
// try {
//     setTimeout(() => {
//         console.log(rabin)
//     }, 2000);  
// } catch (error) {
//     console.log(error)
// }

// setTimeout(() => {
//     console.log("hackiing completed.....")
// }, 3000);
// setTimeout(() => {
//     console.log("id and password is generated.....")
// }, 4000);

// error object : error.name and error.messaage are main error objects 
// try {
//     console.log(a)
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
    
// }


// customs error : throw statement allows you to create a custom error
//eg 1 try catch throw example

// const number = 40;
// try {
//     if (number > 50) {
//         console.log("success")
        
//     }
//     else {
//         //user defined throw statement
//         throw new Error ("The number is low")
//     }
//     // if throw executes the below code will not execute
//     console.log("hello");
    
// } catch (error) {
//     console.log("error found:");
//     console.log("Error Message is "+ error.message);
    
// }

// finally block :it runs whether there is a error in the try catch or not

//eg1 : when there is no error

// try {
//     let a= 12;
//     console.log("program run successfully")
// } catch (error) {
//     console.log("This is the error")
//     console.log(error.message);
// }
// finally{
//     console.log("I am from finally block");
// }


//eg2 when there is error

// try {
//     console.log("program run successfully")
//     console.log(a);
// } catch (error) {
//     console.log("This is the error")
//     console.log(error.message);
// }
// finally{
//     console.log("I am from finally block");
// }


//eg 3 when there is the error in catch block even then finally run

// try {
//     console.log("program run successfully")
//     console.log(a);
// } catch (error) {
//     console.log("This is the error")
//     console.log(error.message);
//     console.log(p);
// }
// finally{
//     console.log("I am from finally block");
// }


//in eg 3 if we dont use finally then the last code will not be executed

// try {
//     console.log("program run successfully")
//     console.log(a);
// } catch (error) {
//     console.log("This is the error")
//     console.log(error.message);
//     console.log(p);
// }

//     console.log("I am from finally block"); // this will not be executed without finally since there is a error on catch block


// eg 4 : finally runs even when a function gets return earlier  
// in this function there is no error and function gets return call in try block but instead of this finally block runs and gove output

// const f =()=>{
//     try {
//             console.log("program run successfully")
//             return
//         } catch (error) {
//             console.log("This is the error")
//             console.log(error.message);
//         }
//         finally{
//             console.log("I am from finally block");
//         }

// }
// f()
// console.log("end")










