// Zadanie 0
var car = {
    brand: "Opel",
    color: "Red",
    numberOfKilometers: 0,
    printCarInfo: function () {
        console.log(`${this.color}, ${this.brand}, ${this.numberOfKilometers}km`)
    },
    drive: function (km) {
        this.numberOfKilometers += km;
    }
};

car.printCarInfo();
car.drive(10);
car.printCarInfo();

// Zadanie 1
car["controls"] = [];
car.newControl = function (control) {
    this.reviews.push(control);
};

car.getControls = function () {
    return this.controls;
}

// Zadanie 2
var stairs = {
    step: 0,
    up: function () {
        this.step++;
    },
    down: function () {
        this.step--;
    },
    printStep: function () {
        console.log(this.step);
    }
};
