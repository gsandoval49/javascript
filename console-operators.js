// ALL THESE EXAMPLES CAN BE USED IN WEB TOOLS CONSOLE

// includes() checks for certain case sensitive words within a string to see if it exists
// output is a boolean
document.title.includes("Example Title Here");

// tells you the content within a node 
// outputs the string of content from the node from the DOM 
document.querySelector("someNodeHere").textContent;

// typeOf operator returns what a data type is
// for ex... boolean, number, string, etc. 
console.log(typeof("yourVariableOrDataTypeHere"));
  // this should output "string" 
// or you can leave out "console.log" if you're in web tools and just place "typeOf"
typeOf = 82;
  // output >> "number"
typeOf = true;
  // output >> "boolean"


// indexOf is a method that returns the first instance of that charcter in the string 
"ALOHA".indexOf("H");
  // returns 3
"ALOHA".indexOf("Q");
  // returns -1; because it's not in the string. 
"ALOHA".indexOf("l");
  // this is case sensitive; so it returns -1. 

// append function adds on to a string at the end. It only adds and doesn't delete 
document.getElementById("nameOfYourElement").append("Your appended string goes here.")

// [] following a string shows me the character of a string
"ALOHA"[3]
  // >>> OUTPUTS "H";

// includes 
