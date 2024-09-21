import {countries_data} from "./countries_data.js";

console.log("<--------------------------Exercise 3---------------------------->");
console.log("<-------------------Level 1----------------------->");
console.log("Create an empty object called dog");
const Dog={}
console.log("Print the the dog object on the console");
console.log(Dog);
console.log("Get name, legs, color, age and bark value from the dog object");
console.log(Dog.name, Dog.legs,Dog.color,Dog.age,Dog.bark);
console.log("Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof");
Dog.name="Pluto";
Dog.legs=4;
Dog.color="Golden";
Dog.age=6;
Dog.bark="Woof Woof";
console.log(Dog);
console.log("Set new properties the dog object: breed, getDogInfo");
Dog.breed ="Golden Retriever";
console.log("<-------------------Level 2----------------------->");
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
console.log("Find the person who has many skills in the users object")
let moreSkills=0;
let person={};
for (const usersKey in users) {
    let skillCount =users[usersKey].skills.length
    if(skillCount>moreSkills){
        person=users[usersKey];
    }
}
console.log(person);
console.log("Count logged in users,count users having greater than equal to 50 points from the following object.");
let loggedInUsers=[];
let usersWithMorePoints=[];
for (const usersKey in users) {
    if(users[usersKey].skills.isLoggedIn){
        loggedInUsers.push(users[usersKey]);
    }
    if(users[usersKey].skills.points>=50){
        usersWithMorePoints.push(users[usersKey]);
    }
}
console.log(loggedInUsers);
console.log(usersWithMorePoints);
console.log("Find people who are MERN stack developer from the users object");
const MERN =['MongoDB', 'Express', 'React', 'Node'];
let developers=[];
for (const usersKey in users) {
    let mersStackDeveloper=MERN.every((element)=>users[usersKey].skills.includes(element));
    if(mersStackDeveloper){
        developers.push(users[usersKey]);
    }
}
console.log(developers);

console.log("Set your name in the users object without modifying the original users object");

const updatedUsers = {
    ...users,
    Varun: {
        email: 'varun@varun.com',
        skills: ['Java', 'Spring Boot', 'React'],
        age: 24,
        isLoggedIn: true,
        points: 100
    }
};

console.log(updatedUsers);

console.log("Get all keys or properties of users object");
for (const usersKey in users) {
    console.log(usersKey);
}
console.log("Get all the values of users object");
for (const usersKey in users) {
    console.log(users[usersKey]);
}

console.log("Use the countries object to print a country name, capital, populations and languages");
countries_data.forEach((country)=>{
    console.log("<------------------------------------------->")
    console.log("Country Name "+country.name);
    console.log("Country capital "+country.capital);
    console.log("Country population "+country.population);
    console.log("Country languages "+country.languages);
    console.log("<------------------------------------------->")
})