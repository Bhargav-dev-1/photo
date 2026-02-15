/* 3. const
it is used to declare constants 

1. BLOCK SCOPE 
2. NO RE-DECLARE 
3. NO RE-ASSIGNMENT */

// 1. BLOCK SCOPE 
{
    const pi = 3.14
    console.log(pi)
}
console.log(pi) //we cannot use outside the block

// 2. NO RE-DECLARE
{
    const pi=3.14
    const pi = 3585
}
// 3. NO RE-ASSIGNMENT 
{
    const pi =45.55
    pi= 452.3 // we cannot reassign
    console.assert.log(pi)
}