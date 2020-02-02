document.addEventListener("DOMContentLoaded", () => {
    const list1 = document.getElementById("list1");
    const list2 = document.getElementById("list2");

    document.querySelectorAll(".moveBtn").forEach(button => {
        button.onclick = function () {
                if (this.parentElement.parentElement === list1) {
                    list1.removeChild(this.parentElement);
                    list2.appendChild(this.parentElement);
                } else {
                    list2.removeChild(this.parentElement);
                    list1.appendChild(this.parentElement);
                }
            }
        });
});
