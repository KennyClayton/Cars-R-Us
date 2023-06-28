const database = {
    paints: [
        { id: 1, color: "Silver", price: 500 },
        { id: 2, color: "Midnight Blue", price: 710 },
        { id: 3, color: "Firebrick Red", price: 965 },
        { id: 4, color: "Spring Green", price: 965 }
    ],
    interiors: [
        { id: 1, type: "Beige Fabric", price: 405 },
        { id: 2, type: "Charcoal Fabric", price: 782 },
        { id: 3, type: "White Leather", price: 1470 },
        { id: 4, type: "Black Leather", price: 1997 },
    ],
    technologies: [
        { id: 1, technology: "Basic Package", price: 12.42 },
        { id: 2, technology: "Navigation Package", price: 736.4 },
        { id: 3, technology: "Visibility Package", price: 1258.9 },
        { id: 4, technology: "Ultra Package", price: 795.45 },
    ],
    wheels: [
        { id: 1, wheel: "17-inch Pair Radial", price: 12.42 },
        { id: 2, wheel: "17-inch Pair Radial Black", price: 736.4 },
        { id: 3, wheel: "18-inch Pair Spoke Silver", price: 1258.9 },
        { id: 4, wheel: "18-inch Pair Spoke Black", price: 795.45 },        
    ],
    
    
    // this is where the temporarily stored selections are moved ... into permanent state? Remember that initially the user selections are stored in orderBuilder as the user selected them in the browser. Then they are moved here once a submit order button or similar is clicked. 
    customOrders: [
        {
            id: 1,
            paintsId: 2,
            interiorsId: 3,
            technologiesId: 2,
            wheelsId: 3,
            timestamp: 1614659931693
        }
    ],


// below we will store user input in this data storage unit (key) called orderBuilder
// this is called a "state key"
    orderBuilder: {
        
    },
}

//* EXPLANATION: What is meant by tracking the transient state with each choice the user makes?
//* "...you should define a function that sets the corresponding value in the orderBuilder object. This is done to track the transient state of the user's choices as they make selections for their car."
//* In other words, when the user clicks an option, it is not yet permanent or stored anywhere unless we create these functions below to "catch" those selections. The state of their selections is transient, meaning it can change ... it's not permanent yet.

// below we are passing the "id" as a parameter and using it to equal the paint's Id from the oderBuilder's array. Remember that the orderBuilder array is created by the user's input as they select each option for their car.
// so these functions, in short, do what? 
    // They use data received from user input (from orderBuilder object above) and store that data as a new object....so each new object will have a paint, interior, technology and wheel property chosen by the user. 
export const setPaints = (id) => {
    //* below, JS will store (for example) the first wheel option/object inside of the database's orderBuilder object and will give it a property called paintId and its value will be the id number corresponding to the one selected by the user. So if the first tire option has an id of "1", then setPaints will send the first tire object to the orderBuilder object for temp storage
    database.orderBuilder.paintsId = id
}
// so, again, in short, these setter functions will send user-selected objects to the empty orderBuilder with each click of the user's mouse. In this case below, the user clicks interior option 1.
export const setInteriors = (id) => {
    database.orderBuilder.interiorsId = id
}
export const setTechnologies = (id) => {
    database.orderBuilder.technologiesId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}

// How do you get these database arrays available for use in this project? Export them as functions. Make the functions return the mapped version of these arrays
//* What is a mapped version of the array? As chatGPT put it: "It's essentially creating a shallow copy of the original object."
// Why? To protect the integrity of the original database, you use copies of the database to work with
export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}



// the below function will take all the currently selected options from the user and store those choices, in newOrder variable, create an order number, etc.
// Basically this changes the data to a permanent state once the create custom order button is clicked.
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1 // I'm guessing the minus one is to take away this order itself from the tally. so if this order was 256, then we want to only start at 255 when creating our order number below.
    newOrder.id = database.customOrders[lastIndex].id + 1 // this will create the new order id using the next custom order number in line plus 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}