document.querySelectorAll(".listContainer").forEach(element => {
        element.onmouseover = function () {
            var list = this.querySelectorAll("li");
            list[0].style.backgroundColor = "red";
            list[list.length - 1].style.backgroundColor = "blue";

            for (var i = 0; i < list.length; i++) {
                if (i !== 0 && i !== (list.length - 1)) {
                    list[i].style.backgroundColor = "green";
                }
            }
        }
    });