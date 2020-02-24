//Part 1
//Q.1 Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM has loaded. 
document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM fully loaded and parsed");
  });

//Q.2 Replace the text "Change me" with "Hello World!".
document.addEventListener("DOMContentLoaded", function(){
    let change = document.getElementById("change_heading");
    change.innerHTML = "Hello World!";
  });

//Q.3
document.addEventListener("DOMContentLoaded", function(){
    let selectBox = document.querySelector("section");
    selectBox.addEventListener("mouseover", function(event){
    boxSelected = document.querySelector(".selected");
    boxSelected.innerHTML = event.target.className;
  })

});

/* Q.4, 5 &  6. Create a new div element. Give your new div a class of purple
and style it so that it has a background color of purple. Append your new div
to the page to the section tag. 
*/
document.addEventListener("DOMContentLoaded", function(){
    let section = document.querySelector("section");
    let newDiv = document.createElement("div");
    newDiv.className = "purple";
    section.appendChild(newDiv);
  });

//Part 2
/* Q
Create a racing game with the two cars. When the race button is pressed,
the two cars should move across the screen until one of them is at the end of the screen.
When one of the blocks reaches the end - you should alert "winner!"
*/
document.addEventListener("DOMContentLoaded", function(){
    let button = document.querySelector("button");
    let car1 = document.querySelector(".car1");
    let car2 = document.querySelector(".car2");
    
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;
    
    function reset(car1, car2){}
})
