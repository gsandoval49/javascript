const cat = {
  name: "cat", 
  speak() {
  	console.log("meow")
  }
};

const dog = {
  name: "dog",
  speak(someParameter) {
    console.log("woof woof", someParameter);
  }
};

dog.speak('My parameter');
cat.speak();
