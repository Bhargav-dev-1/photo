let itemPrice = Number(prompt("Add item Price"))
let listItemPrice =[]
while(itemPrice != 0){
    listItemPrice.push(itemPrice)
    itemPrice = Number(prompt("Add item Price"))
}
alert(`List Of Item Prices ${listItemPrice}`)