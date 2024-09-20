//1. Declare an empty array;
const emptyArray = [];
//2. Declare an array with more than 5 number of elements
const nonEmptyArray = ["One", "Two", "Three", "Four", "Five"];
//3. Find the length of your array
console.log(nonEmptyArray.length);
//4.Get the first item, the middle item and the last item of the array
console.log(nonEmptyArray[0],nonEmptyArray[nonEmptyArray.length/2],nonEmptyArray[nonEmptyArray.length-1]);
//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes=["Integer","String","Boolean","Undefined","Null","Float"];
//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let companies="Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon";
let itCompanies= companies.split(",");
//7. Print the array using console.log()
console.log(itCompanies);
//8. Print the number of companies in the array
console.log(itCompanies.length);
//9. Print the first company, middle and last company
console.log(itCompanies[0],itCompanies[nonEmptyArray.length/2],itCompanies[nonEmptyArray.length-1]);
//10. Print out each company
itCompanies.map((company)=>{
    console.log(company);
})
//11. Change each company name to uppercase one by one and print them out
itCompanies.map((company)=>{
    console.log(company.toUpperCase());
})
//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const itCompaniesString =itCompanies.join(" ");
console.log(itCompaniesString+"are big IT companies");
//13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const exists =itCompanies.includes("SnapperIT")
if(exists){
    console.log("Snapper IT companies exists");
}else { console.log("No snapper IT companies exists");}
//14. Filter out companies which have more than one 'o' without the filter method
const newArray= [];
itCompanies.forEach((company)=>{
    let count=0;
    for (let i = 0; i < company.length; i++) {
        if(company[i]==='o'){
            count++;
        }
    }
    if(count>1){
        newArray.push(company);
    }
})
console.log(newArray);
//15. Sort the array using sort() method
const sortedCompanies=itCompanies.sort();
console.log(sortedCompanies);
//16. Reverse the array using reverse() method
const reverseArray= itCompanies.reverse();
console.log(reverseArray);
//17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));
//18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length));
//19. Slice out the middle IT company or companies from the array
console.log("19",itCompanies)
itCompanies.splice(itCompanies.length/2,1);
console.log(itCompanies);
//20. Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);
// . Remove the middle IT company or companies from the array
itCompanies.splice(itCompanies.length/2,1);
console.log(itCompanies);
//21. Remove the last IT company from the array
console.log(itCompanies);
itCompanies.pop();
console.log(itCompanies);
//21. Remove all IT companies
console.log(itCompanies);
itCompanies=[];
console.log(itCompanies);
