import {countries} from "./countries.js"
import {webTechs} from "./web_techs.js";

console.log("<--------------Level 2---------------->");
console.log("<--------------Question 1---------------->");
console.log(countries, webTechs);


console.log("<--------------Question 2---------------->");
let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const punctuationText = text.replace(/[.,\/#!$%^&*;:{}=\-_`~()]/g, "");
const stringArray = text.split(" ");
console.log(punctuationText);
console.log(stringArray, stringArray.length);
console.log("<--------------Question 3---------------->");
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart.unshift("Meat"));
console.log(shoppingCart.push("Sugar"));
const index = shoppingCart.indexOf("Tea");
shoppingCart[index] = "Green Tea";
console.log(shoppingCart);

console.log("<--------------Question 4---------------->");
const includes = countries.includes("Ethiopia");
if (includes) {
    let string = "Ethiopia";
    console.log(string.toUpperCase())
} else {
    countries.push("Ethiopia");
}
console.log("<--------------Question 5---------------->");
const webIncludes = webTechs.includes("Sass");
if (webIncludes) {
    console.log("Sass is a CSS preprocess");
} else {
    webTechs.push("Sass");
}
console.log(webTechs);
console.log("<--------------Question 6---------------->");
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)
console.log("<--------------Level 3---------------->");
console.log("<--------------Question 1---------------->");
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages, "Min Age: " + ages[0], "Max Age: " + ages[ages.length - 1]);

let median = undefined;
if (ages.length % 2 === 0) {
    let one = Math.floor(ages.length / 2);
    let two = one + 1;
    median = (ages[one] + ages[two]) / 2;
} else {
    let middle = ages.length / 2;
    median = ages[middle];
}
console.log(median);

let avg = 0;
for (let i = 0; i < ages.length; i++) {
    avg = avg + ages[i];
}
avg = avg / ages.length;
console.log("Avg of ages: " + avg);
const range = ages[ages.length - 1] - ages[0];
console.log("Range of Ages: " + range);
console.log("min-avg: " + Math.abs(ages[0] - avg) + " max-avg: " + Math.abs(ages[ages.length - 1] - avg));
console.log("<--------------Question 2---------------->");
console.log("Slice the first ten countries from the countries array")
console.log(countries.slice(0, 10))

console.log("<--------------Question 3---------------->");
console.log("Find the middle country(ies) in the countries array");
const countriesLength = countries.length;
if (countries.length % 2 === 0) {
    console.log(countries[countriesLength - 1])
    console.log(countries[(countries.length / 2) + 1])
} else {
    console.log(countries[Math.floor(countries.length / 2)]);
}
console.log("<--------------Question 4---------------->");
console.log("Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.");
if (countries.length % 2 === 0) {
    console.log(countries.slice(0, (countries.length / 2) + 1), countries.slice((countries.length / 2) + 1, countries.length))
} else {
    console.log(countries.slice(0, (countries.length / 2) + 2));
}


