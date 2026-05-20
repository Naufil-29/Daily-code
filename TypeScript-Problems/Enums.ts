// Create a numeric enum named UserRole with three members: Admin, Editor, and Viewer.

// Create three variables to demonstrate the enum values:

// adminRole of type UserRole and assign it UserRole.Admin
// editorRole of type UserRole and assign it UserRole.Editor
// viewerRole of type UserRole and assign it UserRole.Viewer
// Print the following outputs on separate lines:

// Print the value of adminRole
// Print the value of editorRole
// Print the value of viewerRole
// Print the numeric value of UserRole.Admin
// Print the numeric value of UserRole.Editor
// Print the numeric value of UserRole.Viewer


enum UserRole { 
    Admin,
    Editor,
    Viewer
};

const adminRole: UserRole = UserRole.Admin;
const editorRole: UserRole = UserRole.Editor;
const viewerRole: UserRole = UserRole.Viewer;
// Print the required outputs
console.log(adminRole);
console.log(editorRole);
console.log(viewerRole);
console.log(UserRole.Admin);
console.log(UserRole.Editor);
console.log(UserRole.Viewer);


// Create a function named checkPermissions that takes one parameter:

// role of type UserRole (using the enum from the previous lesson)
// The function should:

// Check the role value and print different messages based on the role
// If the role is UserRole.Admin, print "Full access granted"
// If the role is UserRole.Editor, print "Edit access granted"
// For any other role, print "View access only"
// Have a return type of void
// You are provided with the following from the previous challenge:

// The UserRole enum with Admin, Editor, and Viewer members
// Variables: adminRole, editorRole, and viewerRole
// Create a variable named currentUser of type UserRole and assign it UserRole.Editor.

// Create a variable named guestUser of type UserRole and assign it the numeric value 2.

// Print the following outputs by calling your checkPermissions function:

// Call checkPermissions with adminRole
// Call checkPermissions with currentUser
// Call checkPermissions with guestUser
// Call checkPermissions with UserRole.Admin
// Call checkPermissions with the numeric value 0


// TODO: Write your code here
// Create the checkPermissions function
function checkPermissions(role: UserRole):void { 
    if(role === UserRole.Admin){
        console.log("Full access granted");
    }
    else if(role === UserRole.Editor){ 
        console.log("Edit access granted");
    }
    else{ 
        console.log("View access only");
    }
}

// Create currentUser variable
const currentUser: UserRole = UserRole.Editor;
// Create guestUser variable
const guestUser: UserRole = 2;

// Call checkPermissions with the required parameters
checkPermissions(adminRole);
checkPermissions(currentUser);
checkPermissions(guestUser);
checkPermissions(UserRole.Admin);
checkPermissions(0);




// Create a string enum named Direction with four members:

// Up initialized to "UP"
// Down initialized to "DOWN"
// Left initialized to "LEFT"
// Right initialized to "RIGHT"
// Create four variables to demonstrate the enum values:

// upDirection of type Direction and assign it Direction.Up
// downDirection of type Direction and assign it Direction.Down
// leftDirection of type Direction and assign it Direction.Left
// rightDirection of type Direction and assign it Direction.Right
// Print the following outputs on separate lines:

// Print the value of upDirection
// Print the value of downDirection
// Print the value of leftDirection
// Print the value of rightDirection
// Print the string value of Direction.Up
// Print the string value of Direction.Down

enum Direction { 
    Up = "UP",
    Down = "DOWN",
    Right = "RIGHT",
    Left = "LEFT"
};

const upDirection: Direction = Direction.Up;
const downDirection: Direction = Direction.Down;
const leftDirection: Direction = Direction.Left;
const rightDirection: Direction = Direction.Right;


console.log(upDirection);
console.log(downDirection);
console.log(leftDirection);
console.log(rightDirection);
console.log(Direction.Up);
console.log(Direction.Down);


// You are provided with the following from the previous challenge:

// The Direction string enum with Up, Down, Left, and Right members
// Variables: upDirection, downDirection, leftDirection, and rightDirection
// Create a function named move that takes one parameter:

// direction of type Direction
// The function should:

// Print a message in the format "Moving [direction]..." where [direction] is the lowercase version of the enum's string value
// Have a return type of void
// Create a function named getMovementDescription that takes one parameter:

// direction of type Direction
// The function should:

// Return a string describing the movement based on the direction:
// For Direction.Up: return "Going upward"
// For Direction.Down: return "Going downward"
// For Direction.Left: return "Turning left"
// For Direction.Right: return "Turning right"
// Have an explicit return type of string
// Create a variable named playerDirection of type Direction and assign it Direction.Up.

// Print the following outputs:

// Call move with Direction.Up
// Call move with leftDirection
// Call move with playerDirection
// Print the result of calling getMovementDescription with Direction.Down
// Print the result of calling getMovementDescription with rightDirection
// Call move with Direction.Right

