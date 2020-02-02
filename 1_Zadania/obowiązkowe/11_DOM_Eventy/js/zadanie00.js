document.querySelectorAll(".parent").forEach(element => {
    element.addEventListener("mouseover", (event) => {
            const content = event.target.children;
            for (var i = 0; i < content.length; i++) {
                content[i].style.display = "block";
            }
        });

        element.addEventListener("mouseleave", () => hideChildrenElement());

        function hideChildrenElement() {
            const parents = this.document.querySelectorAll(".parent");
            for (var i = 0; i < parents.length; i++) {
                const parent = parents[i];
                if (parent == element) {
                    parent.children[0].style.display = "none";
                }
            }
        }
});