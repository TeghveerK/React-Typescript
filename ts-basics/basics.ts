// Primitives: number, string, boolean
// More complex types: arrays, object
// Function types, parameters

// Primitives

let age: number;
age = 12;

let userName: string;
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

let people: Person[];

// Type inference

let course: string | number = "React - The Complete Guide";

course = 12341;

// Functions and Types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginnning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginnning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginnning(["a", "b", "c"], "d");

// updatedArray[0].split("");
