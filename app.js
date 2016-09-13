var text = document.createTextNode("Hello World");

document.getElementById("mainH1").appendChild(text);

var textColors = ["blue", "red", "green", "pink", "yellow", "black", "brown", "orange", "burlywood", "firebrick", "slategray"]
var index = 0;

function changeColor() {
    var targetElement = document.getElementById("mainH1");
    targetElement.style.color = textColors[index];
    index++;
    if (index == textColors.length) {
        index = 0;
    }
}