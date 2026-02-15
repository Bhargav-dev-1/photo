let values = [-2, 5, -1, 7, 0, 9];
let count =0
for(let each_item of values){
    if (each_item<0){
        count+=1
    }
}
console.log(count)