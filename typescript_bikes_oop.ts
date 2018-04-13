class Bike {
    constructor(public price: number, public max_speed: string, public miles = 0) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }
    displayInfo = function () {
        console.log("Name: " + this.price + ", Max Speed: " + this.max_speed + ", Miles: " + this.miles); 
    }
    ride = (times) => {
        for (var i = 0; i < times; i++){
            this.miles += 10;
            console.log("Riding")
        }
        return this;
    }
    reverse = (times) => {
        for (var i = 0; i < times; i++){
            this.miles -= 5;
            console.log("Reversing");
        }
        return this;
    }
}

// create 3 instances of Bike class
const bike1 = new Bike(200, "25mph");
const bike2 = new Bike(10, "20mph");
const bike3 = new Bike(20, "40mph");


// Have the first instance ride three times, reverse once and have it displayInfo().
bike1.ride(3).reverse(1).displayInfo();

// Have the second instance ride twice, reverse twice and have it displayInfo().
bike2.ride(2).reverse(2).displayInfo();

// Have the third instance reverse three times and displayInfo().
bike3.reverse(3).displayInfo();
