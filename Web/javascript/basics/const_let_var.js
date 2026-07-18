const account = 123456
// const keyword makes the data immutable, meaning it cannot be reassigned or changed after its initial assignment.

let email = "arnab@example.com"
// let keyword allows the data to be reassigned or changed after its initial assignment.

var password = "123456"
// var keyword is function-scoped and can be reassigned or changed after its initial assignment.



/*
Prefer not to use var keyword because of issue in block scope and functional scope.
*/

console.table([account, email, password])


let name;
/*
If no data type is assigned to a variable, it will be considered as undefined. 
*/

console.table([account, email, password, name])