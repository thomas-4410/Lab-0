// Test the logging on the console by:
// 1. Right-clicking anywhere on the page.
// 2. Selecting "Inspect" from the context menu.
// 3. The browser opens up a source code page with multiple tabs; click on "Console."
// 4. You can now test your code in the console.

console.log("test");
for(let i = 0; i< 5; i++){
    console.log(i+"\n");
}

function Sum(){
    let a = [1, 2, 3];
    let total = 0;
    for(let i = 0; i< 5; i++){
        total += i;
    }
    return total;
}

let dynamicVariable = 42;
console.log(dynamicVariable);
dynamicVariable = "Hello";
console.log(dynamicVariable);

function Animal(name) { this.name = name; }
Animal.prototype.sound = function() { console.log("Generic sound"); };
let cat = new Animal("Whiskers");
cat.sound();


function greet(name) { return "Hello, " + name + "!"; }
let greeting = greet("Alice");
console.log(greeting);

for (let i = 1; i <= 5; i++) { console.log("Iteration: " + i); }

setTimeout(() => { console.log("Delayed message"); }, 2000);

let name2 = "John", age = 25, isStudent = true, 
hobbies = ["Reading", "Coding"];
console.log(name2 +"\n"+age +"\n"+isStudent+"\n"+ hobbies+"\n");

console.log("Array sum: "+Sum());
var myText = document.getElementById("myTextArea");
button2.onclick = function printText(){
myText.value = "Array sum: "+ Sum();
}


document.getElementById("button2").addEventListener("click", function() { console.log("Button clicked!"); });


let add = (a, b) => a + b;
console.log(add(3, 5)); // Outputs: 8




let name3 = "John";
let Hi = `Hello, ${name3}!`;
console.log(Hi); // Outputs: Hello, John!


let numbers = [1, 2, 3, 4];
let [a, b, c] = numbers;
console.log(a,b,c); // Outputs: 1 2 3

