//Add the code above, to your HTML file

//Add a “light blue” background color and some padding to the <div>.

//Do not display the <li> that contains the text node “John”.

//Add a border to the <li> that contains the text node “Pete”.

//Change the font size of the whole body.

//Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

let start = document.querySelector('div');
console.log(start);
start.style.background= "lightblue"
start.style.padding="3rem"
start.style.fontSize='100px'
var r=confirm("Hello X AND Y USERS");
if (r==true)
  {
  x="You pressed OK!";
  }
else
  {
  x="You pressed Cancel!";
  }

let now = document.querySelectorAll('li')[0];
console.log(now);
now.style.display='none'

let nachos = document.querySelectorAll('li')[1];
console.log(nachos);
nachos.style.border='solid red 5px'
nachos.style.fontSize= '80px'



