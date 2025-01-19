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

// Objects
let employee = { id: 1}