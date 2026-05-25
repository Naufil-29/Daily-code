// Create a generic interface named InventoryItem that represents the structure of any inventory item in your management system.

// The interface should:

// Use a generic type parameter T
// Have an id property of type number
// Have a quantity property of type number
// Have a details property of type T
// Create the following objects using your generic interface:

// bookItem of type InventoryItem<{ title: string; author: string }> with:
// id: 1
// quantity: 5
// details: { title: "TypeScript Guide", author: "John Doe" }
// electronicItem of type InventoryItem<{ brand: string; model: string }> with:
// id: 2
// quantity: 3
// details: { brand: "TechCorp", model: "X200" }
// clothingItem of type InventoryItem<{ size: string; color: string }> with:
// id: 3
// quantity: 10
// details: { size: "M", color: "Blue" }
// Print the following outputs:

// Print bookItem.id
// Print bookItem.quantity
// Print bookItem.details.title
// Print bookItem.details.author
// Print electronicItem.details.brand
// Print electronicItem.details.model
// Print clothingItem.details.size
// Print clothingItem.details.color

interface InventoryItem<T> { 
    id: number,
    quantity: number,
    details: T
};

type Book = { 
    title: string,
    author: string
};

type Electronic = { 
    brand: string,
    model: string
};

type BookItem = InventoryItem<Book>;
type ElectronicItem = InventoryItem<Electronic>;

const specificBook: BookItem = { 
    id: 100,
    quantity: 8,
    details: { 
        title: "Clean Code",
        author: "Robert Martin"
    }
};

const specificElectronic: ElectronicItem = { 
    id: 200,
    quantity: 4,
    details: { 
        brand: "Sony",
        model: "WH-1000XM4"
    }
};

const bookStore: BookItem[] = [ specificBook ];
const electronicStore: ElectronicItem[] = [ specificElectronic ];

const bookItem: InventoryItem<{ title: string; author: string }> = { 
    id: 1,
    quantity: 5,
    details: { 
        title: "TypeScript Guide",
        author: "John Doe"
    }
};

const electronicItem: InventoryItem<{ brand: string; model: string }> = { 
    id: 2,
    quantity: 3,
    details: { 
        brand: "TechCorp",
        model: "X200"
    }
};

const clothingItem: InventoryItem<{ size: string; color: string }> = { 
    id: 3,
    quantity: 10,
    details: { 
        size: "M",
        color: "Blue"
    }
};

function addItem <T>(inventory: InventoryItem<T>[], newItem: InventoryItem<T>): InventoryItem<T>[] { 
    const newInventory = inventory;
    newInventory.push(newItem);
    return newInventory;
};

function findItemById <T>(inventory:InventoryItem<T>[], id: number): InventoryItem<T> | undefined { 
    const foundItem = inventory.find((item) => id === item.id);
    return foundItem;
};

function getItemDetails (item: InventoryItem<any>): void { 
    if('title' in item.details){ 
        console.log(`Book: ${item.details.title} by ${item.details.author}`);
    }
    else if('brand' in item.details){ 
        console.log(`Electronic: ${item.details.brand} ${item.details.model}`);
    }
    else{
    console.log('Unknown item type');
    }
};

const testBook: InventoryItem<any> = { 
    id: 300,
    quantity: 6,
    details: { 
        title: "TypeScript Handbook",
        author: "Microsoft Team"
    }
};

const testElectronic: InventoryItem<any> = { 
    id: 400,
    quantity: 2,
    details: { 
        brand: "Dell",
        model: "XPS 13",
    }
};

const unknowItem: InventoryItem<any> = { 
    id: 500,
    quantity: 1,
    details: { 
        color: "Red",
        size: "Large"
    }
};

const anotherBook: BookItem = { 
    id: 101,
    quantity: 3,
    details: { 
        title: "Design Patterns",
        author: "Gang of Four"
    }
};

const expandedBookStore = addItem(bookStore, anotherBook);

const mixedBookInventory: InventoryItem<{ title: string; author: string }>[] = [ 
    {
     id: 10,
     quantity: 3,
     details: {
        title: "JavaScript Basics", 
        author: "Alice Brown"
        }
    },
    {
     id: 11,
     quantity: 7,
     details: {
        title: "React Fundamentals", 
        author: "Bob Wilson"
        }
    },
    {
     id: 12,
     quantity: 2,
     details: {
        title: "Node.js Guide", 
        author: "Carol Davis"
        }
    }
];

const mixedElectronicInventory: InventoryItem<{ brand: string; model: string }>[] = [ 
    {
     id: 20,
     quantity: 5,
     details: {
        brand: "Samsung",
        model: "Galaxy S23"
        }
    },
    {
     id: 21,
     quantity: 1,
     details: {
        brand: "Appel",
        model: "iPhone 15"
        }
    }
];

const bookInventory : InventoryItem<{ title: string; author: string }>[] = [ 
    bookItem
];

const newBook: InventoryItem<{title: string; author: string}> = { 
    id: 4,
    quantity: 2,
    details: { 
        title: "Advanced TypeScript", 
        author: "Jane Smith" 
    }
};

const updatedBookInventory = addItem(bookInventory, newBook);

const electronicInventory: InventoryItem<{brand: string; model: string}>[] = [ 
    electronicItem
];

const newElectronic: InventoryItem<{ brand: string; model: string }> = { 
    id: 5,
    quantity: 1 ,
    details: { 
        brand: "GadgetCorp", 
        model: "Z500" 
    }
};

const updatedElectronicInventory = addItem(electronicInventory, newElectronic);

// Print the required outputs
const result1 = findItemById(expandedBookStore, 100);
const result2 = findItemById(electronicStore, 200);
getItemDetails(testBook);
getItemDetails(testElectronic);
getItemDetails(unknowItem);
getItemDetails(result1!);
getItemDetails(result2!);