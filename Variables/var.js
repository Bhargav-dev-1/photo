
/* 
VAR 
IT IS THE OLD WAY OF DECLARING A VARIABLE IN JS. BEFORE ES6 IT IS THE ONLY WAY FOR DECLARING A VARIABLE
1. VAR IS A FUNCTION SCOPE VARIABLE
2. IT CAN BE RE-DECLARED
3. IT CAN BE REASSIGNED  
*/

// 1. FUNCTION SCOPE VARIABLE 

function greet(){
    var x= "Hello" // x is declared inside the function it can be assigned everywhere in the function
    console.log(x)
    if (true){
        var y=x
        console.log(y)
    }
    console.log(y) // y can be called outside the block also
}
greet()

// 2. IT CAN BE RE-DECLARED 
let func1 = ()=>{
    var x = 12
    var x= 23 //we can redeclare x variable using var 
    console.log(x)
}
func1()

//3 CAN BE REASSIGNED 
let func2 = ()=>{
    var b = 2
    b="Hello" //we can reassign any values 
    console.log(b)
}
func2()