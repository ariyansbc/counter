const counter = document.getElementById("counter");
const widthChange = document.getElementById("width-change");

var count = 0;
const questionTime = 10
let width = 150;
let unit = width / questionTime;
let TIMER;
TIMER = setInterval(renderCounter, 1000); //1000ms = 1s
function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        widthChange.style.display= "block"
        widthChange.style.width = count * unit + 'px';
        
        count++;
    } else {
        count = 0;
    }
}






// // if(count <= 10) {
// //     counter.innerHTML = count;
// //     count++;
// // }
// while(count < 10) {
//     counter.innerHTML = count;
//     count++;
// }