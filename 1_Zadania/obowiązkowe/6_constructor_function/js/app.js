var Basket = function () {
    this.products = [];
    this.summary = 0;

    this.addProduct = function (name, price) {
        this.products.push({name: name, price: price});
        this.summary += price;
    };

    this.showBasket = function () {
        for (var i = 0; i < this.products.length; i++) {
            const product = this.products[i];

            console.log(`${product.name}  ${product.price}`);
        }
        console.log(`Summary:  ${this.summary}`)
    }
};