//EASY WAY
//var myName = window.prompt("What's your name?");
//console.log("Hello",myName);
let changedtext = document.querySelector('h1');
//HARD WAY
document.getElementById("myButton").onclick = function(){

    var text = document.getElementById("myText").value;
    //var changedtext = document.getElementById("changethis").value;
    //console.log("Hello",myName);

    if (text.includes("function()")) {
        console.log("This is javascript");
        changedtext.innerText='This is Javascript';
      }
      else if (text.includes("</html>")|| (text.includes("</head>"))) {
        changedtext.innerText='This is HTML';

      }
      else if(text.includes("color:") || text.includes("width:")||text.includes("height:")||text.includes("px") ) {
        changedtext.innerText='This is CSS';
      }
      else if(text.includes("namespace")||text.includes("<iostream>")||text.includes("cout") ) {
        changedtext.innerText='This is C++';
      }
      else if(text.includes("printf")||text.includes("<stdio.h>")) {
        changedtext.innerText='This is C++';
      }
      else{
        changedtext.innerText='wtf is this';
      }
}
