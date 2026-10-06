function addTwoNumbers(num1, num2){
    return num1 + num2;
}

const result = addTwoNumbers(5, 10); // returns 15
// console.log(result)

function userLoggedIn(user){
    if (!user){
        console.log("No user is logged in");
        return;
    }
    return `${user} is logged in`;
}

// console.log(userLoggedIn("Ash")) // returns "Ash is logged in"

// console.log(userLoggedIn()) // returns "undefined is logged in" because no argument is passed to the function




// function calculateCartPrice(cartItemsprice){
//     return cartItemsprice;
// }

// console.log(calculateCartPrice(100, 200, 300)) // returns 100 because only the first argument is considered

// function calculateCartPrice(...cartItemsprice){
//     return cartItemsprice;
// }

// console.log(calculateCartPrice(100, 200, 300)) // returns [100, 200, 300] because all the arguments are considered as an array  



function calculateCartPrice(Item1, Item2, ...cartItemsprice){
    return cartItemsprice;
}

// console.log(calculateCartPrice(100, 200, 300, 400, 500 )) // return [300, 400, 500] because the first two arguments are assigned to Item1 and Item2, and the rest of the arguments are considered as an array for cartItemsprice


const user = {
    name: "Ash",
    age: 25,
    emailid: "ash@example.com"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and email is ${anyobject.email} `);
}


// handleObject(user) // returns "Username is Ash and email is ash@example.com "


// handleObject({
//     name: "Jay",
//     email: "jay@example.com"
// })


const newArray = [1, 2, 3 , 4, 5]

function handleArray(getArray){
    return getArray[1]
}

// handleArray(newArray) // returns 2 because the second element of the array is returned

console.log(handleArray([10, 20, 30, 40, 50])) // returns 20 because the second element of the array is returned

