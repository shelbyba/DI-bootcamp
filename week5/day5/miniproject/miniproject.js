let cool; 
let mousedown= false;


let colors=document.querySelectorAll('#sidebar>.color')
console.log(colors)
for(let color of colors){
    color.addEventListener('click', select)
 
}
function select(e){
    cool = e.target.style.backgroundColor;
    console.log(cool)
 }

let main= document.querySelectorAll("#main>*");
console.log(main)
function clicked(e){
    mousedown=true;
    console.log(cool)
} 

function unclick(everymain){
    mousedown=false;
    console.log("")
}
function paint(e){
    if (cool != null) {
        e.target.style.backgroundColor = cool;
        console.log(e.target);
        console.log("down");
        }
    }

function keep(e){
     if(mousedown && cool!=null)
     e.target.style.backgroundColor = cool;
     console.log('over')
     }

for(let everymain of main){
    everymain.addEventListener("mousedown", clicked)
   
    everymain.addEventListener('mouseup',unclick)
   
    
    everymain.addEventListener('mousedown', paint)
   
        
        //from here i have problems

    everymain.addEventListener("mouseover" , keep)
    
    }

let clear=document.querySelector("button")
clear.addEventListener('click', function(){
    for(let everymain of main)
    everymain.style.backgroundColor='white'
})







