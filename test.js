// ARRAY DESTRUCTURING

const alphabet = ["A", "B", "C", "D", "E", "F"];
const numbers = ["1", "2", "3", "4", "5", "6"];

console.log([...alphabet]);
const [a, , c, ...rest] = alphabet;
const combined = [...alphabet, ...numbers];

console.log(a);
// console.log(b);
console.log(c);
console.log(rest);
console.log(combined);

function sumAndMultiply(a, b) {
  return [a + b, a * b, a / b];
}

const [sum, product, division = "no division"] = sumAndMultiply(2, 3);
console.log(sum);
console.log(product);
console.log(division);

// OBJECT DESTRUCTURING

const personOne = {
  name: "Kyle",
  age: 24,
  address: {
    city: "Somewhere",
    state: "One of them",
  },
};

const personTwo = {
  name: "Eric",
  age: 19,
  address: {
    city: "Somehwere else",
    state: "Another one of them",
  },
};

const {
  name: firstName = "john",
  age,
  address: { city },
} = personTwo;

console.log(firstName);
console.log(age);
// console.log(rest_person);
console.log(city);

const personThree = {
  age: 30,
  favoriteFood: "Rice",
};

const personOneAndThree = { ...personOne, ...personThree };
console.log(personOneAndThree);

function test({ name, age, favoriteFood = "watermelon" }) {
  console.log(`name is ${name}, age is ${age}, food is ${favoriteFood}`);
}

test(personTwo);
