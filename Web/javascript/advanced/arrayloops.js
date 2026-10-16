/** FOR OF LOOP */

const arr = [1, 2, 3, 4, 5]

// for (const element of object) {
    
// }

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World!"

for (const greet of greeting){
    // console.log(`Each char is ${greet}`)
}


/** MAPS */

const map = new Map()
map.set("IN", "India")
map.set("USA", "United State of America")
map.set("FR", "France")
// console.log(map);


// for (const key of map) {
//     console.log(key)
// } displays both key and values.


for (const [key, values] of map) {
    // console.log(`${key} -> ${values}`)
}

const myObject = {
    'sport1': 'Cricket',
    'sport2': 'Football',
    'sport3': 'Basketball'
}

// for (const obj of myObject){
//     console.log(obj)
// } objects are not iterable

/** FOR IN LOOP */

const myObject2 = {
    'JS': 'JavaScript',
    'PY': 'Python',
}

// for (const key in object) {

// } this loop can be used for iterating object

for (const key in myObject2) {
    // console.log(key)
} // only the key of the object are displayed.


for (const key in myObject2) {
    // console.log(myObject2[key])
}

const arr1 = ["py", "js", "cpp", "java"]

for (const a in arr1) {
    // console.log(a)
}// for in loop returns the keys of both array and object


const map1 = new Map()
map1.set("IN", "India")
map1.set("USA", "United State of America")
map1.set("FR", "France")

for (const key in map1) {
    console.log(key)
}
//for in loop cannot iterate in maps

/** FOR EACH LOOP */

const coding = ["js", "py", "cpp", "java"]

// coding.forEach(function (val) {
//     console.log(val)
// });

// coding.forEach( (item) => {
//     console.log(item);
// })


// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)


coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr)
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName : "js"
    },
    {
        languageName: "python",
        languageFileName : "py"
    },
    {
        languageName: "java",
        languageFileName : "java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})