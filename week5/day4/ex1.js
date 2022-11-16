let h1= document.querySelector(" article > h1");
console.log(h1);

let pies= document.querySelector("article");
console.log(pies);
pies.lastElementChild.remove()


let h2= document.querySelector("h2");
console.log(h2)
h2.addEventListener("click", inform);
function inform(){
 console.log(h2.style.backgroundColor='red')   
}
 
let h3= document.querySelector("h3");
console.log(h3);
h3.addEventListener("click", hello)
function hello(){
    console.log(h3.style.display="none")
}




let wow= document.createElement('button');
console.log(wow);
wow.textContent="press here"
pies.appendChild(wow)

 let pas=document.querySelectorAll('p')
 console.log(pas);
 wow.addEventListener("click", ()=> {
    for(let p of pas){
        p.style.fontWeight="bold"
    };
 })

function mathrandom(){
   return Math.floor(Math.random()*100)
}
console.log(h1);
h1.addEventListener("mouseover", random) 
function random(){
    h1.style.fontSize=mathrandom()+'px'
}


    


 
 
 

     







