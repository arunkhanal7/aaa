// array loops

// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);

// }

//for each loop in arrays
// num.forEach((element)=>{
//     console.log(element*element);
// })

// array.from : used to create from any other objects like html collections, strings
// let name='arun';
// let arr= Array.from(name);
// console.log(arr);

//for of loop
// for (const i of num) {
//     console.log(i)
// }

//for in loop: it gives index for array
// for (let i in num){
//     console.log(i)
// }

// map filter and reduce methods
//map: creates a new array by performing some operation on each array element it takes 3 arguments we can use one or two or three arguments at a time
// let num =[3,5,1,2,4]
// let a = num.map((value,index,array)=>{
//     console.log(value,index,array)
//     return value + index; //it creates new array
// })
// console.log(a)

//array filter method : filters an array that passes the test and also creates new array
// let arr=[45,23,21,0,3,5]
// let a=arr.filter((value)=>{
//     return value<10
// })
// console.log(a)

//array reduce method  : return value
// we can make a function and also pass it to the reduce method
// let arr=[45,23,21,0,3,5];
//  let a=arr.reduce((v1,v2)=>{
//     return v1+v2;
// })
// console.log(a)

//ps1: create an array of numbers and take input from the user to add numbers to the array
// let arr=[1,2,3,4,5,6]
// let a=prompt('enter a number')
// Number.parseInt(a)
// arr.push(a);
// console.log(arr)

//qno:2 keep adding numbers to the array in Q1. until 0 is added to the array
// let arr=[1,2,3,4,5,6]
// let a;
// do{
//     a=prompt("ENTER A NUMBER")
//     a= Number.parseInt(a)
//     arr.push(a)
// }while(a!= 0);
// console.log(arr)

//Qno 3:Filter for numbers divisible by 10 from a given array
// let arr=[10,20,23,30,40,45,55]
// let a= arr.filter((value)=>{
//     return value%10 == 0;
// })
// console.log(a)

//Qno 4: create an array of square of given array
// let arr=[10,20,23,30,40,45,55]
//  let n =arr.map((x)=>{
//     return x*x;
// })
// console.log(n)

//Qno 5: use reduce to calculate factorial of a given number from a array
// let arr=[1,2,3,4]
// let n= arr.reduce((v1,v2)=>{
//     return v1*v2
// })
// console.log(n)

//exercise 1
//write a javascript program to generate a random number and store it in a variable.The Program then takes an input from the user to tell them whether the guess was correct, greater or lesser than the original number.100 - no of guesses is score .program should is expected to terminate once the number is guessed


// let x= Math.random() *100;
// x= Math.round(x);

// let inp;
// let score =100;
//  while (inp!= x) {
//     score= score-1;
//     inp= prompt('enter the number:');
//     if (inp ==x ){
//         console.log('congratulation you guess the correct answer');
//         console.log(`you guess the correct number in  ${100-score} chances`)
//     }
//     else if (inp > x ){
//         console.log('your number is greater than the actual number')
//     }
//     else if (inp < x ){
//         console.log('your number is lesser than the actual number')
//     }
//     else{
//         console.log('enter number between 1 to 100')
//     }
    
//  }
  



