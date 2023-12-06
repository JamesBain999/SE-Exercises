let i = true;
function changeMe1(){
    if (i) {
        document.getElementById("column1").style.backgroundColor = 'green';
        let a = document.getElementById("text1").value;
        document.getElementById("heading1").textContent = a;
        i=false
    } else {
        document.getElementById("column1").style.backgroundColor = 'goldenrod';
        let a = document.getElementById("text1").value;
        document.getElementById("heading1").textContent = a;
        i=true
    }
}
let j = true;
function changeMe2(){
    if (j) {
        document.getElementById("column2").style.backgroundColor = 'lightblue';
        let b = document.getElementById("text2").value;
        document.getElementById("heading2").textContent = b;
        j=false
    } else {
        document.getElementById("column2").style.backgroundColor = 'goldenrod';
        let b = document.getElementById("text2").value;
        document.getElementById("heading2").textContent = b;
        j=true
    }
}