function billSplitter(dishCost , numPeople){
    let totalCost = 0;
    for (let cost of dishCost) {
        totalCost += cost;
    }
    const costPerPerson = totalCost/numPeople;
    return{
        totalbill:totalCost,
        billperPerson:costPerPerson,
    }
}

const dishCost =[10,15,20,5];
const numPeople = 5;
const bill = billSplitter(dishCost , numPeople);
console.log(bill)

// ouput = { totalbill: 50, billperPerson: 10 }