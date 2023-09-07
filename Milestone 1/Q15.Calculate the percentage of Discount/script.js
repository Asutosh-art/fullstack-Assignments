let percentageOfTheDiscount = (products) => {
    let discountPercentage = [];
    for (let i = 0;i<products.length;i++){
        let product = products[i];
        discountPercentage.push(
            Math.floor(
                ((product.originalPrice - product.discountPrice)/
                product.originalPrice)*100
            )+"%"
        );
    }
    return discountPercentage;
}
let products = [
    {originalPrice: 50 , discountPrice : 30},
    {originalPrice: 30 , discountPrice : 15},
    {originalPrice: 150 , discountPrice : 120},
    {originalPrice: 80 , discountPrice : 50},
]
console.log(percentageOfTheDiscount(products))

// Output = [ '40%', '50%', '20%', '37%' ]