"use strict";
let sales = 123456789;
let course = "typescript";
let is_publisged = true;
let level;
let numb = [];
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let user = [1, "mosh"];
const small = 1;
const medium = 2;
const large = 3;
;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
let employee1 = {
    id: 1,
    name: 'Mosh',
    retire: (date) => {
        console.log(date);
    }
};
let employee = {
    id: 1,
    name: 'Mosh',
    retire: (date) => {
        console.log(date);
    }
};
function KgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
KgToLbs(10);
KgToLbs('10kg');
//# sourceMappingURL=index.js.map