//network request and Storing Data

// The fetch() method in JavaScript is used to request data from a server. The request can be of any type of API that returns the data in JSON or XML. The fetch() method requires one parameter, the URL to request, and returns a promise.

// Syntax:

// fetch('url')           //api for the get request
//   .then(response => response.json())
//   .then(data => console.log(data));

// Parameters: This method requires one parameter and accepts two parameters:
//     URL: It is the URL to which the request is to be made.
//     Options: It is an array of properties. It is an optional parameter.
// Return Value: It returns a promise whether it is resolved or not. The return data can be of the format JSON or XML. It can be an array of objects or simply a single object.

// this is for get request

// let datas = fetch('https://jsonplaceholder.typicode.com/posts');
// datas.then((response)=> response.json())
// .then((json)=>console.log(json));


//post request

// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: "POST",
//     body:JSON.stringify({
//         title:"arun",
//         body:"khanal",
//         userId:1,
//     }),
//     headers:{
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// }

// )
// .then((response)=> response.json())
// .then((json)=> console.log(json))

//another example

// user ={
//     "name":"arun khanal",
//     'age': "23"
// }
// let options = {
//     method: 'POST',
//     headers: {
//         'Content-type':'application/json; charset=UTF-8'
//     },
//     body: JSON.stringify(user)
// }

// let fetchRes = fetch('https://dummy.restapiexample.com/api/v1/create',options);
// fetchRes.then((response)=>response.json())
// .then((d)=>console.log(d))


//get request with async await 

// async function  abcd(){
//    let raw= await fetch('https://jsonplaceholder.typicode.com/posts');
//    let ans =await raw.json();
//    console.log(ans)
// }
// abcd();


//post request with async await

// async function postData(){
//    const user ={
//     "name":"arun khanal",
//     'age': "23"
// }
// let options = {
//         method: 'POST',
//         headers: {
//             'Content-type':'application/json; charset=UTF-8'
//         },
//         body: JSON.stringify(user)
//     };
//     const response= await fetch ('https://dummy.restapiexample.com/api/v1/create',options);
//     const data = await response.json();
//     console.log(data);

// }
// postData();


// cookie 
/*Cookies are data, stored in small text files, on your computer.

When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.

Cookies were invented to solve the problem "how to remember information about the user":

    When a user visits a web page, his/her name can be stored in a cookie.
    Next time the user visits the page, the cookie "remembers" his/her name.

Cookies are saved in name-value pairs */

// document.cookie = 'name=arun123'
// document.cookie= 'email=xyz@gmail.com'
// let key = prompt("enter your key");
// let value = prompt('enter your value');


// // document.cookie=`${key}=${value}`;

// // to get cookie key value in like with semicolon or for valid formatting we can use encodeuricomponent

// document.cookie =`${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

// console.log(document.cookie);



//local storagee:: web storage object which are not sent from the server    full page refresh ya browser restart vaye ni save vai rakhxa
//browser ko inspect ko application ma gayera local storage ma store vayeko kura herna milxa

// let key = prompt("enter key you want to set");
// let value = prompt("enter value you want to set");

//setItem to set the key value pair
// localStorage.setItem(key,value);

//getItem to get the value by key
// console.log(`the value at ${key} is ${localStorage.getItem(key)}`);

//removeItem(key) : remove the key with its value

// if (key=='red' ) {
//     localStorage.removeItem(key)
    
// }

//clear() : remove everything













