var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColor1 = document.querySelector(".randomColor");

function setGradient() {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value + ")";

    css.textContent = body.style.background + ";";
}

function randomColorGenerator() {
    var rgb = [];
    for (n = 0; n < 3; n++) {
        rgb.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';

}

function randomBackgroundGenerator() {
    body.style.background =
        "linear-gradient(to right, "
        + randomColorGenerator()
        + ", "
        + randomColorGenerator() + ")";

    css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomColor1.addEventListener("click", randomBackgroundGenerator);

