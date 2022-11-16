let form=document.querySelector('form');
console.log(form);

let firstname=document.getElementById('fname');
let lastname = document.getElementById("lname");
let submit = document.getElementById('submit');
console.log(firstname, lastname, submit);



//its not working for me :)

form.addEventListener('submit', detail)
function detail(e){
    e.preventDefault();
    let ffname=document.querySelector('[name=fname]').value;
    let llname = document.querySelector('[name=lname]').value;
console.log(ffname, llname)
if(ffname===""|| llname==="") {
    alert('please wake up');
}
    else {
        let ul=document.querySelector('.usersAnswer')
        let lione=document.createElement('li')
        let li2= document.createElement('li')
        lione.innerText=ffname
         li2.innerText=llname
         ul.appendChild(lione);
         ul.appendChild(li2);
    }
}




