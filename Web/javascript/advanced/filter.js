const coding = ["js", "py", "cpp", "java"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values) // undefined, forEach does not return anything,
// //  it just executes the function for each item in the array.


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const singleNums = myNums.filter( (num) =>  {num > 4} )
// console.log(singleNums);

const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )

// console.log(newNums);


const books = [
    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Fiction",
        publishYear: 1988
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Non-Fiction",
        publishYear: 2018
    },
    {
        id: 3,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        genre: "Fiction",
        publishYear: 1997
    },
    {
        id: 4,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        publishYear: 1925
    },
    {
        id: 5,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        genre: "Non-Fiction",
        publishYear: 1997
    },
    {
        id: 6,
        title: "Wings of Fire",
        author: "A.P.J. Abdul Kalam",
        genre: "Autobiography",
        publishYear: 1999
    }
];


// const userBooks = books.filter( (bk) => bk.genre === "Fiction" ) // this will return all the books with genre as Fiction

const userBooks = books.filter( (bk) => bk.publishYear > 1900 && bk.genre === 'Fiction') // this will return an empty array as there is no book published after 2000

// console.log(userBooks);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const numbers = myNumbers.map( (num) => num + 10)

// console.log(numbers) // this will return a new array with each number incremented by 10;


const newNumbers = myNumbers.map( (num) => num * 10) . map((num) => num + 1)

// console.log(newNumbers);


const myNum1 = [1, 2, 3]

// const total = myNum1.reduce( function(acc, currval){
//     console.log(`acc: ${acc}, currval: ${currval}`)
//     return acc + currval
// }, 0) // 0 is the initial value of accumulator

const total = myNum1.reduce( (acc, currval) => {
    // console.log(`acc: ${acc}, curr: ${currval}`);
    return acc + currval
},0) // 0 is the initial value of accumulator


// console.log(total);

const shoppingCart = [
    {
        item: "Laptop",
        price: 1000
    },
    {
        item: "Phone",
        price: 500
    },
    {
        item: "Headphones",
        price: 100
    }
]

const totalBill = shoppingCart.reduce( (acc, item) => {return acc + item.price}, 0)
console.log(totalBill);
