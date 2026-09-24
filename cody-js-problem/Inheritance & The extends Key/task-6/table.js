import { Furniture } from './furniture.js';

// TODO: Create a Table class that extends Furniture and export it
export class Table extends Furniture{ 
// TODO: Add the constructor function 
    constructor(material, color, shape){ 
// TODO: Use super() in the constructor to inherit material and color and add a new property: shape
        super(material, color)
        this.shape = shape;
    }
// TODO: Add method: placeItem() that returns "Item placed on table"
    placeItem(){
        return "Item placed on table";
    }
}

