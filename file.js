let btn = document.getElementById('btn');
let color = ['red','green','blue','cyan','orange','grey','purple'];
let span = document.getElementById('heading-span');
span.textContent='White'



btn.addEventListener('click',function(){


 let change= document.body.style.backgroundColor=color[getRandomNumber()];
  span.textContent=change.toUpperCase();
  span.style.color=change;
  
})


function getRandomNumber(){
return  Math.floor( Math.random()*color.length);
    
    
}


