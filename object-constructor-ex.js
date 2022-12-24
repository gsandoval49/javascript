function person(name, age, color) {
	this.name = name;
	this.age = age;
	this.favColor = color;
}

var p1 = new person("John", 42, "green");
var p2 = new person("Amy", 21, "red");
var p3 = new person("Anna", 34, "blue");

document.write(p1.age); 
document.write(p2.name);
document.write(p3.favColor);
