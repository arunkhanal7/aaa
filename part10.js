//inner html :allows us to get or set the HTML markup contained within the element and valid for element nodes only

// let a = document.getElementById("first");
// console.log(a.innerHTML)
// a.innerHTML = "hello I am changed from span"

//outerHTML : contains full html . innerhtml + the element itself
// let b= document.getElementById("second")
// b.outerHTML = 'I am changed '

//textContent : It gives text content only 
// console.log(document.body.textContent)

//attribute methods
//getattribute method : to get the certain attribute 
const element = document.getElementById("one");
let a = element.getAttribute("class");
console.log(a);

//hasattribute method : to check wheter there is attribute present or not returs ture or false
let b= element.hasAttribute('class')
console.log(b)

//setattribute : used to set attribute
element.setAttribute('class','fromset') // to set class name as fromset 

//removeattribute : to remove the attribute
element.removeAttribute('class');


 