function person(name, age) {
	this.name = name;  
	this.age = age;
	this.changeName = function (name) {
		this.name = name;
	}
	this.changeAge = function (age) {
	    this.age = age;
	}
}

var p = new person("David", 21);
p.changeName("John");
p.changeAge(22);

document.write(p.name);
document.write(p.age);
