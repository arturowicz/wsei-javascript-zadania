document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementsByClassName("box");

    for (var i = 0; i < list.length; i++) {
        list[i].onclick = function () {
            this.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        }
    }
});