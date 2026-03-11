// ## Task Instructions

// 1. Define a union type named `Notification` that can be either:
//    - A **string** (simple message)
//    - An **object** with two properties: `title` (string) and `body` (string)
// 2. Write a function named `formatNotification` that:
//     - Accepts a single parameter of type `Notification`
//     - Returns a **string**
// 3. Inside the function, use type guards to determine the actual type of the input:
//    - Use `typeof` to check if it's a string.
//    - If it's an object, check for the presence of the `title` property (e.g., using the `in` operator) to confirm it's the object form.
// 4. Based on the type:
//    - If it's a string, return: `"Notification: " + message`
//    - If it's an object, return: `title + ": " + body`
// 5. Call `formatNotification` twice:
//    - First with a simple string: `"Hello, world!"`
//    - Second with an object: `{ title: "URGENT", body: "Server is down" }`
// 6. Print the results of both calls using `console.log()`.

type Notifications = string |{
    title: string
    body: string
}
function formatNotification(notification: Notifications): string{
    if(typeof notification === "string"){
        return `Notification: ${notification}`
    }else
        return `${notification.title}: ${notification.body}`
}
console.log(formatNotification("Hello, world"));
console.log(formatNotification({title: "URGENT", body: "Server is down"}))