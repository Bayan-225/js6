
//2
const div = document.querySelector("#myDiv")

div.addEventListener("mouseover", function(){
    div.style.backgroundColor = "lightgreen";
});
div.addEventListener("mouseout", function(){
    div.style.backgroundColor = "pink";
});

//1
let clicks = 0;
    const clicksDisplay = document.getElementById("clicksDisplay");
    const button = document.getElementById("myButton");

    button.addEventListener("click", function() {
      clicks++;
      clicksDisplay.textContent = "Клики: " + clicks;
    });


//3 уже есть элемент с наведением :/
