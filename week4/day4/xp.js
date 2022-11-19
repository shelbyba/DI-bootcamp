// xp1

// function infoAbouMe(){
// console.log('may name is shelby')
// }
// infoAbouMe();

// part2

// function infoAboutPerson(personName, personAge, personFavoriteColor){
//     console.log(`your name is ${personName}, you are ${personAge},your fav color ${personFavoriteColor}`)
// }
// infoAboutPerson("David", 45, "blue");
// infoAboutPerson("Josh", 12, "yellow");

// xp2
// /useful
// function calculateTip(){
//     let amount=Number(prompt('how much to pay?'));
//     console.log(amount);
//     let tips
//     if(amount < 50 ) tips=0.2
//     if( amount> 50  && amount< 200 ) tips=0.15
//     if(amount>200) tips=0.10
//     console.log(tips);
//     console.log (amount * (1+tips));
// }

// calculateTip();


// 3
// let sum=0
// function isDivisible(){
//     for( i=0; i<= 500; i++ ){
//         if ( i % 23 === 0)console.log(i)
//         if ( i % 23 === 0) sum=sum+i
        
        
//     }
//     console.log(sum)
    
// }
// isDivisible(23);

// let sum=0
// function isDivisible(divisor){
//     for( i=0; i<= 500; i++ ){
//         if ( i % divisor=== 0)console.log(i)
//         if ( i % divisor === 0) sum=sum+i
        
        
//     }
//     console.log(sum)
    
// }
// isDivisible(23);


// ex4
// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let  prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// had a problem with this since it should me results only for banan.
// let shoppingList=['banana', ' orange ', 'apple']
// function myBill(){
// for(let item of shoppingList){
//     let quantity= stock[item];
//     if( quantity > 0){
//         let price= prices[item]
//         console.log('price of', item , 'is', price);
//         console.log('there is', quantity, 'in stock');
//         stock[item]= stock[item]- 1
//         console.log( 'now will be', stock[item]);
//     } else{
//         console.log( item, 'not in stock');
//     }

// }
// }
// myBill();



// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1


// ex5
// function changeEnough(itemPrice, amountOfChange){

//     let quarters= changeEnough[0]*0.25
//     let dimes=changeEnough[1]*0.1
//     let neckles=changeEnough[2]*0.05
//     let penny=changeEnough[3]*0.01
//     let total=quarters+dimes+neckles+penny
//     return total>itemPrice;
// }
// console.log(changeEnough(4.25, [25, 20, 5, 0]));




// ex6

// function hotelcCost(){
//     numberOfNights='';
    
//     while((isNaN(numberOfNights)|| numberOfNights=='' || numberOfNights==0)){
//          numberOfNights= Number( prompt('How many night will you stay?'))
        
//     }
//     let toalCost1=numberOfNights*140
//     return toalCost1;
// }


// function pallerRideCost(){
//     let destination='';
//     while(destination==''|| !(isNaN(Number(destination))) ){
//         destination= prompt('where you going?')
//         console.log(destination);
//     }
//     let totaldestination=0;
//     if(totaldestination=='london'|| totaldestination=='london'){
//         totaldestination=183
//         return totaldestination;
//     }if (totaldestination=='paris'|| totaldestination=='paris') {
//         totaldestination=220
//         return totaldestination;
//     } else {
//     totaldestination=300;
//     return totaldestination;
        
//     }

    

// }
//  pallerRideCost()

// function rentalCarCost(){
//    let numberOfDays=''
//    while (( isNaN(numberOfDays)|| numberOfDays=='' || numberOfDays<=0)){
//      numberOfDays = Number(prompt('how many days?'))
//      console.log(numberOfDays);
//    }
//      let totalCost2=numberOfDays*40
//      if(numberOfDays>10){
//         totalCost2=totalCost2*0.95
//         console.log(totalCost2);
//         return totalCost2;
//      }
// }



// rentalCarCost();

// function totalVacationCost(){
//     let rental1= rentalCarCost();
//     let retnl2= hotelcCost();
//     let rental3= pallerRideCost();
//     let totalprice=`The car cost: ${rental1}, the hotel cost: ${retnl2}, the plane tickets cost: ${rental3}.`
//     console.log(totalprice);
// }
// totalVacationCost();


