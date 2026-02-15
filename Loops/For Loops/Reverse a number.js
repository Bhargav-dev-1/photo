let num = 1234
let str_num = num.toString()
let new_num =""
for (let i=str_num.length-1;i>=0;i--){
    new_num+=str_num[i]
}
console.log(new_num)