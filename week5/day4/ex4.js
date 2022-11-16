let form=document.getElementById('my_form');
form.addEventListener('submit', hanlder);
function hanlder(event){
event.preventDefault();
let rad= Number(radius.value);
if(Number.isNaN(rad)) return;
let volum= 4/3*Math.PI*rad**3;
console.log(volum)
volume.value=volum.toFixed(2);
}

let radius= document.getElementById('radius')
let volume= document.getElementById('volume');

