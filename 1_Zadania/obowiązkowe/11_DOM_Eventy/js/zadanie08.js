document.addEventListener("DOMContentLoaded", () => {
    const windowWidth = document.getElementById("windowWidth");
    const windowHeight = document.getElementById("windowHeight");

    windowWidth.innerHTML = window.innerWidth;
    windowHeight.innerHTML = window.innerHeight;

    window.onresize = (event) => {
        windowWidth.innerHTML = event.target.innerWidth;
        windowHeight.innerHTML = event.target.innerHeight;
    }
});
