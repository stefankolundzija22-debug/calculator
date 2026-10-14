let display = document.getElementById("display");
let one = document.getElementById("one")
one.onclick = function() {
    display.value = display.value + "1";
}
let two = document.getElementById("two")
two.onclick = function () {
    display.value = display.value + "2";
}
let three = document.getElementById("three")
three.onclick = function () {
    display.value = display.value + "3";
}
let four = document.getElementById("four")
four.onclick = function () {
    display.value = display.value + "4";
}
let five = document.getElementById("five")
five.onclick = function () {
    display.value = display.value + "5";
}
let six = document.getElementById("six")
six.onclick = function () {
    display.value = display.value + "6";
}
let seven = document.getElementById("seven")
seven.onclick = function () {
    display.value = display.value + "7";
}
let eight = document.getElementById("eight")
eight.onclick = function () {
    display.value = display.value + "8";
}
let nine = document.getElementById("nine")
nine.onclick = function () {
    display.value = display.value + "9";
}
let plus = document.getElementById("plus")
plus.onclick = function () {
    display.value = display.value + "+";
}
let minus = document.getElementById("minus")
minus.onclick = function () {
    display.value = display.value + "-";
}
let equel = document.getElementById("equel")
equel.onclick = function () {
    display.value =  eval(display.value);
}
let simes = document.getElementById("times")
times.onclick = function () {
    display.value = display.value + "*";
}
let divide = document.getElementById("divide")
divide.onclick = function () {
    display.value = display.value + "/";
}
let perc = document.getElementById("perc")
perc.onclick = function () {
    display.value = display.value + "%";
}
let root = document.getElementById("root")
root.onclick = function () {
    display.value = Math.sqrt(display.value);
}
let square = document.getElementById("square")
square.onclick = function () {
    display.value = display.value ** 2;
}
let clear = document.getElementById("clear");

clear.onclick = function() {
    display.value = "";
}
let zero = document.getElementById("zero")
zero.onclick = function () {
    display.value = display.value + "0";
}
