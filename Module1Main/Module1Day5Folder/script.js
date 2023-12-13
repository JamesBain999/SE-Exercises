function diceValue() {
    var sel = document.getElementById('roll');
    var option = sel.options[sel.selectedIndex].value;
    document.getElementById("result").textContent = ("Your result is: " + Math.floor((Math.random() * (option)) + 1))
    }

function testMe(x) {
    if (Math.floor((Math.random() * (x)) + 1) <= x && Math.floor((Math.random() * (x)) + 1) >= 1) {
        return true
    } else {
        return false
    }}

module.exports = testMe