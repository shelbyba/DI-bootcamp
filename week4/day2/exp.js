
// exp1

const people = ["Greg", "Mary", "Devon", "James"];
// delete people[0];
// console.log(people);

// Write code to replace “James” to “Jason”.
// people[3]='Jason'
// console.log(people);

// Write code to add your name to the end of the people array
// people.push='shelby'

// Write code that console.logs Mary’s index. 
// console.log(people.indexOf('Mary'));
// console.log(people);

// Write code to make a copy of the people array using the slice method
// let newarray=people.slice(1, 4);
// console.log(newarray);

// console.log(people.indexOf('foo'));
// -1 because it doesn't exist in an array as array starts from 0 to infinity which is true

// last 
// let last= people[3];
// console.log(last);

//part 2

// for(let person of people){
//     console.log(person);
//     if (person === 'Devon'){break}
// }
// console.log(people);


//exp2
// let colors = ['black','white','blue','gray','beige']
// console.log(colors);
// for(i=0 ; i<colors.length ; i++){
//     console.log(`my ${i} choice is ${colors[i]}`)
// }

//xp3

// let ask= prompt('choose a number')
// let ask= null
// while (ask != 10){
//     let newone= prompt('choose a number')  
//     ask=Number(newone)
// }

//xp4
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
    
// }
// console.log(building.numberOfFloors);
// let search= building.numberOfAptByFloor.firstFloor;
// console.log(search)
// let searchnew=building.numberOfAptByFloor.thirdFloor;
// console.log(searchnew);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
   
//   console.log(building.nameOfTenants[1])
//   console.log(building.numberOfRoomsAndRent.dan[0])

//  let firstone= console.log(building.numberOfRoomsAndRent.sarah[1])
//  let then= console.log(building.numberOfRoomsAndRent.david[1])
//  let danies= console.log(building.numberOfRoomsAndRent.dan[1])

//  if(firstone+then > danies){
//     building.numberOfRoomsAndRent.dan[1]=1200
//  }

// let family= {
//     dad: 'mike',
//     mom : 'sarah',
//     son : 'shebly'
// }
// for( faml in family){
//     console.log(faml)
//     console.log(family[faml])
// }

//ex6
// let details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
   
  
// }
// let sentece=''
// for( let det in details){
//     console.log(det);
//     console.log(details[det])
//     sentece= sentece + '' + det + '' + details[det]
// }
// console.log(sentece)
 
//ex7

// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// secret=''
// for( let name of names.sort()){
//     console.log(name);
// secret= secret + name[0]
// }
// console.log(secret);

   












