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

console.log(JsUser3)

const JsUser4 = {
    name: "Akash",
    [mySymbol]: "mykey2", // using symbol as a key
    age: 25,
    email: "arnab@example.com"
}

console.log(JsUser4) // symbol is a unique and immutable data type that can be used as a key for object properties.
//  It is often used to create private properties or to avoid naming collisions in objects.;

JsUser4["email"] = "akash@example.com";

Object.freeze(JsUser4) // prevents any changes to the object, making it immutable

JsUser4["email"] = "akash@mail1.com"; // This will not have any effect as the object is frozen  

console.log(JsUser4) // { name: 'Akash', [Symbol(Key1)]: 'mykey2', age: 25, email: '