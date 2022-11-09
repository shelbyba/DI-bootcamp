//Retrieve the div and console.log it
//Change the name “Pete” to “Richard”.
//Change each first name of the two <ul>'s to your name.
//Delete the <li> that contains the text node “Sarah”.


//1
let div=document.getElementById("container");
console.log(div);

//let h1 = document.querySelector('div');
//console.log(h1);

//2
let ul= document.querySelector('ul');
console.log(ul);
let too= ul.lastElementChild;
console.log(too);



let newlistitem= document.createElement('li');
newlistitem.textContent='Richard';
ul.replaceChild(newlistitem, too );

//3
//a
let newname= document.querySelector('li')
console.log(newname);
let newme= newname.textContent="Shelby"

//B

let hello= document.getElementsByClassName('list')
console.log(hello);
document.getElementsByTagName('li')[0].innerHTML= 'Shelby'
document.getElementsByTagName("li")[2].innerHTML = "shelby"

 
 



//let parentElem = document.getElementById("main");
//let childElem = document.getElementById("hint");
//parentElem.removeChild(childElem);

let parentElem= document.querySelector('#parent');
let childElem= document.getElementById('child');
parentElem.removeChild(child);

//Bonus - Using Javascript:
//Add a class called student_list to both of the <ul>'s.
//Add the classes university and attendance to the first <ul>.


ul.className='Student_list';
let sister = document.querySelector('ul');


sister.classList.add('univerity', 'attendance');





























































