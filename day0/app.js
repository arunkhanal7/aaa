//declare a variable 
// var myName="Arun"

// let ourname="freecode"

// const pi=3.14 //const cannot be changed 

// let a=7;
// document.write(a+a);

// let str1='arun';
// let str2='khanal';
//  console.log(str1+str2);

// //double quoted string: by using escape character(\")
// let str3="Ram said \"he is not free\" tomorrow morning."
// let str4='Ram said "he is not free" tomorrow morning.';
// str3+=' So do I ' //string concatination can be done also by this way
// document.write(str3);
// document.write(str4);

//length of the string
// str3length=str3.length;
// document.write(str3length);

// arryas 
// var arr=[1,2,'arun',3,4,5];
// document.write(arr);
// document.write(arr[2]);

//multi dimensional arrays
// var myarray=[[1,2,3],[4,5,6],[7,8,9,[[10,11,12],13,14]]]
// var myData=myarray[2][1];
// document.write(myData);

//array push method  add element on last
// var myarr=["rabin","koirala"];
// myarr.push(["sanjay","susham"]);
// document.write(myarr);
// myarr.pop();//remove the last item from the array and shift() function works like pop function but it remove the first element
// document.write(myarr);
// myarr.unshift(['arun','dai']); //unshift add element in the beginning 
// document.write(myarr);

//function
// function average(a,b) {
//     return (a+b)/2;
// }
// c=average(10,14);
// document.write(c);


// let mood = 'sleepy';
// let tirednessLevel = 6;
// if(mood ==='sleepy' && tirednessLevel >= 8){
//   console.log('time to sleep')
// }
// else{
//   console.log('not bed time yet')
// }

//map method 
//  const arr=[12,45,67]
//  arr.map((value,index)=>{
//   console.log(value,index)

//  })

//filter
// let arr2=[4,11,15,12,2,3]
// let a2=arr2.filter((a)=>{
//   return a>5
// })
// console.log(a2)

// object destructuring
// const player={
//   name:'cristiano ronaldo',
//   club:'real madrid',
//   address:{
//     city:'Madrid'
//   }
// }

// const {name,club,address:{city}}=player 
// console.log(`${name} lives in ${city}`)


// for of loop

// const incomes=[4000,5000,8000]
// let total=0
//  for (const income of incomes) {
//     total+= income
//  }
//  console.log(total)

//for of loop in string
// let name='arun khanal'
// for (const char of name) {
//     console.log(char)
    
// }

//for of loop practice question
// const students = [ 
//     { name: "John", city: "New York" },
//     { name: "Peter", city: "Paris"},
//     { name: "Kate", city: "Sidney" }
// ];

// for (const student of students) {
//     const{name,city}=student
//     console.log(name +' lives in ' +city)  //  console.log( student.name + " lives in " + student.city ); yesari lekhna ni sakinthyo
// }

// usage of spread operator in array and objects
// let contacts=['arun','ram','shyam']
// let personaldetails=['rabin', ...contacts] // using spread operator we can include all details from one array to new array
// console.log(personaldetails)
// console.log(contacts)

// let details={
//     name:'sachin',
//     age:22,
//     city:'michigan'
// }
// let member={
//     ...details,
//     salary:50000,
//     position:'software manager'
// }
// console.log(member)
// console.log(details)

//rest operator(used when we donot know how many values we gonna pass in the function as argument)
// function add(...nums){
//     console.log(nums)
// }
// add(4,5,6,7,8)

//default params : is used when we dont pass any value as a argument
// const leadsinger=(artist='someone')=>{ // someone is used as default if no any value is passed
//     console.log(`${artist} is the lead singer of cold play.`)
// }
// leadsinger()  // since no any argument is passed default parameter is used
// leadsinger("chris") // argument passed so chris will be used

//padstart() pads at the beginning with the given length
// let a='arun'
// console.log(a.padStart(10,'king')) //print kingkiarun
// console.log(a.padStart(3,'e')) // arun
// console.log(a.padStart(5,'e')) //earun

// //padend() pads at the end of the string with the given length
// let b ='bhakt'
// console.log(b.padEnd(10,'ram'))  //bhaktramra

//class inheritance
// class player{
//     constructor(name,country){
//         this.name=name
//         this.country=country
//     }
//     display(){
//         console.log(`${this.name} plays for the ${this.country}`)
//     }
// }
// const guy = new player('ronaldo','portugal')
// guy.display()

// class tennisplayer extends player{ // extend keyword is used to inherit class
//     constructor(name,country,age){
//         super(name,country)// it copies the arguments it is necessary in child class
//         this.age=age // this is new argument which is passed only in child class
//     }
//     playtennis(){
//         console.log(`${this.name} is ${this.age} years old and plays tennis for ${this.country}.`)
//     }
// }
// const roger=new tennisplayer('Roger Fedrer','Spain','38')
// roger.playtennis()

// fetch : use to fetch data from the server or api call
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((response) => response.json())
// .then((json) => console.log(json));

//using the post method to post the data
// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method:'POST',
//     body:JSON.stringify({
//         title:'arun',
//         body:'khanal',
//         userID:'1'
//     }),
//     headers:{
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
// .then((response) => response.json())
// .then((json)=>console.log(json)) 

// aysnc function always returns the promise
// aysnc and await pause the running of the code till promise gets fulfilled

// async function weather() {
//     let ktmweather = new
//     Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('27 deg')
//         }, 2000);
//     })
//     let bktweather = new
//     Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('21 deg')
//         }, 5000);
//     })

// let kweather= await ktmweather // program will await till 2 sec to fulfill the function

// console.log('ktm weather is '+ kweather)
// let bweather= await bktweather //program will await here too till the promise gets fulfilled
// console.log('bhaktapur weather is '+ bweather)
// console.log('this is the example of how async await works')
// }
// weather()