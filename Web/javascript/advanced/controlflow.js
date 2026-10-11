/** IF STATEMENT */

// if(true){
//     console.log("The statement will be executed.");   
// }


/** IF-ELSE STATEMENT */

// if (condition) {
    
// } else {
    
// }

/** IF-ELSE IF STATEMENT */

// if (condition) {
    
// } else if(condition) {

// } else {
    
// }



/** SWITCH CASE STATEMENT */


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;

//     default:
//         console.log("Wrong Input..!!, Pls enter value between 1 - 12");
//         break;
// }


// falsy Values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Some truthy values

// "0", "false", " ", [], {}, function(){}

const userEmail = []

//checking empty array value

if (userEmail.length === 0){
    // console.log("The array is empty.");
}


const userObject = {}

if (Object.keys(userObject).length === 0){
    // console.log("The object is empty.");
    
}

/** Nullish Coalescing Operator (??) : null undefined */

let val1;
// val1 = 5 ?? 10;

// val1 = null ?? 10; // it is a safety operator for null and undefined values.

// val1 = undefined ?? 15 // it is a safety operator for null and undefined values.

val1 = null ?? 10 ?? 20;

// console.log(val1);

/** TERNIARY OPERATOR */

// condition ? true : false

const price = 100

price <= 80 ? console.log("less than 80") : console.log("Greater than 80");
