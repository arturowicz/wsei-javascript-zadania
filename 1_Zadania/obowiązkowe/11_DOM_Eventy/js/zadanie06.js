document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("box").addEventListener("mousemove", (mouseOverEvent) => {
        const globalX = document.getElementById("globalX");
        const globalY = document.getElementById("globalY");
        const localX = document.getElementById("localX");
        const localY = document.getElementById("localY");

        const rect = mouseOverEvent.target.getBoundingClientRect();

        globalX.innerHTML = mouseOverEvent.x;
        globalY.innerHTML = mouseOverEvent.y;
        localX.innerHTML = mouseOverEvent.x - rect.left;
        localY.innerHTML = mouseOverEvent.pageY - rect.top;
    })
});