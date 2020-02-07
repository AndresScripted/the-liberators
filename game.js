$(document).ready(function(){
  $("#gridContainer > div").each(function(x){
    console.log($(this).offset());
    console.log($(this));
  })
  
  
  let isOccupied = [8,13,18];
  policeSpawn();
  
  
  
  
  
 function policeSpawn(){
   var numbersInLetters = ["one", "two", "three"]
   var newPoliceCord = Math.floor((Math.random()* 16));
   newPoliceCord = newPoliceCord.toString();
   console.log(newPoliceCord);
   var actualPoliceCoord= numbersInLetters[newPoliceCord - 1];
   // $("#"+actualPoliceCoord+"").append("<img class='policeImg' src='https://cdn.glitch.com/659a004c-b854-4d83-a61d-d6d9c501eb61%2FUntitled8_20200207124135.png?v=1581108196104'>");
   
 } 
  
var settimmer = 0;
        $(function(){
                window.setInterval(function() {
                    var timeCounter = $("b[id=show-time]").html();
                    var updateTime = eval(timeCounter)- eval(1);
                    $("b[id=show-time]").html(updateTime);

                    if(updateTime == 0){
                        window.location = ("redirect.php");
                    }
                }, 1000);

        });

function redirect () {
    this.html("Game Over! Redirecting.");
    window.location = "endInfo.html";
}
  
});
