// ## Task Instructions

// 1. Define three interfaces representing different message types:
//    - `TextMessage` with properties: `type` (literal `"text"`), `content` (string)
//    - `ImageMessage` with properties: `type` (literal `"image"`), `url` (string), and an optional `caption` (string)
//    - `VideoMessage` with properties: `type` (literal `"video"`), `url` (string), `duration` (number)
// 2. Create a union type `ChatMessage` that can be any of the three interfaces.
// 3. Write a function named `formatMessage` that:
//    - Accepts a single parameter of type `ChatMessage`
//    - Returns a **string**
//    - Uses a type guard (preferably a `switch` statement on the `type` property) to determine the actual message type.
//    - Formats each type as follows:
//        - **Text**: `"Text: " + content`
//        - **Image**: If caption exists: `"Image [" + caption + "]: " + url`; otherwise: `"Image: " + url`
//        - **Video**: `"Video (" + duration + "s): " + url`
// 4. Call `formatMessage` three times with the following example messages:
//    - A text message: `{ type: "text", content: "Hello, world!" }`
//    - An image message with a caption: `{ type: "image", url: "<https://example.com/image.jpg>", caption: "Sunset" }`
//    - A video message: `{ type: "video", url: "<https://example.com/video.mp4>", duration: 120 }`
// 5. Print each formatted result using `console.log()` in the order given above.

interface TextMessage{
    type: "text",
    content: string
}
interface ImageMessage{
    type: "image",
    url: string,
    caption?: string
}
interface VideoMessage{
    type: 'video',
    url: string,
    duration: number
}

type ChatMessage = TextMessage | ImageMessage | VideoMessage

function formatMessage(message: ChatMessage): string{
    switch(message.type){
        case "text":
            return "Text: " + message.content
        case "image":
            if(message.caption){
                return "Image [" + message.caption + "]: " + message.url
            }
            return "Image " + message.url
        case "video":
            return "Video (" + message.duration + "s): " + message.url
    }
}

let textMsg: TextMessage = { type: "text", content:"Hello, world"}
let imageMsg: ImageMessage = {
    type:"image",
    url:"<https://example.com/image.jpg>",
    caption:"Sunset"
}
let videoMsg: VideoMessage ={
    type: "video",
    url: "<https://example.com/video.mp4",
    duration: 120
}

console.log(textMsg)
console.log(imageMsg)
console.log(videoMsg)