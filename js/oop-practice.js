// STEP 1 - Create two classes, one called Cat and another called Dog. Both classes should be created using constructor syntax. 
//          The Cat class should be created using a named declaration and the Dog class should be created using an anonymous declaration.

class Cat {
    constructor() {
		
	}

}

const Dog = function() {}


// STEP 2 - Create a new instance of the Cat class. Directly underneath, create a new instance of the Dog class.

const cat1 = new Cat() 
const dog1 = new Dog() 

// STEP 3 - Create a new class using constructor syntax called Animal. Create a method within the Animal class that when called, 
//          displays the message “The Animal has been created” in the console window.

class Animal {
    constructor() {
		
	}
    status = function () {
        console.log(`The Animal has been created!`)
    }

}
const an1 = new Animal()
an1.status()

// STEP 4 - Now, replicate the above code but this time so that the class accepts an argument and that value is what is displayed in the 
//          console window. The message should be passed into the constructor at the moment that the Animal class is instantiated.

class Animal1 {
    constructor(color) {
        this.color = color
		
	}
    status = function () {
        console.log(`The ${this.color} Animal has been created!`)
    }

}
const an2 = new Animal1('Pink')
an2.status()

// STEP 5 - Start over and now create a new class using constructor syntax called Animal. Define five properties within your class 
//          including properties type, breed, color, height, and length. These properties will be set within the object so you’ll need to 
//          pass in arguments into the function’s constructor, set the properties, and then pass in the actual values during the object’s 
//          instantiation.

class Animal3 {
    constructor(type, breed, color, height, length) {
        this.type = type
        this.breed = breed
        this.color = color
        this.height = height
        this.length = length
		
	}
    status = function () {
        console.log(`The new ${this.color} ${this.breed} ${this.type} animal ${this.height} height and ${this.length} long has been created!`)
    }

}
const an3 = new Animal3('cat', 'bengal', 'pink', '2 feet', '10 feet')
an3.status()

// STEP 6 - Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 
//          properties displayed in a list within the console window.

for (const prop in an3) {

    console.log(prop);
}

// STEP 7 - Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal 
//          being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead.
//          Call that method after the Animal class has been instantiated.

class Animal4 {
    constructor(type, breed, color, height, length) {
        this.type = type
        this.breed = breed
        this.color = color
        this.height = height
        this.length = length
		
	}
    status = function () {
        console.log(`The new ${this.color} ${this.breed} ${this.type} animal ${this.height} height and ${this.length} long has been created!`)
    }

    speak = function () {
        if (this.type === 'dog') {
            console.log(`The ${this.color} dog is barking!`)
        } else if (this.type === 'cat') {
            console.log(`The ${this.color} cat is meowing!`)
        }
    }

}
const an4 = new Animal4('cat', 'bengal', 'pink', '2 feet', '10 feet')
an4.speak()

const an5 = new Animal4('dog', 'shepard', 'red', '1 feet', '5 feet')
an5.speak()


// STEP 8 - Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method 
//          you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a privileged method 
//          called speak that returns the value of the checkType() method. The console window should now display 
//          “The <animal type> has made a noise!”

class Animal5 {
    constructor(type, breed, color, height, length) {
        let _type = type
        let _breed = breed
        let _color = color
        let _height = height
        let _length = length
 
        let checkType = function (type) {
            if (_type === 'dog')
                return 'dog'
            else
                return 'cat'
        }

        this.speak = function () {

            return checkType()
        }
	}

}

const an6 = new Animal5('cat', 'bengal', 'pink', '2 feet', '10 feet')
console.log(`The ${an6.speak()} has made a noise!`)

const an7 = new Animal5('dog', 'shepard', 'red', '1 feet', '5 feet')
console.log(`The ${an7.speak()} has made a noise!`)

// STEP 9 - Create your own String method called findWords that inherits from the native String Object. This method should find all 
//          instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time 
//          that word was found in the paragraph. Remember, you’ll need to add your method to the String object’s prototype.

