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
