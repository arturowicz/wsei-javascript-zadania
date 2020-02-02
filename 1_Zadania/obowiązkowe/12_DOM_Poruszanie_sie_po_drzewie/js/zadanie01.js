document.querySelectorAll(".button").forEach(button => {
        button.onclick = function () {
            if (this.nextElementSibling) {
                const displayValue = this.nextElementSibling.style.display;
                this.nextElementSibling.style.display = displayValue === 'none' ? "block" : "none";
        }
    }
});
