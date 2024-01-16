//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


displayFavoriteFoods(person3);

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(name, age) {
    this.name = name;
    this.age = age;
}  

// Use an arrow to create the printInfo method

this.printInfo = () => {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  };

// Create another arrow function for the addAge method that takes a single parameter

this.addAge = () => {
    this.age += 1;
  };
// Adding to the age 

this.addAgeBy = (years) => {
    this.age += years;
  }


  const person1 = new Person("Justin", 27)
  const person2 = new Person("David", 61)
    
  person1.printInfo()
  person2.printInfo()
    
  person1.addAgeBy(5)
    
  console.log(person1.printInfo())
  console.log(person2.printInfo())
  
// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkLength(str) {
    if (str.length > 10) {
      console.log("Big word");
    } else {
      console.log("Small Number");
    }
  }

  checkLength("THIS IS A TEST MESSAGE")
  checkLength("HELLO")


// CodeWars Problem

// 1. Grasshopper - Personalized Message

//   function greet(name, owner) {
//     if (name == owner) {
//         return 'Hello boss';
//     } else {
//         return 'Hello guest';
//     }
// }


// 2. Counting sheep...

//  function count_sheeps(num_of_sheep) {
//     count = 0;
//     for (s in num_of_sheep) {
//         if (s == true) {
//             count += 1;
//     return count;
//         }
//     }

// }
