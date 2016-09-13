var text = document.createTextNode("Hello World");

document.getElementById("mainH1").appendChild(text);

var textColors = ["blue", "red", "green", "pink", "yellow", "black", "brown", "orange", "burlywood", "firebrick", "slategray"]
var textSizes = ["25px", "50px", "1000px", "5px", "30px", "100px", "44px", "15px"]
var colorIndex = 0;
var fontIndex = 0;

function changeColor() {
    var targetElement = document.getElementById("mainH1");
    targetElement.style.color = textColors[colorIndex];
    colorIndex++;
    if (colorIndex == textColors.length) {
        colorIndex = 0;
    }
}


function changeFontSize() {
    var targetElement = document.getElementById("mainH1");
    targetElement.style['font-size'] = textSizes[fontIndex];
    fontIndex++;
    if (fontIndex == textSizes.length) {
        fontIndex = 0;
    }
}