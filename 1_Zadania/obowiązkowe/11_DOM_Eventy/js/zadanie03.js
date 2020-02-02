document.addEventListener("DOMContentLoaded", () => {
    const counters = document.getElementsByClassName("counter");

    for (var i = 0; i < counters.length; i++) {
        document.getElementById(`button${i + 1}`).addEventListener('click', () => {
            const counter = counters[i];
            counter.innerHTML = +counter.innerHTML + 1;
        });
    }
});