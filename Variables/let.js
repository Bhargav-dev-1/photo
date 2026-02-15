/*
LET 

LET IS INTRODUCED IN ES6 
1. IT IS BLOCK SCOPE 
2. WE CAN REASSIGN VALUES 
3. WE CANNOT RE-DECLARE VARIABLE
*/

// 1. block scope 

{
    let count =5
}
console.log(count)// we can acess inside {}

// 2. RE-DECLARE 
{
    let x =5
    let x =5 //we cannot re-declare using let
    console.log(x)
}
// 3. RE-ASSIGN

{
    let y = 23
    y= 45 //we can re-assign using let
    console.log(y)
}