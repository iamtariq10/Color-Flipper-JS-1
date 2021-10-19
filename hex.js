let color=['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
let btn = document.getElementById('btn');
let span = document.getElementById('heading-span');
span.textContent='RGBA'





btn.addEventListener('click',function(){
    let hex="#";
    for (let i=0;i<6;i++){
    
        hex+=color[getRandomNumber()]
        
        
    }
  let change= document.body.style.backgroundColor=hex;
  span.textContent=change;
  span.style.color=change;


})


function getRandomNumber(){
    return  Math.floor( Math.random()*color.length);
        
        
    }
    