var emailTextBox = document.getElementById("email");
var feedbackTextBox = document.getElementById("feedback");
var button2 = document.getElementById("button2");
var myText = document.getElementById("myTextArea");
var submitButton =document.getElementById("mybutton");
button2.onclick = function printText(){
myText.value = emailTextBox.value;
myText.value+="\n"+  feedbackTextBox.value;
}

submitButton.onclick = function printAlert(){
    alert(emailTextBox.value+ "\n"+  feedbackTextBox.value);
}




