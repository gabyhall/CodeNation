let today = Date();
let parsedToday = Date.parse(today);

//console.log(parsedToday);

let birthday = prompt("What is your date of birth?");
let parsedBirthday = Date.parse(birthday);

//console.log(parsedBirthday);

let millisecondsBetween = parsedToday - parsedBirthday;
//console.log(millisecondsBetween);

let daysElapsed = millisecondsBetween / 1000 / 60 / 60 / 24;
console.log(Math.floor(daysElapsed));


// shortest version
// let today = Date.parse(Date());

// let birthday = Date.parse(prompt("What is your date of birth?"));

// let daysElapsed = (today - birthday) / 1000 / 60 / 60 / 24;
// console.log(Math.floor(daysElapsed));