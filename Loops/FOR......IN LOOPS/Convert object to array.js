let colors = { primary: "Red", secondary: "Blue", tertiary: "Green" };
let arr1= []
for (let key in colors){
    arr1.push(colors[key])
}
console.log(arr1)