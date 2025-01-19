let sales: number = 123456789;
let course = "typescript";
let is_publisged = true; 

// any type
let level;
let numb = []

function render(document: any) {
    console.log(document)
}

// arrays
let numbers = [1, 2, 3];

// tuple
let user: [number, string] = [1, "mosh"];

// Enums
const small = 1;
const medium = 2;
const large = 3;
// emums(PascalCase) enum show the full function of it property while const enum minimizes it properties
const enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize);

// function
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000);

// Objects  example 1
let employee1: {
 readonly id: number,
 name: string,
 retire: (date: Date) => void
} = { 
    id: 1, 
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date);
    }
}; 

// Object with type Aliases
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = { 
       id: 1, 
       name: 'Mosh',
       retire: (date: Date) => {
           console.log(date);
       }
   }; 

//    Object with Union Types
function KgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else 
    return parseInt(weight) * 2.2;
}
KgToLbs(10);
KgToLbs('10kg');

// Object with Intersection types
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// Object with Literal Types (Literal types means exact value or specific value)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';
let metric: Metric = 'cm'

 
