var a = prompt("Type your name");
var b = prompt("Type your school name");
var c = "Developer";
var d = +prompt("Enter maths marks");
var e =+prompt("Enter english marks");
var f =+prompt("Enter science marks");
var g =+prompt("Enter urdu marks");
var h =+prompt("Enter chemistry marks");
var tot = d + e + f + g + h; 
var per = tot/500 * 100


 //print on a screen
document.write("Name : " +a +"<br>"); 
document.write("School : " +b+"<br>"); 
document.write("Class : " +c+"<br><hr>");
document.write("Obtained Marks <hr>"); 
document.write("Math &emsp; :" +d+"<br>"); 
document.write("English &emsp; :" +e+"<br>"); 
document.write("Science &emsp; :" +f+"<br>");
document.write("Urdu &emsp; :" +g+"<br>");
document.write("Chemistry &emsp; :" +h+"<br><hr>");

document.write("Obtained marks &emsp; : " +tot+"<br>"); 
document.write("Percentage &emsp; : " +per);