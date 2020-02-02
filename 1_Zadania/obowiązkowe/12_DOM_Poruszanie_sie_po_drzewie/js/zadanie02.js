document.querySelectorAll(".button").forEach(button =>
    button.onclick = function () {
            this.parentElement.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        }
    );
