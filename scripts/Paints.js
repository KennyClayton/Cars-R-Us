import { getPaints, setPaints } from "./database.js"


//^ INSTRUCTION: Add an event listener that reacts to the customer choosing one of the options. When an option is chosen, use window.alert to display a message that says which option the user chose.
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paint") {
            //then set the interior state to that interior object within the orderBuilder object
            setPaints(parseInt(event.target.value))
        }
    }
)


//^ INSTRUCTION: In each of the modules, generate a <select> element that has child <option> elements as HTML representation of each object in the corresponding array in the database module.

//^ INSTRUCTION: build up the HTML for each select element. I'll use .map method here.
export const Paints = () => {
    const paints = getPaints();

    let html = "<h2>Paints</h2>"
    // Use .map() for converting objects to <li> elements
    // So an object (paint) comes into your function, and a string gets returned. 
    // That string goes into a new array.
    html += `<select id="paint">`
    html += `<option value="0">Choose your paint...</option>`
    // the first paint object gets inserted through the paint parameter below, then the second one, third one, etc to build up this drop-down menu with each paint as an option. The .map method loops through the array like a for...of loop
    const arrayOfPaints = paints.map( (paint) => {
        return `<option value="${paint.id}">${paint.color}</option>`
    }
)
    // this joins all of the objects created by the map method into what? a single string? 
    //& ?????????
    html += arrayOfPaints.join("")
    html += "</select>"
    return html
}
