// var playerOne = document.querySelectorAll(input)[0].value;

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1)
randomNumber1 = randomNumber1 + 1
console.log(randomNumber1);
// in the code above i tried generating random figures from 1 to 6 and rounding them of at 6.

var randomImage = "/image/dice" + randomNumber1 + ".png";
// i used concatenation to try replacing thr img source
console.log(randomImage);

let n = randomNumber1;
let ni = "/images/dice" + randomNumber1 + ".png";
let n0 = document.querySelectorAll("img")[0];
// we went further with modifying the image so that when a random number is generated a corresponding dice image is picked.
if (n = true) {
    n0.setAttribute("src", ni)

}
// in this part i was able to make sure every random number gets amatching dice image

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2)
randomNumber2 = randomNumber2 + 1
console.log(randomNumber2);
let k = randomNumber2;
let k1 = "/images/dice" + randomNumber2 + ".png";
console.log(k1);
// in the code above i tried generating random figures from 1 to 6 and rounding them of at 6.

let n1 = document.querySelectorAll("img")[1];
if (k = true) {
    n1.setAttribute("src", k1)
};
// in this part i was able to make sure every random number gets amatching dice image

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML =  " 🚩 Player 1 Wins ! 🏆 "

} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = " 🚩 Player 2 Wins ! 🏆"

} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = " DRAW !!! ✌✌✌"
}
// the final results and they would be displayed.




