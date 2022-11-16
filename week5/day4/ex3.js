let allBoldItems;
function getBoldItems(){
   allBoldItems= document.getElementsByTagName('strong');
}

function highlight(){
   getBoldItems();
      for( boldItem of allBoldItems ){
      console.log(boldItem);
      boldItem.style.color="blue"
      }
      
}


function returnNormal(){
   getBoldItems();
      for( item of allBoldItems ){
      console.log(item);
      item.style.color="black"
      }
   }

   let zoom= document.querySelector('p')
   console.log(zoom)
   zoom.addEventListener( 'mouseover' ,highlight);
   zoom.addEventListener( 'mouseout' ,returnNormal);

   


   
   

   