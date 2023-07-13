//inner html :allows us to get or set the HTML markup contained within the element and valid for element nodes only

let a = document.getElementById("first");
console.log(a.innerHTML)
a.innerHTML = "hello I am changed from span"

//outerHTML : contains full html . innerhtml + the element itself
let b= document.getElementById("second")
b.outerHTML = 'I am changed '

//textContent : It gives text content only 
console.log(document.body.textContent)
