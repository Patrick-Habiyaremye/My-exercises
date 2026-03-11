// ## Task Instructions

// 1. Define the following interfaces:
//    - `OrderItem`: represents a single item in an order. It should have:
//        - `name` (string)
//        - `price` (number)
//        - `quantity` (number)
//    - `Customer`: represents a customer. It should have:
//        - `name` (string)
//        - `loyaltyMember` (boolean)
//    - `Order`: represents an entire order. It should have:
//        - `id` (number)
//         - `customer` (Customer)
//        - `items` (an array of OrderItem)
// 2. Create two order objects, `order1` and `order2`, that follow the `Order` interface. Add the correct type annotation to each variable.
//    - Use the data provided in the starter code for each order.
// 3. Write a function named `calculateTotalRevenue` that:
//    - Accepts one parameter: an **array of Order** objects.
//    - Returns a **number** representing the sum of (`price * quantity`) for every item in every order.
//    - Ensure the parameter and return types are explicitly annotated.
// 4. Call `calculateTotalRevenue` with an array containing both `order1` and `order2`. Store the result in a variable.
// 5. Print the result to the console in the following format:  
//    `"Total Revenue: $" + total.toFixed(2)`

interface OrderItem{
    name: string,
    price: number,
    quantity: number
}
interface Customer{
    name: string,
    loyaltyMember: boolean
}
interface Order{
    id: number,
    customer: Customer,
    items: OrderItem[]
}
const order1: Order = {
    id: 101,
    customer: {
        name: "Alice",
        loyaltyMember: true
    },
    items: [
        { name: "Book", price: 15.99, quantity: 2 },
        { name: "Pen", price: 2.50, quantity: 5 }
    ]
};

const order2: Order = {
    id: 102,
    customer: {
        name: "Bob",
        loyaltyMember: false
    },
    items: [
        { name: "Notebook", price: 7.25, quantity: 3 }
    ]
};
function calculateTotalRevenue(orders: Order[]): number{
  let total = 0;
  for(let order of orders){
    for(let item of order.items){
        total += item.price * item.quantity
    }
  }
  return total
}
let result = calculateTotalRevenue([order1, order2]);
console.log("Total Revenue: $" + result.toFixed(2))