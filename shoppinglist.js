const groceryItems = [
    {
        id: 1,
        item: "eggs",
        price: 3,
        area: "fridge"
    },
    {
        id: 2,
        item: "coffee",
        price: 8,
        area: "shelf"
    },
    {
        id: 3,
        item: "rice",
        price: 30,
        area: "pantry"
    },
    {
        id: 4,
        item: "peaches",
        price: 4,
        area: "shelf"
    },
    {
        id: 5,
        item: "chicken",
        price: 7,
        area: "fridge"
    },
    {
        id: 6,
        item: "water",
        price: 3.99,
        area: "pantry"
    },
    {
        id: 7,
        item: "broccoli",
        price: 4.99,
        area: "fridge"
    }
]

const addToShoppingList = (groceryItemsPlus) => {
    const lastIndex = groceryItems.length - 1
    const lastItemId = groceryItems[lastIndex].id
    const newId = lastItemId + 1
    
    groceryItemsPlus.id = newId
    groceryItems.push(groceryItemsPlus)
}

const iceCream =
    {
        item: "ice cream",
        price: 4.99,
        area: "freezer",
    }

const chips = {
    item: "chips",
    price: 5.99,
    area: "shelf"
}

const squid = {
    item: "squid",
    price: 11,
    area: "freezer"
}

const soda = {
    item: "dr. pepper",
    price: 8.99,
    area: "fridge"
}

const creamer = {
    item: "heavy cream",
    price: 5.99,
    area: "fridge"
}

addToShoppingList(iceCream)
addToShoppingList(chips)
addToShoppingList(squid)
addToShoppingList(soda)
addToShoppingList(creamer)

for (const groceryItem of groceryItems) {
    if(groceryItem.price >= 8) {
        console.log(groceryItem.item)
    }
} 