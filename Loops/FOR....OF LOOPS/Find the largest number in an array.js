let marks = [45, 67, 89, 34, 90];
let max_marks = marks[0]
for (each_item of marks){
    if (each_item > max_marks){
        max_marks = each_item
    }
}
console.log(max_marks)