let pass = Number(prompt("Enter your password"))
let count = 1

while (pass !== 1234) {
    if (count >= 3) {
        alert("3 failed attempts. Account locked!")
        break
    }

    count++
    pass = Number(prompt("Wrong password. Try again"))
}

if (pass === 1234) {
    alert("Login successful ✅")
}
