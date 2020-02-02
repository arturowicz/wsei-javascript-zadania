document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    function getDatasInfo(elements) {
        const result = [];

        for (var i = 0; i < elements.length; i++) {
            result.push(elements[i].getAttribute('data-color'));
        }

        return result;
    }

    /* Zadanie 1 */
    console.log('homeElement : ', homeElement);
    console.log('childElements : ', childElements);
    for (var i = 0; i < childElements.length; i++) {
        const el = childElements[i];
        console.log(`\t${el.localName} : ${el.className}`)
    }

    console.log('banner : ', banner);
    console.log('blocks : ', blocks);
    for (var i = 0; i < blocks.length; i++) {
        const el = blocks[i];
        console.log(`\t${el.localName} : ${el.className}`);
    }

    console.log('links : ', links);
    for (var i = 0; i < links.length; i++) {
        const el = links[i];
        console.log(`\t${el.localName} : ${el.className}`);
    }

    // Zadanie 2
    for (var i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        console.log('innerHTML : ', block.innerHTML);
        console.log('outerHTML : ', block.outerHTML);

        block.innerHTML = "Nowa wartość diva o klasie blocks";
    }

    // Zadanie 3
    const mainFooter = document.getElementById('mainFooter');

    function getId(element) {
        return element.id;
    }

    // Zadanie 4
    function getTags(elements) {
        const result = [];
        for (var i = 0; i < elements.length; i++) {
            result.push(elements[i].localName);
        }
        return result;
    }

    // Zadanie 5
    function getClassInfo(element) {
        return element.className.split(' ');
    }

    console.log(getClassInfo(banner));

    // Zadanie 6
    const listItemsInsideNav = document.querySelectorAll("nav li");

    function setDataDirection(elements) {
        elements.forEach(el => {
            const dataAttr = el.getAttribute('data-direction');
            if (dataAttr == null) {
                el.setAttribute('data-direction', 'top');
            }
        });
    }

    setDataDirection(listItemsInsideNav);

});
