//part1
// const inventory = [
//     { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
//     { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
//     { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
//     { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
//     { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
//   ]
//  function  getCarHonda (cars){
//     const firstHonda = cars.find(car=>car.car_make==='Honda');
//     console.log(`This is a ${firstHonda.car_make} ${firstHonda.car_model} from ${firstHonda.car_year}`)
//  };
//  getCarHonda(inventory);


 //part2

 const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
 ];
 function sortCarInventoryByYear(years){
    const year=years.sort((a,b)=> (a.car_year < b.car_year ? -1:1))
    console.log(year);
 };
 sortCarInventoryByYear(inventory);


 //for self training i will try sorting other values.

 function trainSorting(ids){
    const id= ids.sort((a,b)=>(a.id>b.id?-1:1));
    console.log(id)
    
 };
 trainSorting(inventory);
  
 function trainSortingMore(models){
    const model= models.sort((a,b)=>(a.car_model > b.car_model?1 : -1));
    console.log(model)
 };
 trainSortingMore(inventory);

 
