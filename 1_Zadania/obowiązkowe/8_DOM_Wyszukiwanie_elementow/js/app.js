document.addEventListener("DOMContentLoaded", function () {
    // Zadanie 0
    const element = document.getElementsByClassName("title")[0];
    getDataAnimation(element);


    // Zadanie 1
    // 1
    const home1 = document.getElementById('home');
    const home2 = document.querySelector('#home');

    // 2
    const firstLiChild = document.querySelector('li:first-child[data-direction]');

    // 3
    const firstChild = document.querySelector("div.block:first-child");

    // Zadanie 2
    // 1
    const navLi = document.querySelectorAll('nav li');
    console.log('navLi : ', navLi.length);

    // 2
    const divP = document.querySelectorAll('div p');
    console.log('divP : ', divP.length);

    // 3
    const articleDiv = document.querySelectorAll('article div');
    console.log('divsInsideArticle : ', articleDiv.length);

    // Zadanie 3
    // 1
    const articleClassFirst = document.querySelectorAll('article[class=first]');
    console.log('articleClassFirst : ', articleClassFirst);

    // 2
    for (var i = 0; i < articleClassFirst.length; i++) {
        const h1 = articleClassFirst[i].getElementsByTagName("h1");
        console.log(`${h1.length}`)
    }
});

function getDataAnimation(el) {
    return el.getAttribute('data-animation');
}
