
let a = 300

if (true){
   let a = 10
   const b = 20
   var c = 30

//    console.log("INNER: ",a) // returns 10 because the value of a is 10
}


// console.log(a) // returns 10 because the value of a is 10
// console.log(b) // returns 20 because the value of b is 20
// console.log(c) // returns 30 because the value of c is 30

/** The let and const keywords are block scoped, 
 * which means that they are only accessible within the block in which they are defined. 
 * In this case, the variables a and b are defined within the if block, so they are not accessible outside of that block. 
 * The var keyword, on the other hand, is function scoped, which means that it is accessible throughout the entire function in which it is defined. 
 * In this case, the variable c is defined within the if block, but it is still accessible outside of that block because it is defined using var.
 */

// console.log(a) // returns 300 because the value of a is 300


function one(){
    const username = "John "

    function two(){
        const website = "www.google.com"
        console.log(username) // returns John because the value of name is John
    }
    // console.log(website) // returns undefined because the value of website is not defined in the scope of the function one

    // two()
}

one() // returns John because the value of name is John




/** *******************************INTERESTING ***************************** */ 

// console.log(addone(5)) // returns 6 because the value of number is 5

function addone(number){
    return number + 1
}

// console.log(addTwo(5)) //return error because the value of addTwo is not defined in the scope of the function addone

const addTwo = function(number){
    return number + 2
}

// addTwo(5) // returns 7 because the value of number is 5