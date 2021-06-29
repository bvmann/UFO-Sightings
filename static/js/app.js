// from data.js
var ufo = data;

var body = d3.select("tbody");

ufo.forEach(element => {
    var row = body.append("tr");
    Object.entries(element).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
    
});

var button = d3.select("#filter-btn");
var inputField=d3.select("#form")

button.on("click", runEnter);
inputField.on("submit",runEnter);
console.log(inputField)

function runEnter() {
    d3.event.preventDefault();
    var inputted=d3.select(".form-control");
    var chosenDate = inputted.property("value");
    var dateText=chosenDate.toString();
   
    var dt = dateText.split("-").reverse().sort().join("-");
    
    var dateMatch = dt.replaceAll("-","/");
    var match = dateMatch.replace(/\b0/g, '');

    
    
    var filtered = ufo.filter(ufo => ufo.datetime === match);
    console.log(match);
    console.log(filtered);
    body.html("");
    filtered.forEach(element =>{
        var row2 = body.append("tr");
        Object.entries(element).forEach(([key,value]) => {
            var cell2 =row2.append("td");
            cell2.text(value);
        });
    });
};


