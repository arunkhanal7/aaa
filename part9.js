// dom 
// accessing first child and lastchild

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.childNodes);

//element only navigation dom
// let b= document.body

// this gives first child
// console.log("First child of b is :",b.firstChild); 

// this gives first element child 
// console.log("first element of b is :" ,b.firstElementChild) 

//dom search 
//change card title to red

//getelement by classname
// let ctitle= document.getElementsByClassName("card-title")[0];
// ctitle.style.color= 'red';


// get element by ID
// let title=document.getElementById("firstcardtitle");
// title.style.color= 'blue';
// console.log(title)

//queryselectorAll
// let ctitles = document.querySelectorAll(".card-title");
// ctitles[0].style.color='blue'
// ctitles[1].style.color='red'
// ctitles[2].style.color='green'

//matches closets and contains method in dom search
let id1= document.getElementById('id1');
console.log(id1);

//matches: check if element matches the given css selector
console.log(id1.matches('.class')); //return false
console.log(id1.matches('.box')); //return ture

//elem.closest(css) :look for the nearest anchestor that matches the given css selector
let sp1= document.getElementById('sp1');
console.log(sp1.closest(".box"))


//contains : return true if element B is inside element A
console.log(id1.contains(sp1));