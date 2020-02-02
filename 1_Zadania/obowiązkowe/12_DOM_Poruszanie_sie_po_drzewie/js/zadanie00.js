// 1
var first = document.querySelector(".first").firstElementChild.children[2];

// 2
var second = document.querySelector("#second").parentElement.children[3];

// 3
var grandpa = document.querySelector("[data-ex=third]").parentElement.parentElement;
var lastChild = grandpa.children[grandpa.children.length - 1];
var firstChild = lastChild.firstElementChild;
var middleChild = firstChild.children[Math.floor(firstChild.children.length / 2)];

// 4
var forth = document.querySelector("div.forth").parentElement.querySelector("article").querySelectorAll("p")[1];
