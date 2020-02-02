document.addEventListener("DOMContentLoaded", () => {
    var systemSelector = document.querySelector("select.form-control");
    var images = [...document.querySelectorAll(".page-header img")];

    showImage(images.slice(), systemSelector.value === "Os X" ? "Apple" : systemSelector.value);

    systemSelector.onchange = (event) => {
        var imgs = images.slice();
        var imageName = event.target.value === "Os X" ? "apple" : event.target.value;
        showImage(imgs, imageName);
    };

    function showImage(imgs, name) {
        imgs = imgs || [];
        name = name || "";

        const imgIndex = imgs.findIndex(img => name.toLowerCase() === img.alt.toLowerCase());

        if (imgIndex > -1) {
            var imageToShow = imgs[imgIndex];
            imageToShow.style.display = "block";
            imgs.splice(imgIndex, 1);
            imgs.forEach(img => img.style.display = "none");
        }
    }
});