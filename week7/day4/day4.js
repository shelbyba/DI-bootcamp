//ex1
// const adding = (a)=>(b)=> a+b;
// console.log(adding(2)(3));

//ex2
// Create a function that receives a weight in kilograms and returns it in grams.
//  (Hint: 1 kg is 1000gr)
// const convert = (weight)=>(weight*1000);
// console.log(convert());

// function conver(weight){
//     return weight*1000
// }
// console.log(conver(1));


//ex3
// Create a self invoking function that takes 4 arguments: 
// number of children, partner’s name, geographic location, job title.

// (function(numberOfCildren, partnersName,locatio, jobtitle) {
//   const sentence= `You will be a ${jobtitle} in ${locatio},
//    and married to ${partnersName} with ${numberOfCildren} kids.`
//    alert (sentence);
//   const dom= document.createElement('p');
//   dom.innerText=sentence
//   document.body.appendChild(dom);



// })(0 ,'DREAM GIRL','ISRAEL', 'DOCTOR');

//ex4
// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes
//  1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar,
//  displaying the name of the user and his profile picture.

// (function(name){
//     const div=document.createElement('div');
//     div.innerText=name
//     const image=document.createElement('img')
//     image.src="https://images.unsplash.com/photo-1457269449834-928af64c684d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" 
//     image.style.height='50px'
//     image.style.width='50px'
//     const navbar=document.querySelector('.navbar')
//     navbar.appendChild(div);
//     navbar.appendChild(image)
// })('YARIN')

//ex5   i got stick bit here.... 
// function makeJuice(size){
//     console.log('we are making juice in this size',size)
// }
// makeJuice("medium");

// function addIngredients (first, second, third){
//     console.log('we have',first, second,third)
// }addIngredients(wine, water,whiskey)




