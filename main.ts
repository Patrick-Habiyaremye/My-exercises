// ## Task Instructions

// 1. Define three interfaces for different task types, each with a discriminant `type` field:
//    - `CodingTask`:
//        - `type` (literal `"coding"`)
//        - `id` (number)
//        - `status` (string)
//        - `language` (string)
//        - `linesOfCode` (number)
//    - `TestingTask`:
//        - `type` (literal `"testing"`)
//        - `id` (number)
//        - `status` (string)
//        - `framework` (string)
//        - `testCases` (number)
//    - `DocumentationTask`:
//        - `type` (literal `"doc"`)
//        - `id` (number)
//        - `status` (string)
//        - `format` (string, e.g., "markdown", "pdf", "html")
//        - `pages` (number)
// 2. Create a union type `Task` that can be any of the three interfaces.
// 3. Implement a function `formatTaskSummary(task: Task): string` that:
//    - Uses a type guard (e.g., `switch` on `task.type`) to determine the specific task type.
//    - Returns a formatted string according to the following rules:
//        - **Coding**: `"Coding task #<id> in <language>: <status>"`
//        - **Testing**: `"Testing task #<id> with <framework>: <testCases> test cases, status: <status>"`
//        - **Documentation**: `"Documentation task #<id> (<format>): <pages> pages, status: <status>"`
// 4. Write a generic function `filterTasksByStatus<T extends Task>(tasks: T[], status: string): T[]` that:
//    - Returns a new array containing only the tasks whose `status` matches the provided status string.
//    - Preserves the original task types in the returned array.
//    - Does not modify the input array.
// 5. Use the provided `tasks` array (see starter code) which contains a mix of all three task types.
// 6. Call `filterTasksByStatus` with the `tasks` array and status `"pending"`. Store the result.
// 7. Iterate over the filtered tasks and for each, call `formatTaskSummary` and print the result using `console.log()`

interface CodingTask{
    type: "coding",
    id: number,
    status: string,
    language: string,
    linesOfCode: number
}
interface TestingTask{
    type: "testing",
    id: number,
    status: string,
    framework: string,
    testCases: number
}
interface DocumentationTask{
    type: "doc",
    id: number,
    status: string,
    format: string,
    pages: number
}

type Task = CodingTask | TestingTask | DocumentationTask

function formatTaskSummary(task: Task): string{
    switch(task.type){
        case "coding":
            return `Coding task #${task.id} in ${task.language}: ${task.status}`
        case "testing":
            return `Testing task #${task.id} with ${task.framework}: ${task.testCases} test cases, status: ${task.status}`
        case "doc":
            return `Documentation task #${task.id} (${task.format}): ${task.pages} pages, status: ${task.status}`
    }
}

const tasks: Task[] = [
    { type: "coding", id: 1, status: "pending", language: "TypeScript", linesOfCode: 150 },
    { type: "testing", id: 2, status: "in-progress", framework: "Jest", testCases: 25 },
    { type: "doc", id: 3, status: "pending", format: "markdown", pages: 5 },
    { type: "coding", id: 4, status: "completed", language: "Python", linesOfCode: 200 },
    { type: "testing", id: 5, status: "pending", framework: "Mocha", testCases: 10 }
];

function filterTasksByStatus<T extends Task>(tasks: T[], status: string){
    return tasks.filter(task => task.status === status)
}

let pendingTask = filterTasksByStatus(tasks, "pending")
for(let task of pendingTask){
    console.log(formatTaskSummary(task))
}