// TODO: Write your code here
// Create the move function that takes a Direction parameter and prints "Moving [direction]..."
function move(direction: Direction): void { 
    console.log(`Moving ${direction.toLowerCase()}...`);
};




// Create the getMovementDescription function that returns movement descriptions
function getMovementDescription(direction: Direction): string { 
    if(direction === "UP"){ 
        return "Going upward"
    }
    else if(direction === "DOWN"){ 
        return "Going downward"
    }
    else if(direction === "LEFT"){ 
        return "Turning left"
    }
    else{ 
        return "Turning right"
    }
}



// Create the playerDirection variable
const playerDirection: Direction = Direction.Up;
move(Direction.Up);
move(leftDirection);
move(playerDirection);
console.log(getMovementDescription(Direction.Down));
console.log(getMovementDescription(rightDirection));
move(Direction.Right);



// Create a heterogeneous enum named ResponseCode that mixes string and numeric values:

// Success initialized to 200
// Error initialized to "ERROR"
// NotFound initialized to 404
// Timeout initialized to "TIMEOUT"
// Create a function named handleResponse that takes one parameter:

// code of type ResponseCode
// The function should:

// Check the response code and print different messages based on the value
// If the code is ResponseCode.Success, print "Request successful"
// If the code is ResponseCode.Error, print "General error occurred"
// If the code is ResponseCode.NotFound, print "Resource not found"
// If the code is ResponseCode.Timeout, print "Request timed out"
// Have a return type of void
// Create four variables to demonstrate the enum values:

// successCode of type ResponseCode and assign it ResponseCode.Success
// errorCode of type ResponseCode and assign it ResponseCode.Error
// notFoundCode of type ResponseCode and assign it ResponseCode.NotFound
// timeoutCode of type ResponseCode and assign it ResponseCode.Timeout
// Print the following outputs:

// Print the value of successCode
// Print the value of errorCode
// Print the value of notFoundCode
// Print the value of timeoutCode
// Call handleResponse with ResponseCode.Success
// Call handleResponse with errorCode
// Call handleResponse with the numeric value 404


enum ResponseCode { 
    Success = 200,
    Error = "ERROR",
    NotFound = 404,
    Timeout = "TIMEOUT"
};


// Create the handleResponse function
function handelResponse(code: ResponseCode): void { 
    if(code === 200){ 
        console.log("Request successful");
    }
    else if(code === "ERROR"){ 
        console.log("General error occurred");
    }
    else if(code === 404){ 
        console.log("Resource not found");
    }
    else{ 
        console.log("Request timed out");
    }
}

// Create the demonstration variables
const successCode: ResponseCode = ResponseCode.Success;
const errorCode: ResponseCode = ResponseCode.Error;
const notFoundCode: ResponseCode = ResponseCode.NotFound;
const timeoutCode: ResponseCode = ResponseCode.Timeout;

console.log(successCode);
console.log(errorCode);
console.log(notFoundCode);
console.log(timeoutCode);
handelResponse(ResponseCode.Success);
handelResponse(errorCode);
handelResponse(404);


// Create a string enum named OrderStatus with four members:

// Pending initialized to "Pending"
// Shipped initialized to "Shipped"
// Delivered initialized to "Delivered"
// Cancelled initialized to "Cancelled"
// Create an interface named Order with the following properties:

// id of type number
// customerName of type string
// status of type OrderStatus
// Create three order objects using the Order interface:

// order1 with id 1001, customerName "Alice Johnson", and status OrderStatus.Pending
// order2 with id 1002, customerName "Bob Smith", and status OrderStatus.Shipped
// order3 with id 1003, customerName "Carol Davis", and status OrderStatus.Delivered
// Create a function named displayOrderInfo that takes one parameter:

// order of type Order
// The function should print a message in the format: "Order #[id] for [customerName] is [status]" and have a return type of void.

// Print the following outputs:

// Call displayOrderInfo with order1
// Call displayOrderInfo with order2
// Call displayOrderInfo with order3
// Print the value of OrderStatus.Cancelled
// Print the value of order2.status


enum OrderStatus { 
    Pending = "Pending",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cancelled = "Cancelled"
};

interface Order { 
    id: number,
    customerName: string,
    status: OrderStatus
};

const order1: Order = { 
    id: 1001,
    customerName: "Alice Johnson",
    status: OrderStatus.Pending
};
const order2: Order = { 
    id: 1002,
    customerName: "Bob Smith",
    status: OrderStatus.Shipped
};
const order3: Order = { 
    id: 1003,
    customerName: "Carol Davis",
    status: OrderStatus.Delivered
};


function displayOrderInfo(order: Order): void{ 
    console.log(`Order #${order.id} for ${order.customerName} is ${order.status}`)
};

displayOrderInfo(order1);
displayOrderInfo(order2);
displayOrderInfo(order3);
console.log(OrderStatus.Cancelled);
console.log(order2.status);

