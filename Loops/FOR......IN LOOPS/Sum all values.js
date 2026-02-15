let expenses = { food: 200, travel: 500, shopping: 300 };
let tot =0
for (let key in expenses){
    tot+=(expenses[key])
}
console.log(tot)