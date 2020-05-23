// from data.js
var tableData = data;


// Insert the data in the table
var tbody = d3.select("tbody");
console.log(tableData);

data.forEach((UFO) => {
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  })

// Make the button act

var button = d3.select("#filter-btn");
button.on("click", function () {
  tbody.html("");
  var inputElement = d3.select("#datetime");
  
  var inputValue = inputElement.property("value");
  
  console.log(inputValue);
  
  var filteredData = tableData.filter(result => result.datetime === inputValue);

  console.log(filteredData);


  filteredData.forEach(function(selections) {

    console.log(selections);
    
    var row = tbody.append("tr");
    
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
});
 