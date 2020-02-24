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
