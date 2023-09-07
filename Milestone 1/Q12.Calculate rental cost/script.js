let calculateRentalCost = (days, carType) => {

    switch (carType) {
        case "Economy":
            console.log("Rental cost is : "+ 4000 * days);
            break;
        case "MidSize":
            console.log("Rental cost is : "+ 10000 * days);
            break;
        case "Luxury":
            console.log("Rental cost is : "+ 20000 * days);
            break;
        default:
            console.log("Invalid car Type");
            break;
    }
}

let days=10;
let carType = "MidSize"
calculateRentalCost(days , carType);

// output = 100000