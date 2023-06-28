import { getTechnologies, setTechnologies } from "./database.js"
const technologies = getTechnologies();


//^ INSTRUCTION: Add an event listener that reacts to the customer choosing one of the options. When an option is chosen, use window.alert to display a message that says which option the user chose.
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "technology") {
            //then set the "technologies" state to that "technologies" object within the orderBuilder object
            setTechnologies(parseInt(event.target.value))
        }
    }
)

// below for window alert
// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.id === "technology") {
//             let matchingTechnology = ""
//             for (const technology of technologies) {
//                 if (parseInt(event.target.value === technology.id)) {
//                     matchingTechnology += technology.technology
//                 }
//             }
//             window.alert(`You chose ${matchingTechnology}...meep morp...excellent decision`)
//             // below code is to set the state
//             //  setWheel(parseInt(event.target.value))
//         }
//     }
// )


//^ INSTRUCTION: In each of the modules, generate a <select> element that has child <option> elements as HTML representation of each object in the corresponding array in the database module.

//^ INSTRUCTION: build up the HTML for each select element. I'll use for...of loop method here.
export const Technologies = () => {
    let html = "<h2>Technologies</h2>"
    // Use .map() for converting objects to <li> elements
    // So an object (technology) comes into your function, and a string gets returned. 
    // That string goes into a new array.
    html += `<select id="technology">`
    html += `<option value="0">Choose your technology...</option>`

    for (const technology of technologies) {
        html += `<option value="${technology.id}">${technology.technology}</option>`
    }

    html += "</select>"
    return html
}
