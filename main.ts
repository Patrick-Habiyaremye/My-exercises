// ## Task Instructions

// 1. Define an interface named `Product` that describes an object with the following properties:
//    - `name` (string)
//    - `price` (number)
//    - `quantity` (number)
// 2. Create at least two objects that follow the `Product` interface. Use the provided variable names `product1` and `product2` and add the appropriate type annotation so TypeScript knows they must conform to `Product`.
// 3. Write a function named `getProductInfo` that:
//    - Accepts a single parameter of type `Product`
//    - Returns a **string** in the format: `"Product: [name], Total Cost: $[total]"`
//        - `[total]` should be `price * quantity` formatted to two decimal places (e.g., `1999.98`).
// 4. Call the `getProductInfo` function for each product and print the result using `console.log()`.

interface Product{
    name: string,
    price: number,
    quantity: number
}
const product1: Product = {
    name: "Laptop",
    price: 999.99,
    quantity: 2
};

const product2: Product = {
    name: "Mouse",
    price: 25.5,
    quantity: 5
};
function getProductInfo(product: Product): string {
    let total = product.price * product.quantity
    return `"Product: ${product.name}, Total cost: ${total.toFixed(2)}"`
}
console.log(getProductInfo(product1));
console.log(getProductInfo(product2));