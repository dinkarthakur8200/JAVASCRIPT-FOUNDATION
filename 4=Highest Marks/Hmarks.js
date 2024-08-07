const marks = [34, 45 ,354, 54,34 ,344] ;
// initialize the highest marks with first element .. 
let highestMarks =  marks[0];
// iterates through each loops .. 
for (let i = 1; i < marks.length; i++) {
    highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
  }

console.log("Highest mark:", highestMarks);

// Explaing the terenary operator ...
let age = 17;
let isAdult = age >= 18 ? "You are an adult" : "You are a minor";
console.log(isAdult); // Output: You are an adult
