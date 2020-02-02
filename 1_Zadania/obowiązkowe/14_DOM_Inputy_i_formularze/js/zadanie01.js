document.addEventListener("DOMContentLoaded", () => {
    var invoiceData = document.getElementById("invoiceData");
    var invoice = document.getElementById("invoice");

    invoiceData.style.display = invoice.checked ? "block" : "none";

    invoice.onclick = function () {
        invoiceData.style.display = this.checked ? "block" : "none";
    }
});