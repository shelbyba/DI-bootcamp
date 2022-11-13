let planets=['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus','Neptune']
console.log(planets)

// let create= document.createElement('div');
// console.log(create);
// create.classList.add("mercury")


for( let x of planets) {
    let div= document.createElement('div');
    div.classList.add('planet', x.toLowerCase());
    
   let section= document.querySelector('.listPlanets');
   section.appendChild(div);
}


