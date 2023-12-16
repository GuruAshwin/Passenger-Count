// // let n1 = document.getElementById("count");
// // let a1 = annotate(n1, { type: 'box', color: 'blue' });
// // a1.show();
let print = document.getElementById("print")
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
function save() {
    let countStr = temp + " - "
    print.textContent =print.textContent + countStr
}