// Task Instructions
// Create a playerName variable with the explicit type string and set it to Riven.
// Create a playerLevel variable with the explicit type number and set it to 7.
// Create a isPremiumMember variable with the explicit type boolean and set it to true.
// Print the three variables using console.log(), one per line.
// Print them in this exact order:
// playerName
// playerLevel
// isPremiumMember

// let playerName: string = "Riven";
// let playerLevel: number = 7;
// let isPremiumMember: boolean = true;

// console.log(playerName);
// console.log(playerLevel);
// console.log(isPremiumMember);

// ## Task 2 Instructions

// 1. Create a `songs` array with the explicit type `string[]`.
// 2. Put these three song names into the array in this order:
 //   - `Intro`
 //   - `Echo`
 //   - `Sunrise`
//3. Create a `listener` object with this type:
  //  - `name` is a `string`
  //  - `age` is a `number`
  //  - `isPremium` is a `boolean`
// 4. Give the object these values:
  //  - `name`: `Maya`
  //  - `age`: `22`
  //  - `isPremium`: `true`
// 5. Print the following in this exact order:
   // - the first song in the array
  //  - the third song in the array
  //  - the listener's `name`
  //  - the listener's `isPremium` value

  let songs: string[]=[
    "Intro",
    "Echo",
    "Sunrise"
  ]
  type Listener = {
    name: string,
    age: number,
    isPremium: boolean
  }
let listener: Listener = {
    name: "Maya",
    age: 22,
    isPremium: true
}
console.log(songs[0]);
console.log(songs[2]);
console.log(listener.name)
console.log(listener.isPremium)
