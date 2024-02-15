function addNumbers(x: number, y:number) {
    return x + y;
  }
  console.log(addNumbers(3, 6));

  let x: number;   //* Explicitly declares x as a number type
let y = 1;       //* Implicitly declares y as a number type
x = 2;
//y = "one";

let z;           //* Declares z without initializing it
z = 1;
 z = "one";

let flag: boolean;
let yes = true;
let no = false;

let s: string;
let empty = "";
let abc = 'abc';


let firstName: string = "Mateo";
let sentence: string = `My name is ${firstName}.
    I am new to TypeScript.`;
console.log(sentence);


let randomValue: any = 10;
randomValue = 'Mateo';   // OK
randomValue = true;      // OK

console.log(randomValue.name);  // Logs "undefined" to the console
randomValue();                  // Returns "randomValue is not a function" error
randomValue.toUpperCase();      // Returns "randomValue is not a function" error