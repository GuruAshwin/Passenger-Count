let count = document.getElementById("count")
let temp = 0
function increment(){
    temp=temp + 1
    count.innerText=temp
}
function reset(){
    count.innerText=0
    temp=0
}
function save(){
    console.log(count.innerText)
}