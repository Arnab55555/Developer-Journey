// array

const myArr = [0, 1, 2, 3, 4, 5]

// console.log(myArr[0])

/*when an array is copied, it creats a shallow copy,
meaning the new array contains references to the same elements
as the original array*/

/* deep copies means the object does not contains
the same references as the original object*/

// console.log(myArr.length)

/** The length is the property of the array that 
 returns the number of elements in the array. In other words,
 it tell the size of the array.
 */

 /** ARRAY METHODS */

 myArr.push(6);
//  console.log(myArr) // [0, 1, 2, 3, 4, 5, 6]

 myArr.pop();
//  console.log(myArr) // [0, 1, 2, 3, 4, 5]

myArr.unshift(-1);
//  console.log(myArr) // [-1, 0, 1, 2, 3, 4, 5] can be used for creating to do lists

myArr.shift();
//  console.log(myArr) // [0, 1, 2, 3, 4, 5] removes the first element of the array

// console.log(myArr.includes(3))

// console.log(myArr.indexOf(5)) // 5 returns the index of the element in the array


const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)


/**SLICE & SPLICE */

const myArr2 = [0, 2, 4, 6, 8]

console.log("A", myArr2)
const ma1 = myArr2.slice(1, 3) 
console.log(myArr2) // [0, 2, 4, 6, 8]
/* [2, 4] returns a shallow copy of a portion of an array 
into a new array object selected from start to end (end not included) 
where start and end represent the index of items in that array. 
The original array will not be modified. */

console.log("B", myArr2)
const ma2 = myArr2.splice(1, 3)
console.log(myArr2) // [0, 8]
/* [2, 4, 6] changes the contents of an array by removing or replacing 
existing elements and/or adding new elements in place. */

