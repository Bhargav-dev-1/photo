// EASY LEVEL (Basics of if / if–else)

//! 1. Check if a number is positive or negative
/*
num = Number(prompt("Enter any number"))
if(num>0){
    alert(num+" Is Postive Number")
}
else{
    alert(num+" Is Negative Number")
}
*/

//! 2. Check if a number is even or odd
/*
num = Number(prompt("Enter any number"))
if(num%2==0){
    alert(num+" Is Even Number")
}
else{
    alert(num+" Is Odd Number")
}
*/

//! 3 Check if a person is eligible to vote (age ≥ 18)
/*
age = Number(prompt("Enter your Age"))
if(age>=18){
    alert("Your age is "+age+" \'' YOUR ELIGIBLE FOR VOTING \'' ")
}
else{
     alert("Your age is "+age+" \'' YOUR NOT ELIGIBLE FOR VOTING \''")
}
*/
//! 4 Find the greater of two numbers
/*
num1=Number(prompt("Enter first numbers"))
num2=Number(prompt("Enter seconds numbers"))
if (num1>num2){
    alert(num1+" Is the largest")
}
else{
     alert(num2+" Is the largest")
}
*/
//! 5 Check if a number is divisible by 5
/*
num = Number(prompt("Enter a number"))
if (num%5==0){
    alert(num+" It is divisible by 5")
}
else{
    alert(num+" It is divisible by 5")
}
    */

//! 6 Check if a character is a vowel or consonant
/*
character = prompt("Enter any character")
if (character=='a' || character=='e' || character=='i' || character=='e' || character=='u'){
    alert(character+" Is Vowel")
}
else{
    alert(character+" Is a Constant")
}
    */

//! Check if a temperature is hot (>30) or cold
/*
temp = prompt("Enter a temperature")
if (temp>30){
    alert(temp+" Hot")
}
else{
    alert(temp+" Cold")
}
*/
//? MEDIUM 

//! 8 Find the largest of three numbers
/*
num1 = prompt("Enter any first Number")
num2 = prompt("Enter any second Number")
num3 = prompt("Enter any third Number")
if(num1>num2 && num1>num3){
    alert(num1+" It is Largest Number")
}
else if(num2>num1 && num2>num3){
    alert(num2+" It is the Largest Number")
}
else{
    alert(num3+" It is Largest Number")
}
*/

//! Print grade based on marks
/* 90–100 → A
75–89 → B
50–74 → C
<50 → Fail */
/*
marks = prompt("Enter a marks")
if(marks>=90 && marks<=100){
    alert("A Grade")
}
else if(marks>=75 && marks<=89){
    alert("B Grade")
}
else if(marks>=74 && marks<=50){
    alert("C Grade")
}
else{
    alert("Fail")
}
*/
//! Leap Year Rules
/*
year = Number(prompt("Enter year"))
if(year%4==0 && (year%100!=0 || year%400==0)){
    alert("Leap Year")
}
else{
    alert("Not A Leap Year")
}
*/

//! Electricity Bill Calculation
// units = Number(prompt("Enter units"))
// if (units<=100){
//     alert("Bill Amount = "+(units*1.50))
// }
// else if (units>=101 && units<=200){
//     alert("Bill Amount = "+units*2.50)
// }
// else if (units>=201 && units<=300){
//     alert("Bill Amount = "+units*4.00)
// }
// else{
//     alert("Bill Amount = "+units*6.00)
// }

//! ATM Withdrawal Validation
/*
let balance = 10000
let minBalance = 500
let withdrawAmount = prompt("Your Account Balance = "+balance+"\n Enter Withdraw Amount")
if(withdrawAmount<=0 && withdrawAmount%100!=0){
    alert("Invalid Withdrawal Amount")
}
else if(withdrawAmount>balance){
     alert("Insufficient Balance")
}
else if(balance-withdrawAmount<minBalance){
    alert("Minimum balance must be maintained")
}
else{
    alert("**** Withdrawal Success **** \n Your Remaining Balance = "+(balance-withdrawAmount))
}
*/

//! Railway Ticket Pricing
let age = Number(prompt("Enter your Age"))
let travelClass = prompt("Enter Travel Class \n 1. Sleeper Class (S) \n 2. AC Class (AC)")
let distance = Number(prompt("Enter the distance"))

if (age<12){
    if(travelClass.toUpperCase()=="S"){
        let amount = distance*1
        let discountAmount = amount-(amount/100)*40 
        alert("SLEEPER CLASS TICKET \n Total Amount = "+discountAmount)
    }
    else{
        let amount=distance*2
        let discountAmount = amount-(amount/100)*40
        alert("AC CLASS TICKET \n Total Amount = "+discountAmount)
    }
}
else if (age>=12 && age<=59){
    if(travelClass.toUpperCase()=="S"){
        let amount = distance*1
        alert("SLEEPER CLASS TICKET \n Total Amount = "+amount)
    }
    else{
        let amount=distance*2
        alert("AC CLASS TICKET \n Total Amount = "+amount)
    }
}
else{
    if(travelClass.toUpperCase()=="S")
    {
        let amount = distance*1
        let discountAmount = amount-(amount/100)*30 
        alert("SLEEPER CLASS TICKET \n Total Amount = "+discountAmount)
    }
    else{
         let amount=distance*2
        let discountAmount = amount-(amount/100)*30
        alert("AC CLASS TICKET \n Total Amount = "+discountAmount)
    }
}