//In the <div>, 
//change the value of the id attribute from navBar to socialNetworkNavigation, 
//using the setAttribute method.


//We are going to add a new <li> to the <ul>
//First, create a new <li> tag (use the createElement method).
//Create a new text node with “Logout” as its specified text.
//Append the text node to the newly created list node (<li>).
//Finally, append this updated list node to the unordered list (<ul>),
  //   using the appendChild method.

 // Bonus
//Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements
 //from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

 let change= document.querySelector('div');
 console.log(change);

 console.log(change.setAttribute('id', 'socialNetWorkNavigation'));


let get=document.getElementsByTagName('ul')[0];

 let newli= document.createElement('li');

 console.log(newli);

 let logout= document.createTextNode ('logout');

newli.appendChild(logout);

get.appendChild(newli);


let display= get.firstElementChild

console.log(display);

display.textContent

let display1= get.lastElementChild

console.log(display1);



















 

 


