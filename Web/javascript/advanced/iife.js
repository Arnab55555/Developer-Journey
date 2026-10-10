/** IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) */


(function one(){
    //named iife
    console.log(`DB CONNECTED`);
})(); // returns DB CONNECTED because the function one is invoked immediately after it is defined

( () => {
    //anonymous iife(unamed iife)
    console.log(`DB CONNECTED SECOND TIME`);
} ) ();


((name) => {
    console.log(`${name} DB CONNECTED`);
    
})("SQL") // returns SQL DB CONNECTED because the function is invoked immediately after it is defined and the value of name is SQL

