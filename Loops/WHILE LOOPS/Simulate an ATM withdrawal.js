let balance =10
while (balance>0){
    let withdraw = Number(prompt(`Balance : ${balance}\nEnter your withdraw amount`))

    if (withdraw<=0){
        console.log("Invalid amount")
        continue;
    }
    if (withdraw>balance){
        console.log("Insufficient balance");
        break;
    }
     balance -= withdraw;
    console.log("Remaining balance:", balance);
}

console.log("Transaction ended");