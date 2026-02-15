let employee = { id: 1, name: "Ravi", dept: "IT" };
let findKey = "dept"
for (let key in employee){
    if (findKey == key){
        console.log(key,"Is present in the object")
    }
}