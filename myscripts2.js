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
dynamicVariable = "Hello";
console.log(dynamicVariable);

console.log("Array sum: "+Sum());
var myText = document.getElementById("myTextArea");
button2.onclick = function printText(){
myText.value = "Array sum: "+ Sum();
}


