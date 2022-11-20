// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.


// setTimeout(alerthello, 1000)
// function alerthello(){
//     alert('hello world')

// }

// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

// setTimeout(addpara,2000)
// let interval= setInterval( addpara, 2000);

// function addpara(){
   
// let para=document.getElementById('container');
// console.log(para);
// let newone=document.createElement('p')
// let newnew= document.createTextNode("Hello world")
// newone.appendChild(newnew);

// if(para.children.length<5){
//     para.appendChild(newone);
// }
// else(
//     clearInterval(interval)

// )
// }

// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) 
// as soon as there 
// will be 5 paragraphs inside the <div id="container">.

// let interval= setInterval( addpara, 2000);

// let button=document.getElementById('clear');
// console.log(button);
// button.addEventListener("click", clearInterval1)
// function clearInterval1() {
//     clearInterval(interval);
//   }

//ex2

// let thisleft=0;
// let moveID=0;
// function movecube(){
//     let redcube=document.getElementById('animate');
//     if(thisleft>=350){
//         clearInterval(moveID);
//     }else{
//         thisleft+=25
//         redcube.style.left=thisleft+'px'
    

//     }
// }
// function mymove(){
//     thisleft=0
//     moveID=setInterval(movecube,500);
// }



//ex3

function dragstart(event){
    
    event.dataTransfer.setData('Div', event.target.id);
}

function allowDrop(event){
    event.preventDefault();

}

function drop(event){
    event.preventDefault();
    let data=event.dataTransfer.getData('Div');
    event.target.appendChild(document.getElementById(data));

}