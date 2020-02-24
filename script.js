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
