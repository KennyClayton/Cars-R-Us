// we'll import all the modules for car options into this module

import { addCustomOrder } from "./database.js"
import { Interiors } from "./Interiors.js"
import { Orders } from "./Orders.js"
import { Paints } from "./Paints.js"
import { Technologies } from "./Technologies.js"
import { Wheels } from "./Wheels.js"

document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target
        if (itemClicked.id.startsWith("orderButton")) {
            // if the user clicks a button, what do we want to happen?
            //^ INSTRUCTION: Invoke the addCustomOrder function when it is clicked
            addCustomOrder()
        }
    }
)

// //^ INSTRUCTION: Return an <h2> heading from each module's component function to verify that each one is imported and returning a value.
// export const Wheels = () => {
//     return `<h2>Wheels</h2>`
// }

// export const Technologies = () => {
//     return `<h2>Technologies</h2>`
// }

// export const Paints = () => {
//     return `<h2>Paints</h2>`
// }

// export const Interiors = () => {
//     return `<h2>Interiors</h2>`
// }


//^ INSTRUCTION: Import those four modules into the module you created in step one and interpolate them in the appropriate places in the overall HTML structure.
export const CarsRUs = () => {
    return `
        <h1>Cars 'R Us</h1>

        <article class="choices">
            <section class="choices__wheels options">
                ${Wheels()}
            </section>
            <section class="choices__technologies options">
                ${Technologies()}
            </section>
            <section class="choices__paints options">
                ${Paints()}
            </section>
            <section class="choices__interiors options">
                ${Interiors()}
            </section>
        </article>

        <article>
            <button id="orderButton">Order My Car</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}