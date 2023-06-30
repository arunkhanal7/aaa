//arrays  are variable that can hold more than one value

// let a =[1,2,3,4,'hi','hello'];
// console.log(a[0]);
// console.log('the length of the array a is :',a.length);
// a[0]=12// changing value of array arrays are mutable it can be changed
// console.log(a);
// console.log(typeof(a));  ///type of arrays is object


// // using for loop to print every element of the array
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);
    
// }

//array methods
// let num=[1,2,3,4,5]
// let b=num.toString() // b is now string

// let c= num.join("_")  // it is used to join in every elemetn

// //pop method
// num.pop()// it pops the last element of the array

// //push method
// num.push(6); // it push element in the array in the end

// //shift remove first element and modify the arraay
// num.shift();

// //unshift it adds the element in first index and modify the aray
// num.unshift(67);


// let num=[1,2,3,4,5,6,7,8,9]
// delete(num[0]); // it dlete the element but it doesnot change the length of the array

//concat 
// let num1=[10,11,12,13,14,15,16,17];
// let num2=[18,19,20,21,22,23];

// let newarray= num1.concat(num2)
// console.log(newarray);

// sort method
// let num=[1,300,4,2,9,6];
// num.sort()//sort alphabetically order and modify them 
// console.log(num);

//to sort ascending order we need to give compare function as a argument in sort as shown in below
// let compare=(a,b)=>{
//     return a-b
// }

//  let num2=[1,2,400,5,600,7,8]
// num2.sort(compare);
// console.log(num2);


//reverse  it reverse the array simple
// let num=[1,300,4,2,9,6];
// num.reverse()
// console.log(num);

//splice and slice
//  let num=[1,2,3,4,5,6,7,8]
// num.splice(2,3,1000,1001,1002,1003,1004)// (start from 2nd index,remove 3 element,add other in place of that )
// console.log(num);

//slice slice out piece from an aray and it create a new array it doesnot modify the array
let num=[1,2,3,4,5,6,7,8]
let num1=num.slice(2,5)//slice form 2 ,3,4 it doesnot include 5
console.log(num1);




