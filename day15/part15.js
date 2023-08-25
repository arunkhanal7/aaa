//oop
//prototype  in js

// let a= {
//     name:"arun",
//     lang :"js"
// }
// console.log(a);


// let p={
//     run: ()=>{
//         alert("run")
//     }
// }

// p.__proto__={
//     name1:'Jackie'
// }


//setting a prototype of a to p

// a.__proto__ = p;  


//a ma xaina vane a ko prototype ma herxa tesma ni xaina vane tesko pani prototype ma herxa


// a.run();
// console.log(a.name1)


//classes and oject in js

// class Railwayform{
//     submit(){
//         alert(this.name+ " form submitted for train no: "+this.trainno);
//     }
//     cancel(){
//         alert(this.name+" form is cancelled for train no: "+this.trainno);
//     }
//     fill(givenname,trainno){
//         this.name=givenname;
//         this.trainno=trainno
//     }

// }

// //object
// let arun = new Railwayform();
// arun.fill("arun",12345)
// let rabin = new Railwayform();
// rabin.fill("rabin",56789)

// arun.submit();
// rabin.submit();
// rabin.cancel();


//constructor in js : same example using constructor


// class Railwayform{
//     //constructor is called when new object is formed
//     constructor(givenname,trainno){
       
//         this.name=givenname;
//         this.trainno=trainno;
//         console.log(this.name+"constructor called" +this.trainno );

//     }
//     submit(){
//         alert(this.name+ " form submitted for train no: "+this.trainno);
//     }
//     cancel(){
//         alert(this.name+" form is cancelled for train no: "+this.trainno);
//     }
    

// }

// //object
// let arun = new Railwayform("arun",78978);

// let rabin = new Railwayform("rabin",23420);


// arun.submit();
// rabin.submit();
// rabin.cancel();


// inheritance in js

class animal {
    constructor(name,speed){
        this.name=name;
        this.speed=speed;

    }
    run(){
        console.log(`${this.name} is runnung at a speed of${this.speed} km/hr`)
    }
    shout(){
        console.log(`${this.name} is shouting`)
    }
}
let animal1= new animal('tiger',30);
animal1.run();
animal1.shout();

class monkey extends animal{
    eatbanana(){
        console.log(`${this.name} is eatting banana`);
    }
}

let m = new monkey("sheru" ,78);
m.eatbanana();
m.run();
m.shout();




