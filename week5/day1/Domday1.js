//For each of the questions, find 2 WAYS to access :

//1. The div node

//2. The ul nodes, and render all of it's children one by one

//3. The first li of each ul

//* self-trying

let body= document.body;
console.log(body.firstElementChild);
console.log(body.nextElementSibling);
console.log(body.lastElementChild);
console.log(body.getElementsByClassName('list'));
body.style.backgroundColor ='skyblue';



//1
 console.log( document.getElementById("container"));
 console.log ( document.getElementsByTagName('div'));
 
 //const x = document.getElementById("main");---- used in W3school
//const y = x.getElementsByTagName("p");---- used in W3school 

//2
let u= document.getElementById('container');
let uls=document.getElementsByTagName('ul');
console.log('list'[0])
document.getElementsByClassName('list').firstElementChild;

console.log(document.getElementsByClassName('list'));

//3

document.getElementsByClassName('list').firstElementChild;

let now =document.getElementsByTagName('ul');
console.log (now);
console.log (now[0]);

console.log (now[1]);

//Query selector 
let h1= document.querySelector('h1');
console.log(h1);

//Query selector all
let hmore= document.querySelectorAll('h1');
//for ( let hmore of h1){
   // console.log(hmore); 
 //}

console.log(hmore);

console.log(hmore[2]);
console.log(h1.textContent);


//creating elements
let doctor= document.createElement('h2')
doctor.innerText = " Hello Doctor"
console.log (doctor)
body.appendChild(doctor);

let anothertry= document.createElement('h1');
anothertry.innerText= 'Doctor i have my x-ray'
h1.appendChild(anothertry);
console.log(anothertry.hasAttribute('style'));
//how can i add for specific element which been created alreay?

//createboxes

let divnew= document.createElement('div');
divnew.style.width= '100px'
divnew.style.height='100px'
divnew.style.border='3px solid black'
divnew.style.background= 'gray'
divnew.style.margin='2rem'
body.appendChild(divnew);

for( x=0; x<10; x++){
let divnew=document.createElement('div')
divnew.style.width='100'
divnew.style.height='100px'
divnew.style.border='3px solid black'
divnew.style.background= 'gray'
divnew.style.margin='2rem'
body.appendChild(divnew);
}
console.log(divnew.hasAttribute('#'));
console.log(divnew.hasAttribute('style'));
//innerHTML












