// object literals


const JsUser = {
    name: "Arnab",
    age: 25,
    email: "arnab@example.com"
}


// console.log(JsUser.name);// not to use


const JsUser2 = {
    name: "Arnab S",
    "full name" : "Arnab Samanta", // can use quotes for keys with spaces
    age: 25,
    email: "arnab@example.com"
}

// to access the value of a key with spaces, we can use bracket notation
// console.log(JsUser2["full name"]) // only this method can be use to point the key that is in string format.

//using symbol in the object

const mySymbol = Symbol("Key1")


const JsUser3 = {
    name: "Arav",
    mySymbol: "mykey",
    age: 25,
    email: "arnab@example.com"
}

// console.log(JsUser3)

const JsUser4 = {
    name: "Akash",
    [mySymbol]: "mykey2", // using symbol as a key
    age: 25,
    email: "arnab@example.com"
}

// console.log(JsUser4) // symbol is a unique and immutable data type that can be used as a key for object properties.
//  It is often used to create private properties or to avoid naming collisions in objects.;

JsUser4["email"] = "akash@example.com";

Object.freeze(JsUser4) // prevents any changes to the object, making it immutable

JsUser4["email"] = "akash@mail1.com"; // This will not have any effect as the object is frozen  

// console.log(JsUser4) // { name: 'Akash', [Symbol(Key1)]: 'mykey2', age: 25, email: '

// const User1 = new Object() // creating an object using the Object constructor

const User1 = {}


User1.id = "123abc"
User1.name = "Ash"
User1.email = "ash@example.com"
User1.age = 25

// console.log(User1);



const user2 = {
    email: "randon@example.com",
    fullname: {
        firstname:"Jay",
        lastname:"Sarkar"
    }
}

// console.log(user2)
// console.log(user2.fullname.lastname)

const obj1 = {1: "one", 2: "two"}
const obj2 = {3: "three", 4: "four"}

const mergeObj = {...obj1, ...obj2}
// console.log(mergeObj)


const Users = [
    {
        name : "Rahul",
        id: 123
    }, 
    {
        name: "Akshay",
        id: 456
    },
    {
        name: "Poonam",
        id: 789
    }
]

// console.log(Users[1].name) // Akshay

console.log(User1)
console.log(Object.keys(User1)) // returns an array of the keys of the object
console.log(Object.values(User1)) // returns an array of the values of the object
console.log(Object.entries(User1)) // returns an array of the key-value pairs of the object 

console.log(User1.hasOwnProperty("name")) // returns true if the object has the specified property, otherwise false 

