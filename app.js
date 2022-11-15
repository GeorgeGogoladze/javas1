const myString = "some text"
const myNumber = 20;
const myBoolean = true;
const myNull = null;
const myUndefined = undefined;
const myName = "George";
const myLastName = "Gogoladze";
const yearOfBirth = 1997;
const currentYear = 2022;

console.log(myName);
console.log(myLastName);


const text1 = 'My name is ${myName} and my last name is ${myLastName}. I am ${currentYear - yearOfBirth} years Old.';

// text1 ar gamomivida da ver vxvdebi ratom 

console.log(text1);



const text2 = "My name is " + myName + " and my last name is " + myLastName + " I am " + 
(currentYear - yearOfBirth) + " years Old."

console.log(text2);