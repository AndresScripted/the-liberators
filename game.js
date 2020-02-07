$(document).ready(function(){
  $("#gridContainer > div").each(function(x){
    console.log($(this).offset());
    console.log($(this));
  })
  
  
  
  
  
  
  
  
  
  policeSpawn();
  
  
  
  
  
 function policeSpawn(){
   var newPoliceCord = Math.floor((Math.random()* 16));
   console.log(newPoliceCord);
   $("#newPoliceCord")
   
 } 
  
});
