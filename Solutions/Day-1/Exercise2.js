console.log("<--------------------------Exercise 2---------------------------->");


console.log("<--------------Level 1---------------->");

console.log("<--------------Question 1---------------->");
console.log("1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.");
// const age =prompt("Enter Your Age");
const age = 32;
if (age >= 18) {
    console.log("You are old enough to drive");
} else {
    console.log("needs to turn 18.");
}
console.log("<--------------Question 2---------------->");
console.log("Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.")
console.log("Enter Your age");
// const yourAge =prompt("Enter your age: ");
const yourAge = 21;
const myAge = 24;
if (yourAge < myAge) {
    console.log(`You are ${myAge - yourAge} years younger than me.`);
} else {
    console.log(`You are ${yourAge - myAge} years older than me.`);

}
console.log("<--------------Question 3---------------->");
console.log("If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways")
let a = 4
let b = 3
if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${b} is greater than ${a}`);
}
console.log("Using ternary Operator");
a>b ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`);
console.log("<--------------Question 4---------------->");
console.log("Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?")
let number = 3;
if (number % 2 === 0) {
    console.log(`${number} is Even Number`);
} else {
    console.log(`${number} is Even Number`);
}
console.log("<--------------Level 2---------------->");
console.log("<--------------Question 1---------------->");
console.log("Write a code which can give grades to students according to theirs scores:\n" +
    "80-100, A\n" +
    "70-89, B\n" +
    "60-69, C\n" +
    "50-59, D\n" +
    "0-49, F");
let score = 5;
switch (score) {
    case ((score <= 100) || (score >= 80)):
        console.log('Grade A')
        break
    case ((score <= 79) || (score >= 70)):
        console.log('Grade B')
        break
    case ((score <= 69) || (score >= 60)):
        console.log('Grade C')
        break
    case ((score <= 59) || (score >= 50)):
        console.log('Grade D')
        break
    case ((score <= 49) || (score >= 0)):
        console.log('Grade F')
        break
    default:
        console.log('Entered value was not a number')
}
console.log("<--------------Question 2---------------->");
console.log("Check if the season is Autumn, Winter, Spring or Summer. If the user input is :\n" +
    "September, October or November, the season is Autumn.\n" +
    "December, January or February, the season is Winter.\n" +
    "March, April or May, the season is Spring\n" +
    "June, July or August, the season is Summer");


let month ="October";
switch (score) {
    case ("September" || "October" || "November"):
        console.log('the season is Autumn.')
        break
    case ("December" || "January"||  "February"):
        console.log(' the season is Winter.')
        break
    case ("March"|| "April" || "May" ):
        console.log('the season is Spring')
        break
    case ("June"||"July"||"August"):
        console.log('the season is Summer')
        break
    default:
        console.log('Entered value was not a Month')
}

console.log("<--------------Question 3---------------->");
console.log("Check if a day is weekend day or a working day. Your script will take day as an input.");
let day = "sunday";
day =day.toUpperCase();
switch (score) {
    case ("MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY"|| "FRIDAY"):
        console.log(`${day} is a working day`);
        break
    case ("SATURDAY" || "SUNDAY"):
        console.log(`${day} is a weekend`)
        break
    default:
        console.log('Entered value was not a Day')
}

console.log("<--------------Level 3---------------->");
// Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Function to get the number of days in a month
function getDaysInMonth(month, year) {
    let days;

    // Months with 31 days
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        days = 31;
    }
    // Months with 30 days
    else if (month === 4 || month === 6 || month === 9 || month === 11) {
        days = 30;
    }
    // February
    else if (month === 2) {
        if (isLeapYear(year)) {
            days = 29; // Leap year
        } else {
            days = 28; // Non-leap year
        }
    } else {
        return "Invalid month.";
    }

    return days;
}

let monthYear = parseInt(prompt("Enter the month (1-12):"));
let year = parseInt(prompt("Enter the year:"));

let days = getDaysInMonth(monthYear, year);
console.log(`Number of days in month ${month}, year ${year}: ${days}`);
