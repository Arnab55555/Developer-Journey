const user = {
    username: "Rahul",
    price: 100,

    welcomeMessage: function(){
        console.log(`Hi...!! ${this.username}, Welcome to the website.`);
        console.log(this);
    }
}

// user.welcomeMessage() // returns Hi...!! Rahul, Welcome to the website. because the value of username is Rahul

// user.username = "Sam" // changing the value of username to Sam

// user.welcomeMessage() // returns Hi...!! Sam, Welcome to the website. because the value of username is Sam

// console.log(this) // returns window because the value of this is window


// function one(){
//     let name = "Ram"
//     console.log(this.name) // returns window because the value of this is window
// }

// one() // returns window because the value of this is window


// const user1 = function(){
//     let username = "Ash"
//     console.log(this.username);
// }

const user1 = () =>{
    let username = "Ash"
    console.log(this);
}

// user1()


const addTwo = (number1, number2) => {
    return number1 + number2
} // explicit return, here return keyword is used

// console.log(addTwo(5, 10)) // returns 15 because the value of number1 is 5 and number2 is 10


const addThree = (number1, number2, number3) => number1 + number2 + number3

// console.log(addThree(5, 10, 15)) // returns 30 because the value of number1 is 5, number2 is 10 and number3 is 15

// const addingTwo = (num1, num2) => (num1 + num2) //implicit return ,return keyword is not used

const addingTwo = (num1, num2) => ({username: "Ash"}) //implicit return ,return keyword is not used


console.log(addingTwo(5, 10));

