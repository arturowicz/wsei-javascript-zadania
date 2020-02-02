document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.getElementsByClassName("counter")[0];

    for (var i = 0; i < 3; i++) {
        document.getElementById(`button${i + 1}`).addEventListener('click', () => {
            counterElement.innerHTML = +counterElement.innerHTML + 1;
        });
    }
});