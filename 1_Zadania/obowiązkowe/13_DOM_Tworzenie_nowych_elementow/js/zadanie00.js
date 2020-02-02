document.querySelectorAll(".deleteBtn").forEach(button => {
    button.onclick = function () {
            this.parentElement.parentElement.remove();
        }
    });