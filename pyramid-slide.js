var heightElem = document.getElementById("pyramid-height");
var sel = document.getElementById("brick-symbol");
  //this variable is muteable and needs to be changed when it is being called.


function getSelectedOption(sel){
  var opt;
  for (var i = 0, len = sel.options.length; i < len; i++){
    opt = sel.options[i];
    if (opt.selected === true){
      break;
    }
  }
  alert(opt);
}

function getSymbol(symbol){
  alert("the symbol has been changed to " + symbol);
}

function printValue(){
  document.getElementById("rangeValue").innerHTML = heightElem.value;
}

function drawPyramid(height, symbol) {
//Write a function to get the selected value of brick symbol.
    var symbolElem = sel.options[sel.selectedIndex].value;
    document.getElementById("pyramid").innerHTML = "";

    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += symbolElem;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
