
$(document).ready(function(){
  $("#helpButton").click(function(){
    alert("This game is about defending Hong Kong's democracy. The Objective is to keep the police away from the city hall of Hong Kong. Use the given protestors and place them on the grid to divert the police. To win you must survive 12 turns.");
    console.log("test");
  });
  
var slideIndex = 0;
carousel();


function carousel() {
    var i;
    var x = document.getElementsByClassName("gif");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1;}
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 1500);
}
  
});
