//xp1
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.


// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()// a will be equal to 5 because if is true. 
// #1.2 What will happen if the variable is declared 
// with const instead of let ?error because we can't reasign const variable 
//like we can do with let. 

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// // #2.1 - run in the console:
// funcThree() it will alret a=0because it doenst have a defined insie block, it goes
//for global scope 
// funcTwo() i thought it shouldgive a=0 but it gave undefined, because
//we didn't define a, but we defined it in a global one a=0...idk will check**
// funcThree() again a=0
// #2.2 What will happen if the variable is declared 
// with const instead of let ?it will give arror because we can't reassign it


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
// funcFour() hello will be stored in window's proprties but no change on screen
// funcFive() a=0 because it's previously defined in #2

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
// funcSix() error because a is previously defined in #2
// #4.2 What will happen if the variable is declared but if it wasn't it would show
//test because it is locally defined.
// with const instead of let ? error but after checking it should same result of test,
// because we didn't reassign anything... 

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console for first alert it'll show in the if block5 
// because let a=5 is the local scope in this block of first alert
//for 2nd alert it doesn't have local defined variable so it goes for global one
//let a=2...
// #5.2 What will happen if the variable is declared 
// with const instead of let ? nothing changes because we didn't reassign...



//ex2
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true,
//  the experiencePoints variable should be equal to 10, 
//  else the variable should be equal to 1.
// Console.log the experiencePoints variable.

function winBattle(){
    return true;
}

let winBattle= () => true
let experiencePoints=''
experiencePoints=winBattle()?10:1
console.log(experiencePoints);//it gave 10 becuase condition is true.

//ex3
// Write a JavaScript arrow function that checks whether the value of the
//  argument passed, is a string or not. Use ternary operator
// Check out the example below to see the expected output

let checkIf=(checkMeIfYouCan)=> typeof(checkMeIfYouCan)==='string'? true:false


//ex4
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order : 
// “1# choice is Blue.” “2# choice is Green.” 
// “3# choice is Red.” ect…
for(i=0; i<colors.length;i++){
    let color=colors[i]
    console.log(`#${i+1} choice is ${color}`)
}


colors.forEach((color,numberOfColor => {
    console.log(`#${numberOfColor+1}, choice is${colors}`)
}));

//ex4.2
colors.some((violet)=>{
    if(true){
        console.log('yeah')
    } else(
        console.log('no')
    )
    return(violet)
});
//true 


//ex5

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

//1st choice is blue


colors.forEach((e, i) =>
  console.log(`${i + 1}${ordinal[i + 1 > 3 ? 0 : i + 1]} choice is ${e}`)
);


//xp6
let banckAmount=0
const vatRate=0.17
const details = ["+200", "-100", "+146", "+167", "-2900"]
cost currentBankAcount= addvat(details)
console.log(currentBankAcount);

function addvat(epenses){
    let total=0 
    expenses.forEach((epenses)=>{
        const numExpense=Number(epenses);
        const expenseWithVat=numExpense*(1+vatRate);
        total=total+expenseWithVat
    });
    return total;
}








