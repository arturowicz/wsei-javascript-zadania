document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("remove").onclick = () => {
        const list = document.querySelector("ul.list");
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
});