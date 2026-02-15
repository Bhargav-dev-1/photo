let num = 98765
let str_num = num.toString()
let count=0

for(let i = 0;i<=str_num.length-1;i++){
    each_num = Number(str_num[i])
    if (Number.isInteger(each_num)){
        count+=1
    }
}

console.log(count)