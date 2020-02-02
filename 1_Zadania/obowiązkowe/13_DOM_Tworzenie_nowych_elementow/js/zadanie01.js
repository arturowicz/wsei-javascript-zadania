var counter = 0;

var button = document.getElementsByClassName("button")[0].addEventListener("click", function(){
    const ul = document.getElementsByClassName("menu")[0];
    const li = document.createElement("li");
    
    counter++;
    
    li.appendChild(document.createTextNode(counter));
    ul.appendChild(li);
});