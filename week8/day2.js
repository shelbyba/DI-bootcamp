//ex1
------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];



const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
//it will start with bread and then it'll  vegetables then chickin 
//then fruits
//it is spread operator, unpack elemnts into strings

------2------
const country = "USA";
console.log([...country]);
//it will console log USA
// after checking it should string of u s a 
//it is rest opertor it it packs elements into an array


------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// it will give ',', ',' 
// wel it's not defined 


//ex2
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

            //  Using the map() method, push into
            //   a new array the firstname of the user and a welcome message. 
            //  You should get an array that looks like this :

         const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

         const welcome = users.map((value)=>'hello'+ value.firstName)
         console.log(welcome);


        //  Using the filter() method, 
        //  create a new array, containing only the Full Stack Residents.
        const FullStack= users.filter(item=>item.role==='Full Stack Resident');
        console.log(FullStack);


        // Bonus : Chain the filter method with a map method, to return an array 
        // containing only the lastName of the Full Stack Residents.

        const chainn=FullStack.map((value=>value.lastName));
        console.log(chainn);


        //ex3
        // Using this array 
        const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
        // Use the
        //  reduce() method to combine all of these into a single string.
        const combineAll=epic.reduce((total, item)=> total += item + " ")
        console.log(combineAll);

        const useJoin= epic.join( " ")
        console.log(useJoin);

        //ex4
        const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
              
            //    Using the filter() method, create a new array,
            //     containing the students that passed the course.
          const useFilter= students.filter((value)=>value.isPassed===true);
          console.log(useFilter);

       useFilter.forEach(student => {
        console.log(` congarts ${student.name} you passed ${student.course}`)
       });
       console.log(useFilter);
     



