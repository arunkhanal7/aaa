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
// const element = document.getElementById("one");
// let a = element.getAttribute("class");
// console.log(a);

//hasattribute method : to check wheter there is attribute present or not returs ture or false
// let b= element.hasAttribute('class')
// console.log(b)

//setattribute : used to set attribute
// element.setAttribute('class','fromset') // to set class name as fromset 

//removeattribute : to remove the attribute
// element.removeAttribute('class'); 


//html insertion method 


// let a = document.getElementsByTagName('div')[0]
// let div = document.createElement('div');
// div.innerHTML = '<h1>Hello World</h1>';

// a.append(div);  // its get append to the end of node 

// a.prepend(div);  // its get append to the beginning of node

//a.before(div); // insert before node

//a.after(div); // insert after node

// a.replaceWith('div')//replace 


//insert adjacent methods

// let b = document.getElementById('second');

// b.insertAdjacentHTML('beforebegin','<div class="test">beforebigin </div>');
// b.insertAdjacentHTML('beforeend','<div class="test">beforened</div>');
// b.insertAdjacentHTML('afterbegin','<div class="test">afterbegin</div>');
// b.insertAdjacentHTML('afterend','<div class="test">afterend</div>');

//**className and classlist


//  let a= document.getElementById("first");

// //  a.className='red'; // red class will be added 

// a.classList.add('green');  // class is added to the class list
// a.classList.remove('green') //remove the class
// a.classList.contains('red'); //check class return true and false










 