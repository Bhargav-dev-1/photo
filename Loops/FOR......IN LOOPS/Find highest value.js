let scores = { Alice: 85, Bob: 92, Charlie: 78 };
let max_scores = 0
let topper = ""

for (let key in scores){
    if (scores[key] > max_scores){
        max_scores = scores[key]
        topper = key
    }
}
console.log(topper,max_scores)