import { getWheels, setWheels } from "./database.js"
const wheels = getWheels();


//^ INSTRUCTION: Add an event listener that reacts to the customer choosing one of the options. When an option is chosen, use window.alert to display a message that says which option the user chose.
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") {
            //then set the "wheels" state to that "wheels" object within the orderBuilder object
            setWheels(parseInt(event.target.value))
        }
    }
)

// below for window alert
// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.id === "wheel") {
//             let matchingWheel = ""
//             for (const wheel of wheels) {
//                 if (parseInt(event.target.value) === wheel.id) {
//                     matchingWheel += wheel.wheel
//                 }
//             }
//             window.alert(`You chose ${matchingWheel}...nice`)
//             // below code is to set the state
//             //  setWheel(parseInt(event.target.value))
//         }
//     }
// )


//^ INSTRUCTION: In each of the modules, generate a <select> element that has child <option> elements as HTML representation of each object in the corresponding array in the database module.

//^ INSTRUCTION: build up the HTML for each select element. I'll use .map method here.
export const Wheels = () => {
    let html = "<h2>Wheels</h2>"
    // Use .map() for converting objects to <li> elements
    // So an object (wheel) comes into your function, and a string gets returned. 
    // That string goes into a new array.
    html += `<select id="wheel">`
    html += `<option value="0">Choose your wheels...</option>`
    // the first wheel object gets inserted through the wheel parameter below, then the second one, third one, etc to build up this drop-down menu with each wheel as an option. The .map method loops through the array like a for...of loop
    const arrayOfWheels = wheels.map( (wheel) => {
        return `<option value="${wheel.id}">${wheel.wheel}</option>`
    }
)
    // this joins all of the objects created by the map method into what? a single string? 
    //& ?????????
    html += arrayOfWheels.join("")
    html += "</select>"
    return html
}
